import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingNavbar from './Components/LandingComponents/LandingNavbar';
import LandingPage from './Components/LandingComponents/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Userhome from './Components/User/Userhome';
import Features from './Components/User/Features';
import Navbar from './Components/User/Navbar';
import Teamcoach from './Components/User/Teamcoach';

import UserLogin from './Components/User/UserLogin';
import UserSignup from './Components/User/UserSignup';
import UserFooter from './Components/User/UserFooter';
// import AdminLogin from './Components/Admin/AdminLogin';
import Navbar2 from './Components/Navbar2';
import TeamCoachLogin from './Components/TeamCoach/TeamCoachLogin';


function App() {

  
  return (
    <BrowserRouter>
      <div className="App">
      
      <Routes>
           <Route exact path="/" element={[<Navbar/>,<LandingPage/>,<Features/>]} />
          <Route exact path="/userhome" element={<Userhome/>} />
          <Route exact path="/Features" element={<Features/>} />
         
          <Route exact path="/Navbar" element={<Navbar/>} />
          <Route exact path="/UserLogin" element={[<Navbar/>,<UserLogin/>,<UserFooter/>]} />
          <Route exact path="/UserSignup" element={[<Navbar/>,<UserSignup/>,<UserFooter/>]} />
          <Route exact path="/UserFooter" element={<UserFooter/>} /> 
          {/* <Route exact path="/AdminLogin" element={[<Navbar/>,<Navbar2/>,<AdminLogin/>,<UserFooter/>]} /> */}
           <Route exact path="/TeamCoachLogin" element={[<Navbar/>,<TeamCoachLogin/>]} />
          <Route exact path="/TeamCoach" element={[<Teamcoach/>]} /> 
          <Route exact path="/USERT" element={[<UserSignup/>]} />



          </Routes>
          



      </div>
    </BrowserRouter>
  )
}
export default App;