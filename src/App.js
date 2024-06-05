import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Userhome from '../src/Components/Userhome/Userhome';
import UserFooter from './Components/Userhome/UserFooter';
import AdminLogin from './Components/Admin/AdminLogin';
import TeamCoachLogin from './Components/TeamCoach/TeamCoachLogin';
import AdminResetPass from './Components/Admin/AdminResetPass';
import Landingpage4 from './Components/Userhome/Landingpage4';
import Landingpage2 from './Components/Userhome/Landingpage2';
import Landingpage3 from './Components/Userhome/Landingpage3';
import Aboutpage from './Components/Userhome/Aboutpage';
import MainNavbar from './Components/Userhome/MainNavbar';
import TeamcoachReg from './Components/TeamCoach/TeamcoachReg';



function App() {

  
  return (
    <BrowserRouter>
      <div className="App">
      
      <Routes>
          <Route exact path="/" element={[<MainNavbar/>,<Userhome/>,<Landingpage2/>,<Landingpage3/>,<Aboutpage/>,<Landingpage4/>,<UserFooter/>]} />
          <Route exact path="/landingpage3" element={<Landingpage3/>} />
          <Route exact path='/landingpage4' element={<Landingpage4/>}/>
          <Route exact path='/userfooter' element={<UserFooter/>}/>
          <Route exact path='/userhome' element={<Userhome/>}/>
          <Route exact path="/UserFooter" element={<UserFooter/>} />
          <Route exact path="/AdminLogin" element={<AdminLogin/>} />
          <Route exact path="/Landingpage2" element={<Landingpage2/>} />
          <Route exact path="/MainNavbar" element={<MainNavbar/>} />
           <Route exact path="/TeamCoachLogin" element={<TeamCoachLogin/>} />
          <Route exact path="/TeamCoachreg" element={<TeamcoachReg/>} /> 
          <Route exact path="/" element={<AdminResetPass/>} />
          </Routes>
          



      </div>
    </BrowserRouter>
  )
}
export default App;