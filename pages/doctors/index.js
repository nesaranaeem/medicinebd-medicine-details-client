import axios from "axios";
import { NextSeo } from "next-seo";
import Link from "next/link";
import DoctorCard from "../../components/cards/DoctorCard";
export const getServerSideProps = async ({ query }) => {
  const page = query.page ? parseInt(query.page, 10) : 1;
  const items = query.item || 12;
  // Make an API call
  const res = await axios.get(
    `https://medicinebd-medicine-details-server.vercel.app/v1/doctors/${page}/${items}`,
    {
      headers: { "Accept-Encoding": "gzip,deflate,compress" },
    }
  );
  const data = res.data;

  // Pass data to the component props
  return {
    props: {
      data,
      currentPage: page,
      numPages: data.totalPage,
    },
  };
};
function Doctors(props) {
  const { data, currentPage, numPages } = props;
  const doctors = data.listings;

  return (
    <>
      <NextSeo
        title={`Doctors | Total ${data.total} Doctors`}
        description={`Browse Doctor from the total ${data.total} doctors.`}
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
              Doctors Found. Total pages
              <div className="badge badge-md mx-1">{data.totalPage}</div>
            </span>
          </div>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
        {doctors?.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>
        ))}
      </div>
      <div className="my-3 flex justify-center justify-items-center">
        <div>
          <div className="btn-group grid grid-cols-2">
            {currentPage > 1 && (
              <Link
                className="btn btn-outline"
                href={`/doctors?page=${currentPage - 1}`}
              >
                Previous
              </Link>
            )}
            {currentPage < numPages && (
              <Link
                className="btn btn-outline"
                href={`/doctors?page=${currentPage + 1}`}
              >
                Next
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Doctors;
