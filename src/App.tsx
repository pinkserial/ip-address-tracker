
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";
import { useEffect, useState } from "react";
import fetchGeoLocation from "./api/fetchGeoLocation";
import GeoLocation from "./types/geoLocation";
import MapControl from "./components/MapControl";

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

function App() {
  const [geoLocation, setGeoLocation] =
    useState<GeoLocation>(initialGeoLocation);

  useEffect(() => {
    async function startFetch() {
      const geolocation = await fetchGeoLocation("");
      console.log(geolocation);
      setGeoLocation(geolocation);
    }

    startFetch();
  }, []);

  return (
    <>
      <header>
        <h3>IP Address Tracker</h3>
        {/* <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const inputData = formData.get("input") as string;

            try {
              const newLocation = await fetchGeoLocation(inputData);
              setGeoLocation(newLocation);
            } catch (error) {
              console.error(error);
              if (error instanceof Error) {
                alert(error.message);
              }
            }
          }}
        >
          <input
            name="input"
            placeholder="Search for any IP address or domain"
          />
          <button type="submit">
            <img src={iconArrow} alt="arrow icon" />
          </button>
        </form> */}
        <ul>
          <li>
            <article>
              <h6>IP ADDRESS</h6>
              <p>{geoLocation?.ip}</p>
            </article>
          </li>
          <li>
            <article>
              <h6>LOCATION</h6>
              <p>
                {geoLocation.location.region} {geoLocation.location.city}
              </p>
            </article>
          </li>
          <li>
            <article>
              <h6>TIMEZONE</h6>
              <p>UTC {geoLocation.location.timezone}</p>
            </article>
          </li>
          <li>
            <article>
              <h6>ISP</h6>
              <p>{geoLocation.isp}</p>
            </article>
          </li>
        </ul>
      </header>
      <MapContainer className="map" zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[geoLocation.location.lat, geoLocation.location.lng]}
        />
        <MapControl
          center={[geoLocation.location.lat, geoLocation.location.lng]}
        />
      </MapContainer>
    </>
  );
}

export default App;
