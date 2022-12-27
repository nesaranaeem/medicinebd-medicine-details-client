import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import MedicineCard from "./MedicineCard";

const RecentMedicine = () => {
  const [recentMedicine, setRecentMedicine] = useState([]);
  const [loading, setLoading] = useState(true);

  axios
    .get(
      "https://medicinebd-medicine-details-server.vercel.app/v1/medicine-list/0/9"
    )
    .then((response) => {
      setRecentMedicine(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.error(error);
    });
  const medicines = recentMedicine.listings;
  return (
    <>
      {loading ? (
        <div className="mx-auto">
          <progress className="progress w-full"></progress>
        </div>
      ) : (
        <>
          <div className="alert shadow-lg my-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-info flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>
                Total{" "}
                <div className="badge badge-md mx-1">
                  {recentMedicine.total}
                </div>
                Medicine on our Database
              </span>
            </div>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
            {medicines.map((medicine) => (
              <MedicineCard
                key={medicine._id}
                medicine={medicine}
              ></MedicineCard>
            ))}
          </div>
          <div className="grid justify-items-center my-3">
            <Link href="/medicines" className="btn">
              View All Medicine
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default RecentMedicine;
