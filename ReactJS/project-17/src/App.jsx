import { useState } from "react";
import AllCards from "./components/AllCards";
import { data } from "./utils/data";

function App() {
  const [val,setVal] = useState("")
  const [filterData,setFilterData] = useState(data)
  function fun() {
      let res = data.filter((item) => item.title.toLowerCase().includes(val.toLowerCase()))
      setFilterData(res)
  }
  return (
    <>
      <h1>Raste kaa maal saste mai</h1>
      <div>
        <input type="text" placeholder="kya chai yai..." onChange={(e) => setVal(e.target.value)} />
        <button onClick={fun}>search</button>
      </div>

      <AllCards data={filterData} />
    </>
  );
}

export default App;
