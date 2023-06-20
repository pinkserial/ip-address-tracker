import fetchGeoLocation from "../api/fetchGeoLocation";
import GeoLocation from "../types/geoLocation";
import iconArrow from "/images/icon-arrow.svg";

const Form = ({
  setGeoLocation,
}: {
  setGeoLocation: (g: GeoLocation) => void;
}) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="input" placeholder="Search for any IP address or domain" />
      <button type="submit">
        <img src={iconArrow} alt="arrow icon" />
      </button>
    </form>
  );
};

export default Form;
