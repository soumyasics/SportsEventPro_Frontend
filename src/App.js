import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Userhome from '../src/Components/User/Userhome';
import Landingpage3 from '../src/Components/User/Landingpage3';
import Landingpage4 from '../src/Components/User/Landingpage4';
import UserFooter from '../src/Components/LandingComponents/UserFooter';
import AdminLogin from './Components/Admin/AdminLogin';
import TeamCoachLogin from './Components/TeamCoach/TeamCoachLogin';
import AdminResetPass from './Components/Admin/AdminResetPass';


function App() {

  
  return (
    <BrowserRouter>
      <div className="App">
      
      <Routes>
          <Route exact path="/userhome" element={[<Userhome/>,<Landingpage3/>,<Landingpage4/>,<UserFooter/>]} />
          <Route exact path="/landingpage3" element={<Landingpage3/>} />
          <Route exact path='/landingpage4' element={<Landingpage4/>}/>
          <Route exact path='/userfooter' element={<UserFooter/>}/>
          <Route exact path='/userhome' element={<Userhome/>}/>
          <Route exact path="/UserFooter" element={<UserFooter/>} />
          <Route exact path="/AdminLogin" element={<AdminLogin/>} /> 
           <Route exact path="/TeamCoachLogin" element={<TeamCoachLogin/>} />
          <Route exact path="/TeamCoachreg" element={<TeamcoachReg/>} /> 
          <Route exact path="/" element={<AdminResetPass/>} />
          </Routes>
          



      </div>
    </BrowserRouter>
  )
}
export default App;