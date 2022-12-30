import Link from "next/link";
import { useEffect, useState } from "react";

const MedicineCard = ({ medicine }) => {
  const {
    brand_name,
    form,
    packsize,
    strength,
    price,
    company_id,
    generic_id,
    brand_id,
  } = medicine;
  const [company, setCompany] = useState([]);
  const [generic, setGeneric] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch(
      `https://medicinebd-medicine-details-server.vercel.app/v1/medicine-company/${company_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCompany(data.result);
        setloading(false);
      });
  }, [company_id]);
  useEffect(() => {
    fetch(
      `https://medicinebd-medicine-details-server.vercel.app/v1/medicine-generic/${generic_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setGeneric(data.result);
        setloading(false);
      });
  }, [generic_id]);
  return (
    <div className="card w-11/12 h-auto lg:w-96 xl:w-96 bg-neutral-content text-black shadow-xl">
      <div className="card-body">
        <div className="flex justify-items-center items-center">
          <h2 className="card-title">{brand_name}</h2>
          <h4 className="mx-3 badge badge-lg">{form}</h4>
        </div>
        {loading ? (
          <progress className="progress w-56"></progress>
        ) : (
          <div className="flex flex-col gap-2 justify-items-center items-center">
            {company?.map((singleCompany) => (
              <>
                <h4 className=" bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                  {singleCompany.company_name}
                </h4>
              </>
            ))}

            {generic?.map((singleGeneric) => (
              <>
                <div>
                  {singleGeneric.generic_name.length > 35 ? (
                    <div
                      className="tooltip"
                      data-tip={`${singleGeneric.generic_name}`}
                    >
                      <p className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                        {singleGeneric.generic_name.slice(0, 35)}...
                      </p>
                    </div>
                  ) : (
                    <h4>
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                        {singleGeneric.generic_name}
                      </span>
                    </h4>
                  )}
                </div>
                <div>
                  {strength.length > 35 ? (
                    <div className="tooltip" data-tip={`${strength}`}>
                      <p className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                        {strength.slice(0, 35)}...
                      </p>
                    </div>
                  ) : (
                    <h4>
                      <span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                        {strength}
                      </span>
                    </h4>
                  )}
                </div>
              </>
            ))}
          </div>
        )}
        {loading ? (
          <progress className="progress w-56"></progress>
        ) : (
          <div className="flex flex-col gap-2 justify-items-center items-center">
            {packsize === null ? (
              ""
            ) : (
              <div className="badge badge-secondary">{packsize}</div>
            )}

            <div className="badge badge-primary">
              {Math.round(price)} TK/Unit
            </div>
          </div>
        )}
        <div className="card-actions justify-end">
          <Link
            className="btn btn-primary"
            href={`/medicine/${brand_name
              .toLowerCase()
              .replace(/\s+/g, "-")}-${brand_id}`}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MedicineCard;
