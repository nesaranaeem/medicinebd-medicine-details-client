import Link from "next/link";

const HospitalCard = ({ doctor }) => {
  const { address, id, name, specialty } = doctor;

  return (
    <>
      <div className="card w-11/12 h-auto lg:w-96 xl:w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          {specialty.length > 2 && (
            <div className="badge badge-primary">{specialty}</div>
          )}
          <p className="mb-3 text-base font-normal text-black dark:text-gray-400">
            {address}
          </p>
          <div className="card-actions justify-end">
            <Link href={`/hospital/${id}`} className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HospitalCard;
