export interface GeoLocation {
  ip: string;
  location: Location;
  isp: string;
}

export interface Location {
  region: string;
  lat: number;
  lng: number;
  city: string;
  timezone: string;
}
