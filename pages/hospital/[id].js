import axios from "axios";
import HospitalDetails from "../../components/cards/hospitalDetails/HospitalDetails";

export const getServerSideProps = async ({ query }) => {
  const id = query.id;
  // Make an API call
  const res = await axios.get(
    `https://medicinebd-medicine-details-server.vercel.app/v1/hospitals/${id}`,
    {
      headers: { "Accept-Encoding": "gzip,deflate,compress" },
    }
  );
  const data = res.data;

  // Pass data to the component props
  return {
    props: {
      data,
    },
  };
};
function Hospitals(props) {
  const { data } = props;
  const hospitals = data.result;
  return (
    <>
      <div>
        {hospitals?.map((hospital) => (
          <HospitalDetails key={hospital.id} hospital={hospital} />
        ))}
      </div>
    </>
  );
}

export default Hospitals;
