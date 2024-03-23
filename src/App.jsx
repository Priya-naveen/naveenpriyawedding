
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './component/Landing'
import Mainpage from './component/Mainpage'
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Mainpage />}/>
        </Routes>
        </BrowserRouter>
 
  )
}

export default App
