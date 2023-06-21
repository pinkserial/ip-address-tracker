import L from "leaflet";
import { Marker } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
import { Location } from "../types/geoLocation";

const MapControl = ({ location }: { location: Location }) => {
  const parentMap = useMap();
  const position: L.LatLngTuple = [location.lat, location.lng];

  parentMap.setView(position, 15);

  const icon = L.icon({ iconUrl: "/public/images/icon-location.svg" });

  return <Marker position={position} icon={icon} />;
};

export default MapControl;
