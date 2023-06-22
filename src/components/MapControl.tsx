import L from "leaflet";
import { Marker } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
import { Location } from "../types/geoLocation";
import iconLocation from "/images/icon-location.svg";

const MapControl = ({ location }: { location: Location }) => {
  const parentMap = useMap();
  const position: L.LatLngTuple = [location.lat, location.lng];

  parentMap.setView(position, 15);

  const icon = L.icon({ iconUrl: iconLocation, iconAnchor: [23, 56] });

  return <Marker position={position} icon={icon} />;
};

export default MapControl;
