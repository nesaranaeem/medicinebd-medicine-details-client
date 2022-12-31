import axios from "axios";
import DoctorDetails from "../../components/cards/doctorDetails/DoctorDetails";

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
        <h3 className="text-center">coming soon</h3>
        {/* {doctors?.map((doctor) => (
          <DoctorDetails key={doctor.id} doctor={doctor}></DoctorDetails>
        ))} */}
      </div>
    </>
  );
}

export default Hospitals;
