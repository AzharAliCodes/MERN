import AllCards from './components/AllCards'
import {data} from "./utils/data"
function App() {
return (
    <>
    <h1>Raste kaa maal saste mai</h1>
    <div>
      <input type="text" placeholder='kya chai yai...'/>
      <button>search</button>
    </div>
    console.log(data);

    <AllCards data={data}/>
    </>
  )
}

export default App
