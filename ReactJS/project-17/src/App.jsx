import { useState } from "react";
import AllCards from "./components/AllCards";
import { data } from "./utils/data";

function App() {
  const [val, setVal] = useState("");
  const [filterData, setFilterData] = useState(data);
  function fun() {
    let res = data.filter((item) =>
      item.title.toLowerCase().includes(val.toLowerCase())
    );
    setFilterData(res);
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 via-sky-100 to-blue-200 py-10 px-4 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Raste kaa maal saste mai
        </h1>

        <div className="flex items-center space-x-2 w-full max-w-md">
          <input
            type="text"
            placeholder="kya chai yai..."
            onChange={(e) => setVal(e.target.value)}
            className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            onClick={fun}
            className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition"
          >
            Search
          </button>
        </div>
      </div>

      {filterData.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-8">No items found</p>
      ) : (
        <AllCards data={filterData} />
      )}
    </>
  );
}

export default App;
