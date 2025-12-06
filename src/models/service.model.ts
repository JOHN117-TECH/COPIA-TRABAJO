export interface Service {
  id: number;
  name: string;
  description: string;
  slug: string;
  imageThumbMedium: string; // e.g., "30 mins", "1 hour"
  imageAlt: string; // Optional field for service image
}

export interface GetServicesResponse {
  services: Service[];
  total: number; // Total number of services available
  page: number; // Current page
  pageSize: number; // Number of services per page
}