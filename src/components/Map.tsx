import { TileLayer, MapContainer } from "react-leaflet";
import MapControl from "./MapControl";
import { Location } from "../types/geoLocation";

const Map = ({ location }: { location: Location }) => {
  return (
    <MapContainer className="map" scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapControl location={location} />
    </MapContainer>
  );
};

export default Map;
