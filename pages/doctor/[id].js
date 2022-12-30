import axios from "axios";
import DoctorDetails from "../../components/cards/doctorDetails/DoctorDetails";

export const getServerSideProps = async ({ query }) => {
  const id = query.id;
  // Make an API call
  const res = await axios.get(
    `https://medicinebd-medicine-details-server.vercel.app/v1/doctors/${id}`,
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
function Doctor(props) {
  const { data } = props;
  const doctors = data.result;

  return (
    <>
      <div>
        {doctors?.map((doctor) => (
          <DoctorDetails key={doctor.id} doctor={doctor}></DoctorDetails>
        ))}
      </div>
    </>
  );
}

export default Doctor;
