import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import RelatedMedicine from "../../relatedMedicine/RelatedMedicine";
const MedicineDetails = ({ medicine }) => {
  const {
    brand_name,
    brand_id,
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
    <>
      <NextSeo
        title={`${brand_name} ${form} - Full Details`}
        description={`${brand_name} - ${form} - Price ${price}BDT. Strength ${strength}`}
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
      <div className="flex justify-center text-black bg-base-200 my-3">
        <div className="block rounded-lg shadow-lg w-4/5 text-center">
          <div className="p-6">
            <h1 className="text-gray-900 text-2xl font-medium mb-2">
              {brand_name}
            </h1>
            <h4 className="mx-3 badge badge-lg my-3 p-6">Type: {form}</h4>
            {company.map((singleCompany) => (
              <h4 className="mx-3 badge badge-lg my-3 p-6">
                Company: {singleCompany.company_name}
              </h4>
            ))}
            <div className="my-3 grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
              <h4 className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Price: {price} Taka/Unit
              </h4>
              <h4 className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Strength: {strength}
              </h4>
              <h4 className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Pack Size: {packsize}
              </h4>
            </div>
            {loading ? (
              <progress className="progress w-56"></progress>
            ) : (
              <>
                {generic.map((singleGeneric) => (
                  <>
                    <div>
                      <div
                        tabIndex={0}
                        className="my-3 collapse collapse-plus border border-indigo-600 bg-base-100 rounded-box"
                      >
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-xl font-medium">
                          Indication
                        </div>
                        <div className="collapse-content">
                          <p>{singleGeneric?.indication}</p>
                        </div>
                      </div>
                      <div
                        tabIndex={0}
                        className="my-3 collapse collapse-plus border border-indigo-600 bg-base-100 rounded-box"
                      >
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-xl font-medium">
                          নির্দেশনা
                        </div>
                        <div className="collapse-content">
                          <p>{singleGeneric?.indication_bangla}</p>
                        </div>
                      </div>
                      <div
                        tabIndex={0}
                        className="my-3 collapse collapse-plus border border-indigo-600 bg-base-100 rounded-box"
                      >
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-xl font-medium">
                          Contra Indication
                        </div>
                        <div className="collapse-content">
                          <p>{singleGeneric?.contra_indication}</p>
                        </div>
                      </div>
                      <div
                        tabIndex={0}
                        className="my-3 collapse collapse-plus border border-indigo-600 bg-base-100 rounded-box"
                      >
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-xl font-medium">
                          প্রতিলক্ষণ
                        </div>
                        <div className="collapse-content">
                          <p>{singleGeneric?.contra_indication_bangla}</p>
                        </div>
                      </div>

                      <div
                        tabIndex={0}
                        className="my-3 collapse collapse-plus border border-indigo-600 bg-base-100 rounded-box"
                      >
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-xl font-medium">
                          Dose
                        </div>
                        <div className="collapse-content">
                          <p>{singleGeneric?.dose}</p>
                        </div>
                      </div>
                      <div
                        tabIndex={0}
                        className="my-3 collapse collapse-plus border border-indigo-600 bg-base-100 rounded-box"
                      >
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-xl font-medium">
                          ডোজ
                        </div>
                        <div className="collapse-content">
                          <p>{singleGeneric?.dose_bangla}</p>
                        </div>
                      </div>

                      <div
                        tabIndex={0}
                        className="my-3 collapse collapse-plus border border-indigo-600 bg-base-100 rounded-box"
                      >
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-xl font-medium">
                          Side Effect
                        </div>
                        <div className="collapse-content">
                          <p>{singleGeneric?.side_effect}</p>
                        </div>
                      </div>
                      <div
                        tabIndex={0}
                        className="my-3 collapse collapse-plus border border-indigo-600 bg-base-100 rounded-box"
                      >
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-xl font-medium">
                          পার্শ্ব প্রতিক্রিয়া
                        </div>
                        <div className="collapse-content">
                          <p>{singleGeneric?.side_effect_bangla}</p>
                        </div>
                      </div>
                      <div
                        tabIndex={0}
                        className="my-3 collapse collapse-plus border border-indigo-600 bg-base-100 rounded-box"
                      >
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-xl font-medium">
                          Overdose
                        </div>
                        <div className="collapse-content">
                          <p>{singleGeneric?.overdose}</p>
                        </div>
                      </div>
                      {singleGeneric.overdose_bangla.length > 0 && (
                        <div
                          tabIndex={0}
                          className="my-3 collapse collapse-plus border border-indigo-600 bg-base-100 rounded-box"
                        >
                          <input type="checkbox" className="peer" />
                          <div className="collapse-title text-xl font-medium">
                            অতিরিক্ত মাত্রা
                          </div>
                          <div className="collapse-content">
                            <p>{singleGeneric?.overdose_bangla}</p>
                          </div>
                        </div>
                      )}

                      <div
                        tabIndex={0}
                        className="my-3 collapse collapse-plus border border-indigo-600 bg-base-100 rounded-box"
                      >
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-xl font-medium">
                          Precaution
                        </div>
                        <div className="collapse-content">
                          <p>{singleGeneric?.precaution}</p>
                        </div>
                      </div>

                      <div
                        tabIndex={0}
                        className="my-3 collapse collapse-plus border border-indigo-600 bg-base-100 rounded-box"
                      >
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-xl font-medium">
                          সতর্কতা
                        </div>
                        <div className="collapse-content">
                          <p>{singleGeneric?.precaution_bangla}</p>
                        </div>
                      </div>
                      <div
                        tabIndex={0}
                        className="my-3 collapse collapse-plus border border-indigo-600 bg-base-100 rounded-box"
                      >
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-xl font-medium">
                          Pregnancy Category
                        </div>
                        <div className="collapse-content">
                          <p>{singleGeneric?.pregnancy_category}</p>
                        </div>
                      </div>
                      <div
                        tabIndex={0}
                        className="my-3 collapse collapse-plus border border-indigo-600 bg-base-100 rounded-box"
                      >
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-xl font-medium">
                          গর্ভকালীন অবস্থা
                        </div>
                        <div className="collapse-content">
                          <p>{singleGeneric?.pregnancy_category_bangla}</p>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </>
            )}
          </div>
          <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
            <p className="text-center my-2">
              Disclaimer: This platform is only for learning purpose only. if
              you are patient, please consult your doctor first. don't take any
              medicine without consultation of doctor. we are not responsible
              for anything.
            </p>
            <button className="btn btn-xs">Report Error</button>
          </div>
          <div className="m-4">
            <div className="alert alert-info shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-current flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>Related Medicine</span>
              </div>
            </div>
          </div>
          <RelatedMedicine key={brand_id} brand_name={brand_name} />
        </div>
      </div>
    </>
  );
};

export default MedicineDetails;
