import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function AutoComplete() {
  const [searchResults, setSearchResults] = useState([]);
  const [inputText, setInputText] = useState("");
  const [inputTimer, setInputTimer] = useState(null);
  const [handleDisplay, setHandleDisplay] = useState(
    "mt-2 w-11/12 text-center"
  );
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
          `https://medicinebd-medicine-details-server.vercel.app/v1/medicine-search?name=${e.target.value}`
        )
        .then((res) => {
          setSearchResults(res.data);
        });
    }, 10);
    setInputTimer(timeout);
  };

  return (
    <div className="bg-base-100 text-black">
      <div className="grid gap-4 grid-cols-1 justify-items-center">
        <input
          type="text"
          placeholder="Search Medicine eg. selco 20"
          className="input w-full max-w-xs border-black bg-base-100 rounded-box"
          value={inputText}
          onChange={handleInputChange}
        />
        <div className={`${handleDisplay}`}>
          <div>
            {searchResults.map((searchResult) => (
              <ul className="p-3 my-2 border border-indigo-600 bg-base-100 rounded-box">
                <li>{searchResult.brand_name}</li>
                <li>{searchResult.form}</li>
                <li>{searchResult?.strength}</li>
                <Link
                  onClick={handleOnclick}
                  className="btn btn-sm my-2"
                  href={`/medicine/${searchResult.brand_name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}-${searchResult.brand_id}`}
                >
                  Details
                </Link>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
