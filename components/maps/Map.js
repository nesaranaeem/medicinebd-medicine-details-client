import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const Map = ({ latitude, longitude }) => {
  const containerStyle = {
    width: "100%",
    height: "100vh",
  };

  const center = {
    lat: Number(latitude),
    lng: Number(longitude),
  };
  return (
    <>
      <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={19}>
          <></>
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default Map;
