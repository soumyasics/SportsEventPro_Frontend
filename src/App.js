import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingNavbar from './Components/LandingComponents/LandingNavbar';
import LandingPage from './Components/LandingComponents/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Userhome from './Components/User/Userhome';
import Features from './Components/User/Features';
import Navbar from './Components/User/Navbar';
import Reset from './Components/User/Reset';

function App() {

  return (
    <BrowserRouter>
      <div className="App">

      <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/user" element={[<Navbar/>,<Userhome/>,<Features/>]}/>
          <Route exact path="/Navbar" element={<Navbar/>} />
          <Route exact path="/Navbar" element={<Reset/>} />
          </Routes>
          

      </div>
    </BrowserRouter>
  )
}
export default App;
