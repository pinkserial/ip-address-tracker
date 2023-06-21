import { GeoLocation } from "../types/geoLocation";
import Form from "./Form";

const Header = ({
  geoLocation,
  setGeoLocation,
}: {
  geoLocation: GeoLocation;
  setGeoLocation: (g: GeoLocation) => void;
}) => {
  return (
    <header>
      <h3>IP Address Tracker</h3>
      <Form setGeoLocation={setGeoLocation} />
      <ul>
        <li>
          <article>
            <h6>IP ADDRESS</h6>
            <p>{geoLocation.ip}</p>
          </article>
        </li>
        <li>
          <article>
            <h6>LOCATION</h6>
            <p>
              {geoLocation.location.region}, {geoLocation.location.city}
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
  );
};

export default Header;
