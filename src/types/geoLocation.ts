export default interface GeoLocation {
  ip: string;
  location: {
    region: string;
    lat: number;
    lng: number;
    city: string;
    timezone: string;
  };
  isp: string;
}
