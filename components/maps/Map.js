import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const Map = ({ latitude, longitude }) => {
  const containerStyle = {
    width: "90%",
    height: "45vh",
  };

  const center = {
    lat: Number(latitude),
    lng: Number(longitude),
  };

  return (
    <>
      <LoadScript googleMapsApiKey={process.env.NEXT_GOOGLE_MAPS_API}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default Map;
