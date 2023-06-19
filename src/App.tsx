import "./App.css";
import iconArrow from "/images/icon-arrow.svg";

function App() {
  return (
    <>
      <header>
        <h3>IP Address Tracker</h3>
        <form>
          <input
            type="text"
            placeholder="Search for any IP address or domain"
          />
          <button type="submit">
            <img src={iconArrow} alt="arrow icon" />
          </button>
        </form>
        <ul>
          <li>
            <article>
              <h6>IP ADDRESS</h6>
              <p>192.212.174.101</p>
            </article>
          </li>
          <li>
            <article>
              <h6>LOCATION</h6>
              <p>Brooklyn, NY 10001</p>
            </article>
          </li>
          <li>
            <article>
              <h6>TIMEZONE</h6>
              <p>UTC -05:00</p>
            </article>
          </li>
          <li>
            <article>
              <h6>ISP</h6>
              <p>SpaceX Starlink</p>
            </article>
          </li>
        </ul>
      </header>

      <div id="map"></div>
    </>
  );
}

export default App;
