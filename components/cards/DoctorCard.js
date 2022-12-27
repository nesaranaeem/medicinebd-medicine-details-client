import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHospitalUser, FaHeartbeat, FaMale, FaFemale } from "react-icons/fa";
const DoctorCard = ({ doctor }) => {
  const {
    title,
    name,
    qualification,
    designation,

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
    <div className="card w-11/12 h-auto lg:w-96 xl:w-96 bg-neutral-content shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          {title} {name}
        </h2>

        <div className="badge badge-primary">{designation}</div>
        <p>{qualification}</p>

        <div>
          {loading ? (
            <progress className="progress w-56"></progress>
          ) : (
            <>
              <div className="my-3 grid gap-4 grid-cols-1 justify-items-center">
                {doctorOrganization.map((organizationName) => (
                  <Link href={`/hospital/${organization}`}>
                    <>
                      <div className="badge badge-lg">
                        <FaHospitalUser />
                        {organizationName.name.length > 30 ? (
                          <div
                            className="tooltip"
                            data-tip={`${organizationName.name}`}
                          >
                            <button className="badge badge-lg">
                              {organizationName.name.slice(0, 30)}...
                            </button>
                          </div>
                        ) : (
                          <>{organizationName.name}</>
                        )}
                      </div>
                    </>
                  </Link>
                ))}
              </div>
            </>
          )}
          {loading ? (
            <progress className="progress w-56"></progress>
          ) : (
            <>
              <div className="grid gap-4 grid-cols-1 justify-items-center">
                {doctorSpecialty.map((specialtyName) => (
                  <>
                    <Link href={`/doctor-speciality/${specialty}`}>
                      <>
                        <div className="badge badge-lg">
                          <FaHeartbeat />
                          {specialtyName.name.length > 25 ? (
                            <div
                              className="tooltip"
                              data-tip={`${specialtyName.name}`}
                            >
                              <button className="badge badge-lg">
                                {specialtyName.name.slice(0, 25)}...
                              </button>
                            </div>
                          ) : (
                            specialtyName.name
                          )}
                        </div>
                      </>
                    </Link>
                    <Link href={`/doctor-speciality/${specialty}`}>
                      <>
                        <div className="badge badge-lg">
                          <FaHeartbeat />
                          {specialtyName.bangla_name.length > 25 ? (
                            <div
                              className="tooltip"
                              data-tip={`${specialtyName.bangla_name}`}
                            >
                              <button className="badge badge-lg">
                                {specialtyName.bangla_name.slice(0, 25)}...
                              </button>
                            </div>
                          ) : (
                            specialtyName.bangla_name
                          )}
                        </div>
                      </>
                    </Link>
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
