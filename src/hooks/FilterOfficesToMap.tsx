import { OfficeNode } from "@/graphql/generated/types";

export interface Office {
  id?: number;
  latitude: number;
  longitude: number;
  name?: string;
}

export const FilterOfficesToMap = (
  nodes: (OfficeNode | null | undefined)[] | null | undefined
): Office[] => {
  if (!nodes) return [];

  return nodes
    .filter((n): n is OfficeNode => !!n) 
    .map(n => ({
      id: Number(n.id),
      latitude: n.latitude,
      longitude: n.longitude,
      name: n.name,
    }));
};
