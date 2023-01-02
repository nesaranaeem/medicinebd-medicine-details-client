import { useEffect, useState } from "react";
import { NextSeo, BreadcrumbJsonLd } from "next-seo";
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
          <li>
            {brand_name} {form} {strength}
          </li>
        </ul>
      </div>
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: "Home",
            item: "https://medicinebd-medicine-details-client.vercel.app/",
          },
          {
            position: 2,
            name: "Medicines",
            item: "https://medicinebd-medicine-details-client.vercel.app/medicines",
          },
          {
            position: 3,
            name: `${brand_name} ${form} ${strength}`,
            item: `https://medicinebd-medicine-details-client.vercel.app/medicine/${brand_name
              .toLowerCase()
              .replace(/\s+/g, "-")}-${brand_id}`,
          },
        ]}
      />
      <div className="flex justify-center text-black bg-base-100 my-3">
        <div className="block rounded-lg shadow-lg w-4/5 text-center">
          <div className="p-6">
            <h1 className="text-gray-900 text-2xl font-medium mb-2">
              {brand_name} {form}
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
                {generic.map((singleGeneric) => (
                  <>
                    <div>
                      <div className="flex flex-col gap-2 justify-items-center items-center">
                        <h5 className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                          Generic Name: {singleGeneric?.generic_name}
                        </h5>
                      </div>
                      <div className="border p-2 border-indigo-600 rounded-box text-lg font-normal text-black dark:text-gray-400 bg-base-100">
                        <h2 class="my-2">{singleGeneric?.indication}</h2>
                        <h2 class="my-2">{singleGeneric?.indication_bangla}</h2>
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
                          <p className="mb-3 text-lg font-normal text-black dark:text-gray-400">
                            {singleGeneric?.contra_indication}
                          </p>
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
                          <p className="mb-3 text-lg font-normal text-black dark:text-gray-400">
                            {singleGeneric?.contra_indication_bangla}
                          </p>
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
                          <p className="mb-3 text-lg font-normal text-black dark:text-gray-400">
                            {singleGeneric?.dose}
                          </p>
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
                          <p className="mb-3 text-lg font-normal text-black dark:text-gray-400">
                            {singleGeneric?.dose_bangla}
                          </p>
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
                          <p className="mb-3 text-lg font-normal text-black dark:text-gray-400">
                            {singleGeneric?.side_effect}
                          </p>
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
                          <p className="mb-3 text-lg font-normal text-black dark:text-gray-400">
                            {singleGeneric?.side_effect_bangla}
                          </p>
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
                          <p className="mb-3 text-lg font-normal text-black dark:text-gray-400">
                            {singleGeneric?.overdose}
                          </p>
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
                            <p className="mb-3 text-lg font-normal text-black dark:text-gray-400">
                              {singleGeneric?.overdose_bangla}
                            </p>
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
                          <p className="mb-3 text-lg font-normal text-black dark:text-gray-400">
                            {singleGeneric?.precaution}
                          </p>
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
                          <p className="mb-3 text-lg font-normal text-black dark:text-gray-400">
                            {singleGeneric?.precaution_bangla}
                          </p>
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
                          <p className="mb-3 text-lg font-normal text-black dark:text-gray-400">
                            {singleGeneric?.pregnancy_category}
                          </p>
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
                          <p className="mb-3 text-lg font-normal text-black dark:text-gray-400">
                            {singleGeneric?.pregnancy_category_bangla}
                          </p>
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
