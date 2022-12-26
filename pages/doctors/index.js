import axios from "axios";
import { NextSeo } from "next-seo";
import { useEffect } from "react";
import DoctorCard from "../../components/cards/DoctorCard";
export async function getStaticProps() {
  // Make an API call
  const res = await axios.get(
    "https://medicinebd-medicine-details-server.vercel.app/v1/doctors",
    {
      headers: { "Accept-Encoding": "gzip,deflate,compress" },
    }
  );
  const data = res.data;
  console.log(data);
  // Pass data to the component props
  return {
    props: {
      data,
    },
  };
}

function Doctors(props) {
  const { data } = props;
  const doctors = data.result;

  return (
    <>
      <NextSeo
        title={`Doctors | Total ${data.total} Doctors`}
        description={`Browse Doctor from the total ${data.total} doctors`}
      />
      <div className="mx-auto my-3">
        <div className="alert shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info flex-shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>
              Total <div className="badge badge-md mx-1">{data.total}</div>
              Doctors Found
            </span>
          </div>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>
        ))}
      </div>
    </>
  );
}

export default Doctors;
