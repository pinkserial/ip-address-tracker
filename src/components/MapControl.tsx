import { useMap } from "react-leaflet/hooks";

const MapControl = ({ center }: { center?: [number, number] }) => {
  const parentMap = useMap();

  if (center) {
    parentMap.setView(center, 13);
  }

  return null;
};

export default MapControl;
