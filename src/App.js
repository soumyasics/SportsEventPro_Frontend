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

function App() {

  return (
    <BrowserRouter>
      <div className="App">

      <Routes>
          <Route exact path="/" element={[<Navbar/>,<LandingPage/>,<Features/>]} />
          <Route exact path="user/" element={<Userhome/>} />
          <Route exact path="Features/" element={<Features/>} />
          <Route exact path="Navbar/" element={<Navbar/>} />
          </Routes>
          



      </div>
    </BrowserRouter>
  )
}
export default App;
