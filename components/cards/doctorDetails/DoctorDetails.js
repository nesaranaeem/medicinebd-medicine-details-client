import { NextSeo } from "next-seo";
import Link from "next/link";
import { useEffect, useState } from "react";
const DoctorDetails = ({ doctor }) => {
  const {
    title,
    name,
    qualification,
    designation,
    id,
    specialty,
    organization,
  } = doctor;
  const [doctorSpecialty, setDoctorSpecialty] = useState([]);
  const [doctorOrganization, setDoctorOrganization] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    fetch(
      `https://medicinebd-medicine-details-server.vercel.app/v1/doctor-speciality/${specialty}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDoctorSpecialty(data.result);
        setloading(false);
      });
  }, [doctorSpecialty]);
  useEffect(() => {
    fetch(
      `https://medicinebd-medicine-details-server.vercel.app/v1/doctor-organization/${organization}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDoctorOrganization(data.result);
        setloading(false);
      });
  }, [doctorOrganization]);
  return (
    <>
      <NextSeo
        title={`${title} ${name} - Details`}
        description={`${title} ${name} ${qualification} ${designation}`}
      />
      <div className="m-5 text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href={`/doctors`}>Doctors</Link>
          </li>
          <li>
            {title} {name}
          </li>
        </ul>
      </div>
      <div className="flex justify-center text-black bg-base-100 my-3">
        <div class="p-4 w-4/5 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div class="flex flex-col items-center pb-10">
            <h1 class="font-semibold mb-1 text-xl text-gray-900 dark:text-white">
              {title} {name}
            </h1>
            <span class="mb-3 text-lg font-normal text-black dark:text-gray-400">
              {qualification}
            </span>
            <div className="my-3">
              <div className="mt-2 flex flex-col gap-2 justify-items-center items-center">
                <h4 className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-semibold rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">
                  Designation: {designation}
                </h4>
              </div>
              {loading ? (
                <>
                  <div className="text-center my-3 text-2xl">
                    <div role="status">
                      <svg
                        className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {doctorSpecialty.map((specialtyName) => (
                    <div>
                      <h3 className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-semibold rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">
                        Specialty: {specialtyName.name}
                      </h3>
                      <h3 className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-semibold rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">
                        বিশেষজ্ঞ: {specialtyName.bangla_name}
                      </h3>
                    </div>
                  ))}
                  {doctorOrganization.map((organizationName) => (
                    <h3 className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">
                      Hospital: {organizationName.name}
                    </h3>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetails;
