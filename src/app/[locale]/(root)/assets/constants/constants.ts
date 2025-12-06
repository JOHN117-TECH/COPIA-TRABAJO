import contentBanner from "../images/content-banner.jpg";
import contentSustainability from "../images/sustainability_banner.jpg";
import contract from "../images/contract.jpg";
import marine from "../images/marine.jpg";
import footwear from "../images/Footwear.png";
import protection from "../images/Protection.jpg";
import transportation from "../images/transportation.jpg";
import bannerDesk from "../images/banner-desk.jpg";
import bannerMobile from "../images/banner-mobile.jpg";
import homeMobile from "../images/home-mobile.jpg";
import homeDesk from "../images/home-desk.jpg";
import banner1 from "../images/banner1-desk.jpg";
import bannerDeskMarine from "../images/banner-desk-marine.jpg";
import bannerMobileTrucks from "../images/banner-mobil-trucks.jpg";
import bannerMobileMarine from "../images/banner-mobil-marine.jpg";
import bannerMobileHospital from "../images/banner-mobil-hospitality.jpg";
import homeDeskTrucks from "../images/home-desk-trucks.jpg";
import homeMobileHosp from "../images/home-mobil-hospitality.jpg";
import homeMobileTrucks from "../images/home-mobil-trucks.jpg";
import homeDeskHosp from "../images/home-desk-hospitality.jpg";


export const SLIDES_BANNER_HOME = [
  {
    type: "image",
    src: contentBanner,
    title: "AboutUs.WeAreSpradling.bannerTitle",
    description: "AboutUs.WeAreSpradling.bannerDesc",
    buttonText: "AboutUs.WeAreSpradling.bannerButton",
    path: "/products"
  },
  {
    type: "video",
    src: "https://player.vimeo.com/video/1111986027?share=copy",
    vimeoId: '1111986027',
    srcMobile: "https://player.vimeo.com/video/1111986835?share=copy",
    title: "AboutUs.WeAreSpradling.bannerTitle2",
    description: "AboutUs.WeAreSpradling.bannerDesc2",
    buttonText: "AboutUs.WeAreSpradling.bannerButton2",
  },
  {// TODO: Quitar imagenes de prueba
    type: "image",
    src: bannerDesk,
    title: "Desktop",
    description: "AboutUs.WeAreSpradling.bannerDesc",
    buttonText: "AboutUs.WeAreSpradling.bannerButton",
    path: "/products"
  },
  {
    type: "image",
    src: banner1,
    title: "Desktop",
    description: "AboutUs.WeAreSpradling.bannerDesc",
    buttonText: "AboutUs.WeAreSpradling.bannerButton",
    path: "/products"
  },
  {
    type: "image",
    src: bannerDeskMarine,
    title: "Desktop",
    description: "AboutUs.WeAreSpradling.bannerDesc",
    buttonText: "AboutUs.WeAreSpradling.bannerButton",
    path: "/products"
  },
  {
    type: "image",
    src: bannerMobileHospital,
    title: "Mobile",
    description: "AboutUs.WeAreSpradling.bannerDesc",
    buttonText: "AboutUs.WeAreSpradling.bannerButton",
    path: "/products"
  },
  {
    type: "image",
    src: bannerMobileMarine,
    title: "Mobile",
    description: "AboutUs.WeAreSpradling.bannerDesc",
    buttonText: "AboutUs.WeAreSpradling.bannerButton",
    path: "/products"
  },
  {
    type: "image",
    src: bannerMobileTrucks,
    title: "Mobile",
    description: "AboutUs.WeAreSpradling.bannerDesc",
    buttonText: "AboutUs.WeAreSpradling.bannerButton",
    path: "/products"
  },
];

export const SLIDES_SUSTAINABILITY = [
  {
    type: "image",
    src: contentSustainability,
    title: "Transforming the present is our path to a sustainable future",
    buttonText: "AboutUs.SustainabilityHome.button",
  },
  {
    type: "image",
    src: contentSustainability,
    title: "Transforming the present is our path to a sustainable future",
    buttonText: "AboutUs.SustainabilityHome.button",
  },
];

export const SLIDES_MARKETS = [
  {//TODO: Quitar imagenes de prueba
    type: "image",
    src: homeDeskHosp,
  },
  {
    type: "image",
    src: homeDesk,
  },
  {
    type: "image",
    src: homeDeskTrucks
  },
  {
    type: "image",
    src: protection,
  },
  {
    type: "image",
    src: transportation,
  },
]

export const SLIDES_MARKETS_MOBILE = [
  {//TODO: Quitar imagenes de prueba
    type: "image",
    src: homeMobileHosp,
  },
  {
    type: "image",
    src: homeMobile,
  },
  {
    type: "image",
    src: homeMobileTrucks
  },
  {
    type: "image",
    src: protection,
  },
  {
    type: "image",
    src: transportation,
  },
]