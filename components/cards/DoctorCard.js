import Link from "next/link";
import { useEffect, useState } from "react";

const DoctorCard = ({ doctor }) => {
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
    <div className="card w-11/12 h-auto lg:w-96 xl:w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          {title} {name}
        </h2>

        <div className="badge badge-primary">{designation}</div>
        <p className="font-light text-left text-black dark:text-gray-400">
          {qualification}
        </p>

        <div>
          {loading ? (
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
          ) : (
            <>
              <div className="m-3 grid gap-4 grid-cols-1 justify-items-center">
                {doctorOrganization.map((organizationName) => (
                  <>
                    <h4 className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                      {organizationName.name.length > 29 ? (
                        <div
                          className="tooltip"
                          data-tip={`${organizationName.name}`}
                        >
                          <h4 className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                            {organizationName.name.slice(0, 29)}...
                          </h4>
                        </div>
                      ) : (
                        <>{organizationName.name}</>
                      )}
                    </h4>
                  </>
                ))}
              </div>
              <div className="grid gap-4 grid-cols-1 justify-items-center">
                {doctorSpecialty.map((specialtyName) => (
                  <>
                    <>
                      <div>
                        {specialtyName.name.length > 29 ? (
                          <div
                            className="tooltip"
                            data-tip={`${specialtyName.name}`}
                          >
                            <h4 className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                              {specialtyName.name.slice(0, 29)}...
                            </h4>
                          </div>
                        ) : (
                          <h4 className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                            {specialtyName.name}
                          </h4>
                        )}
                      </div>
                    </>

                    <>
                      <div>
                        {specialtyName.bangla_name.length > 29 ? (
                          <div
                            className="tooltip"
                            data-tip={`${specialtyName.bangla_name}`}
                          >
                            <h4 className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                              {specialtyName.bangla_name.slice(0, 29)}...
                            </h4>
                          </div>
                        ) : (
                          <h4 className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                            {specialtyName.bangla_name}
                          </h4>
                        )}
                      </div>
                      <div className="card-actions justify-end">
                        <Link
                          href={`/doctor/${id}`}
                          className="btn btn-primary"
                        >
                          Details
                        </Link>
                      </div>
                    </>
                  </>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
