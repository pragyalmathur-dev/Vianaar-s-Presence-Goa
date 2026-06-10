export interface Region {
  id: string;
  name: string;
  lat: number;
  lng: number;
  description: string;
  highlights: string[];
  district: 'North Goa' | 'South Goa';
}
