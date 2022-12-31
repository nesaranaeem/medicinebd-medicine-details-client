import axios from "axios";
import { NextSeo } from "next-seo";
import Link from "next/link";
import AutoCompleteHospitals from "../../components/autocomplete/AutoCompleteHospitals";
import HospitalCard from "../../components/cards/HospitalCard";
export const getServerSideProps = async ({ query }) => {
  const page = query.page ? parseInt(query.page, 10) : 0;
  const items = query.item || 12;
  // Make an API call
  const res = await axios.get(
    `https://medicinebd-medicine-details-server.vercel.app/v1/hospitals/${page}/${items}`,
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
function Hospitals(props) {
  const { data, currentPage, numPages } = props;
  const hospitals = data.listings;

  return (
    <>
      <NextSeo
        title={`Hospitals | ${
          currentPage < 1 ? "" : `Page ${currentPage} of ${data.totalPage} |`
        } Total ${data.total} Hospitals`}
        description={`Browse Hospitals from the total ${data.total} hospitals.`}
      />
      <div className="mx-auto my-3 text-black">
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
              Hospitals Found.
            </span>
          </div>
        </div>
        {/* breadcrumbs */}
        {currentPage > 0 ? (
          <div className="m-5 text-sm breadcrumbs">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href={`/hospitals?page=${currentPage - 1}`}>
                  Hospitals
                </Link>
              </li>
              <li>Page {currentPage}</li>
            </ul>
          </div>
        ) : (
          <div className="mx-2 text-sm breadcrumbs">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Hospitals</li>
            </ul>
          </div>
        )}
      </div>

      <>
        <AutoCompleteHospitals />
      </>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
        {hospitals?.map((hospital) => (
          <HospitalCard key={hospital.id} doctor={hospital}></HospitalCard>
        ))}
      </div>
      <div className="text-center">
        You are on the{" "}
        {currentPage === 0 ? <p>First</p> : <p>{currentPage} number</p>} Page of
        total {data.totalPage}
      </div>
      <div className="my-3 flex justify-center justify-items-center">
        <div>
          <div className="btn-group grid grid-cols-1 gap">
            {currentPage > 0 && (
              <Link
                className="btn btn-outline"
                href={`/hospitals?page=${currentPage - 1}`}
              >
                Previous
              </Link>
            )}
            {currentPage < numPages && (
              <Link
                className="btn btn-outline"
                href={`/hospitals?page=${currentPage + 1}`}
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

export default Hospitals;
