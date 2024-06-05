import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Landingpage2 from './Components/LandingComponents/Landingpage2';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminResetPass from './Components/Admin/AdminResetPass';
import Enquiries from './Components/Enquiries/Enquiries';
import Aboutpage from './Components/LandingComponents/Aboutpage';
import TeamCoachLogin from './Components/TeamCoach/TeamCoachLogin';
import TeamcoachReg from './Components/TeamCoach/TeamcoachReg';
import MainNavbar from './Components/LandingComponents/MainNavbar';


function App() {

  
  return (
    <BrowserRouter>
      <div className="App">
      
      <Routes>
         
          <Route exact path="/TeamCoachreg" element={<TeamcoachReg/>} /> 
          <Route exact path="/TeamCoachlogin" element={<TeamCoachLogin/>} /> 

          <Route exact path="/AdminLogin" element={<AdminLogin/>} />
          <Route exact path="/AdminResetPass" element={<AdminResetPass/>} />
          <Route exact path="/Landingpage2" element={<Landingpage2/>} />     
           <Route exact path="/Enquiries" element={[<Enquiries/>]} /> 
           <Route exact path="/Aboutpage" element={[<Aboutpage/>]} />
           <Route exact path="/MainNavbar" element={[<MainNavbar/>]} />


          </Routes>
          



      </div>
    </BrowserRouter>
  )
}
export default App;