import { useEffect, useState } from "react";

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
              {medicine.map((singleMedicine) => (
                <p>{singleMedicine.brand_name}</p>
              ))}
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
