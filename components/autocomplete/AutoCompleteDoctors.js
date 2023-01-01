import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function AutoCompleteDoctors() {
  const [searchResults, setSearchResults] = useState([]);
  const [inputText, setInputText] = useState("");
  const [inputTimer, setInputTimer] = useState(null);
  const [handleDisplay, setHandleDisplay] = useState(
    "mt-2 w-11/12 text-center"
  );

  const handleSearchBtn = () => {
    return alert("Please Enter Valid Doctore Name");
  };

  const handleOnclick = () => {
    setHandleDisplay("hidden");
    setInputText("");
  };
  const handleInputChange = async (e) => {
    setInputText(e.target.value);
    setHandleDisplay("mt-2 w-11/12 text-center");
    clearTimeout(inputTimer);
    let timeout = setTimeout(() => {
      console.log("FETCHING RESULTS");
      axios
        .get(
          `https://medicinebd-medicine-details-server.vercel.app/v1/doctors/search?name=${e.target.value}`
        )
        .then((res) => {
          setSearchResults(res.data);
        });
    }, 10);
    setInputTimer(timeout);
  };

  return (
    <div className="bg-base-100 text-black">
      <div className="grid gap-2 grid-cols-1 justify-items-center">
        <input
          type="text"
          placeholder="Enter doctor name"
          className="input w-full max-w-xs border-black bg-base-100 rounded-box"
          value={inputText}
          onChange={handleInputChange}
        />
        <div className={`${handleDisplay}`}>
          <div>
            <>
              {searchResults.length ? (
                <>
                  {searchResults.map((searchResult) => (
                    <ul className="p-3 my-2 border border-indigo-600 bg-base-100 rounded-box">
                      <li>
                        {searchResult.title} {searchResult.name}
                      </li>
                      <li>{searchResult.qualification}</li>

                      <Link
                        onClick={handleOnclick}
                        className="btn btn-sm my-2"
                        href={`/doctor/${searchResult.id}`}
                      >
                        Details
                      </Link>
                    </ul>
                  ))}
                </>
              ) : (
                <>
                  <button className="btn mb-2" onClick={handleSearchBtn}>
                    Search Doctor
                  </button>
                </>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
