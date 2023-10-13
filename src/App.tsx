import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Home from "./components/home/Home"
import Contact from "./components/contact/Contact";
import OurServices from './components/ourServices/OurServices';
import AboutUs from './components/aboutUs/AboutUs';


function App() {  return (
   <BrowserRouter>
   <div>
      <Routes>
        <Route path='/' element= {<LandingPage/>} />
        <Route path='/inicio' element={<Home/>} />
        <Route path='/contacto' element={<Contact/>} />
        <Route path='/servicios' element={<OurServices/>} />
        <Route path='/sobreNosotros' element={<AboutUs/>} />
      </Routes>
   </div>
   </BrowserRouter>
  )
}

export default App
