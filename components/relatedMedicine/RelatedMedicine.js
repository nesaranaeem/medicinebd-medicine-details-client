import { useEffect, useState } from "react";
import RelatedMedicineCard from "./RelatedMedicineCard";

const RelatedMedicine = ({ brand_name }) => {
  const [medicine, setMedicine] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    fetch(
      `https://medicinebd-medicine-details-server.vercel.app/v1/medicine-search?name=${brand_name}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMedicine(data);
        setLoading(false);
      });
  }, [brand_name]);
  console.log(medicine);
  return (
    <>
      {loading ? (
        <>
          <progress className="progress w-56"></progress>
        </>
      ) : (
        <>
          {medicine.length ? (
            <>
              <div className="my-2 grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
                {medicine.map((singleMedicine) => (
                  <RelatedMedicineCard
                    key={singleMedicine._id}
                    singleMedicine={singleMedicine}
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              <p>Sorry! no medicine found by smart match</p>
            </>
          )}
        </>
      )}
    </>
  );
};

export default RelatedMedicine;
