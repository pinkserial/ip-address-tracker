import { useState, useEffect } from "react";
import { GeoLocation } from "../types/geoLocation";
import fetchGeoLocation from "../api/fetchGeoLocation";

const initialGeoLocation: GeoLocation = {
  ip: "",
  location: {
    region: "",
    city: "",
    lat: 0,
    lng: 0,
    timezone: "",
  },
  isp: "",
};

const useGeoLocation: () => [
  GeoLocation,
  React.Dispatch<React.SetStateAction<GeoLocation>>
] = () => {
  const [geoLocation, setGeoLocation] =
    useState<GeoLocation>(initialGeoLocation);

  useEffect(() => {
    async function startFetch() {
      const geolocation = await fetchGeoLocation("");
      setGeoLocation(geolocation);
    }

    startFetch();
  }, []);

  return [geoLocation, setGeoLocation];
};

export default useGeoLocation;
