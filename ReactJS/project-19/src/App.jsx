import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Matches from './components/Matches'
import Home from './components/Home'
function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/matches' element={<Matches/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
