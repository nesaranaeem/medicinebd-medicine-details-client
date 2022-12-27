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
    <div className="card w-11/12 h-auto lg:w-96 xl:w-96 bg-neutral-content shadow-xl">
      <div className="card-body">
        <div className="flex justify-items-center items-center">
          <h2 className="card-title">{brand_name}</h2>
          <h4 className="mx-3 badge badge-lg">{form}</h4>
        </div>
        {loading ? (
          <progress className="progress w-56"></progress>
        ) : (
          <>
            {company?.map((singleCompany) => (
              <>
                <p className="border border-indigo-600 bg-base-100 rounded-box text-center">
                  {singleCompany.company_name}
                </p>
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
                      <p className="border border-indigo-600 bg-base-100 rounded-box text-center">
                        {singleGeneric.generic_name.slice(0, 35)}...
                      </p>
                    </div>
                  ) : (
                    <p className="border border-indigo-600 bg-base-100 rounded-box text-center">
                      {singleGeneric.generic_name}
                    </p>
                  )}
                </div>
                <div>
                  {strength.length > 35 ? (
                    <div className="tooltip" data-tip={`${strength}`}>
                      <p className="border border-indigo-600 bg-base-100 rounded-box text-center">
                        {strength.slice(0, 35)}...
                      </p>
                    </div>
                  ) : (
                    <p className="border border-indigo-600 bg-base-100 rounded-box text-center">
                      {strength}
                    </p>
                  )}
                </div>
              </>
            ))}
          </>
        )}
        {loading ? (
          <progress className="progress w-56"></progress>
        ) : (
          <div className="grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
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
