import { useEffect, useState } from "react";

const RecentMedicineCard = ({ medicine }) => {
  const { brand_name, form, packsize, strength, price, company_id } = medicine;
  const [company, setCompany] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch(
      `https://medicinebd-medicine-details-server.vercel.app//v1/medicine-company/${company_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCompany(data.result);
        setloading(false);
      });
  }, [company_id]);
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
            {company.map((singleCompany) => (
              <>
                <p className=" rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700 whitespace-nowrap text-sm text-center">
                  {singleCompany.company_name}
                </p>
              </>
            ))}
          </>
        )}
        <div className="grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
          {packsize === null ? (
            ""
          ) : (
            <div className="badge badge-secondary">{packsize}</div>
          )}
          <div className="badge">{strength}</div>
          <div className="badge badge-primary">{Math.round(price)} TK/Unit</div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default RecentMedicineCard;
