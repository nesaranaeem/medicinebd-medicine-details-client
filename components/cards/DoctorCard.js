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
            <progress className="progress w-56"></progress>
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
