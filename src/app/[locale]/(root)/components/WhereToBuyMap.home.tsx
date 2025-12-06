"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

type Props = {
  offices: Office[];
  postalCode?: string;
  coordinates?: { lat: number; lng: number };
};

interface Office {
  id?: number;
  latitude: number;
  longitude: number;
  name?: string;
}

const haversine = (c1: { lat: number; lng: number }, c2: { lat: number; lng: number }) => {
  const R = 6371;
  const dLat = ((c2.lat - c1.lat) * Math.PI) / 180;
  const dLng = ((c2.lng - c1.lng) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(c1.lat * Math.PI / 180) *
      Math.cos(c2.lat * Math.PI / 180) *
      Math.sin(dLng / 2) ** 2;
  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
};

const WhereToBuyMap = ({ postalCode, coordinates, offices }: Props) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY_MAP ?? "";
  const [zoom, setZoom] = useState<number | undefined>();
  const [coordinatesPostalCode, setCoordinatesPostalCode] = useState<{ lat: number; lng: number } | undefined>();
  const [center, setCenter] = useState<{ lat: number; lng: number } | undefined>();
  const handlerZoomChange = (zoom: number, center: { lat: number; lng: number }) => {
    setZoom(zoom);
    setCenter(center);
    setTimeout(() => {
      setZoom(undefined);
      setCenter(undefined);
    }, 500);
  };

  const getInitialCenter = () => {
    if (!offices.length) return { lat: 30, lng: -30 };
    if (offices.length === 1) return { lat: offices[0].latitude, lng: offices[0].longitude };

    const bounds = new google.maps.LatLngBounds();
    offices.forEach(o => bounds.extend({ lat: o.latitude, lng: o.longitude }));

    const centerLat = (bounds.getNorthEast().lat() + bounds.getSouthWest().lat()) / 2;
    const centerLng = (bounds.getNorthEast().lng() + bounds.getSouthWest().lng()) / 2;

    return { lat: centerLat, lng: centerLng };
  };

  useEffect(() => {
    if (!postalCode) {
      handlerZoomChange(2, getInitialCenter());
      setCoordinatesPostalCode(undefined);
      return;
    }

    const fetchCoords = async () => {
      try {
        const res = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${postalCode}&key=${apiKey}`
        );
        const json = await res.json();
        if (json.results?.[0]) {
          const loc = json.results[0].geometry.location;
          setCoordinatesPostalCode(loc);
          if (offices.length) {
            const nearestOffice = offices.reduce((prev, curr) =>
              haversine(loc, { lat: curr.latitude, lng: curr.longitude }) <
              haversine(loc, { lat: prev.latitude, lng: prev.longitude })
                ? curr
                : prev
            );
            handlerZoomChange(18, { lat: nearestOffice.latitude, lng: nearestOffice.longitude });
          } else {
            handlerZoomChange(12, loc);
          }
        } else {
          handlerZoomChange(2, getInitialCenter());
          setCoordinatesPostalCode(undefined);
        }
      } catch (e) {
        console.error("Error fetching geocode:", e);
        handlerZoomChange(2, getInitialCenter());
        setCoordinatesPostalCode(undefined);
      }
    };
    fetchCoords();
  }, [postalCode, offices, apiKey]);

  useEffect(() => {
    if (coordinates) handlerZoomChange(18, coordinates);
  }, [coordinates]);

  useEffect(() => {
    if ((!postalCode && !coordinates) || (!offices.length)) {
      handlerZoomChange(2, getInitialCenter());
    }
  }, [offices, postalCode, coordinates]);

  return (
    <div className="map w-full h-full relative">
      <APIProvider apiKey={apiKey}>
        <Map
          style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
          center={center ?? undefined}
          zoom={zoom ?? undefined}
          defaultCenter={{ lat: 30, lng: -30 }}
          defaultZoom={2} 
          gestureHandling="greedy"
          disableDefaultUI={true} 
          mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID}
        >
          {offices.map(office => (
            <AdvancedMarker 
              key={office?.id}
              position={{ lat: office?.latitude ?? 0, lng: office?.longitude ?? 0 }}
              title={office?.name}
              onClick={() => handlerZoomChange(18, { lat: office?.latitude, lng: office?.longitude})}
            >
              <Image 
                src={'/pin-location-icon.webp'} 
                alt={office?.name || ""} 
                width={32} 
                height={32} 
              />
            </AdvancedMarker>
          ))}
        </Map>
      </APIProvider>
    </div>
  );
};

export default WhereToBuyMap;
