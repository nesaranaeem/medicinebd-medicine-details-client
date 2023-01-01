import Link from "next/link";
import { NextSeo } from "next-seo";
import Map from "../../maps/Map";

const HospitalDetails = ({ hospital }) => {
  const { name, address, specialty, type, phone, latitude, longitude } =
    hospital;

  return (
    <>
      <NextSeo
        title={`${name} - Details`}
        description={`${name} ${specialty} ${address}`}
      />
      <div>
        <div className="m-5 text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href={`/hospitals`}>Hospitals</Link>
            </li>
            <li>{name}</li>
          </ul>
        </div>
        <div className="flex justify-center text-black bg-base-100 my-3">
          <div className="p-4 w-4/5 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
              <h1 className="font-semibold mb-1 text-xl text-gray-900 dark:text-white">
                {name}
              </h1>
              <span className="mb-3 text-lg font-normal text-black dark:text-gray-400">
                Address: {address}
              </span>
              {latitude && (
                <>
                  <h3 className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-5">
                    Maps Location
                  </h3>
                  <Map latitude={latitude} longitude={longitude}></Map>
                </>
              )}
              {type?.length > 3 && (
                <div className="mt-3">
                  <div className="mt-2 flex flex-col gap-2 justify-items-center items-center">
                    <h4 className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-semibold rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">
                      Type: {type}
                    </h4>
                  </div>
                </div>
              )}
              {specialty?.length > 2 && (
                <div>
                  <h3 className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-semibold rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">
                    Specialty: {specialty}
                  </h3>
                </div>
              )}
              {phone?.length > 2 && (
                <div>
                  <h3 className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">
                    Phone: {phone}
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HospitalDetails;
