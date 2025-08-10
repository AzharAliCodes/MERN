import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Matches from './components/Matches'
import Home from './components/Home'
import News from './components/News'
import Tables from './components/Tables'
import PlayerName from './components/PlayerName'
function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}>
        <Route index element={<Matches/>}/>
        <Route path='news' element={<News/>}/>
        <Route path='tables' element={<Tables/>}/>
        <Route path='matchdetail/:d' element={<PlayerName/>}/>
      </Route>
      <Route path='*' element={<p>404 page not found</p>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App
