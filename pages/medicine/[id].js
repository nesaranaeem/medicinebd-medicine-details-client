import axios from "axios";

import MedicineDetails from "../../components/cards/medicineDetails/MedicineDetails";
export const getServerSideProps = async ({ query }) => {
  const id = query.id;
  // Make an API call
  const res = await axios.get(
    `https://medicinebd-medicine-details-server.vercel.app/v1/medicine-list/${id}`,
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
  const medicines = data.result;

  return (
    <>
      <div>
        {medicines?.map((medicine) => (
          <MedicineDetails
            key={medicine.brand_id}
            medicine={medicine}
          ></MedicineDetails>
        ))}
      </div>
    </>
  );
}

export default Doctor;
