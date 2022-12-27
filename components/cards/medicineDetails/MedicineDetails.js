import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";
const MedicineDetails = ({ medicine }) => {
  const {
    brand_name,
    form,
    packsize,
    strength,
    price,
    company_id,
    generic_id,
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
    <div>
      <NextSeo
        title={`${brand_name} ${form} - Full Details`}
        description={` Know ${brand_name} ${form} - Full Details`}
      />
      <div className="m-5 text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href={`/medicines`}>Medicines</Link>
          </li>
          <li>{brand_name}</li>
        </ul>
      </div>
      <div className="flex justify-center my-3">
        <div className="block rounded-lg shadow-lg w-4/5 bg-white text-center">
          <div className="mx-3 badge badge-lg my-3">{form}</div>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {brand_name}
            </h5>

            {generic.map((singleGeneric) => (
              <>
                <p className="text-gray-700 text-base mb-4">
                  {singleGeneric?.indication}
                </p>
                <p className="text-gray-700 text-base mb-4">
                  {singleGeneric?.indication_bangla}
                </p>
                <div className="collapse">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Side Effect
                  </div>
                  <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    {singleGeneric?.side_effect}
                  </div>
                </div>
                <div className="collapse my-3">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    সাইড ইফেক্ট
                  </div>
                  <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    {singleGeneric?.side_effect_bangla}
                  </div>
                </div>
              </>
            ))}

            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Button
            </button>
          </div>

          <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
            2 days ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetails;
