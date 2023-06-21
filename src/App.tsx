import Map from "./components/Map";
import Header from "./components/Header";
import useGeoLocation from "./hooks/useGeoLocation";
import "leaflet/dist/leaflet.css";
import "./App.css";

function App() {
  const [geoLocation, setGeoLocation] = useGeoLocation();

  return (
    <>
      <Header geoLocation={geoLocation} setGeoLocation={setGeoLocation} />
      <Map location={geoLocation.location} />
    </>
  );
}

export default App;
