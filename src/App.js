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
import Enquiries from './Components/Enquiries/Enquiries';
import TeamCoachForgetPass from './Components/TeamCoach/TeamCoachForgetPass';
import TeamCoachLandingPage1 from './Components/TeamCoach/TeamCoachLandingPage1';
import TeamCoachLandingPage2 from './Components/TeamCoach/TeamCoachLandingPage2';
import TeamCoachLandingPage3 from './Components/TeamCoach/TeamCoachLandingPage3';
import AdminDashbordTopContent from './Components/Admin/AdminDashbordTopContent';
import AdminDashbordTopContent_2 from './Components/Admin/AdminDashbordTopContent_2';
import TeamCoachViewpage from './Components/TeamCoach/TeamCoachViewpage';
import Adminsidebar from './Components/Admin/Adminsidebar';
import AdminViewCoachRequest from './Components/Admin/TeamCoach/AdminViewCoachRequest'
import AdminViewTeamCoach from './Components/Admin/TeamCoach/AdminViewTeamCoach';
import TeamCoachTopbar from './Components/TeamCoach/TeamCoachTopbar';
import Teamcoachdetailspopup from './Components/TeamCoach/Teamcoachdetailspopup';
import Teamcoachviewprofilepopup from './Components/TeamCoach/Teamcoachviewprofilepopup';
import AdminTopbar from './Components/Admin/AdminTopbar';
import TeamCoachHomePage from './Components/TeamCoach/TeamCoachHomePage';
import OrganiserRegistration from './Components/Organiser/OrganiserRegistration';
import TeamCoachEditProfile from './Components/TeamCoach/TeamCoachEditProfile';
import AdminViewOrganiserRequest from './Components/Admin/Organiser/AdminViewOrganiserRequest';
import AdminViewOrganiser from './Components/Admin/Organiser/AdminViewOrganiser';
import OrganiserLogin from './Components/Organiser/OrganiserLogin';
function App() {


  return (
    <BrowserRouter basename="sports_event_pro">

      <div className="App">

        <Routes>

          <Route exact path="/" element={[<MainNavbar />, <Userhome />, <Landingpage2 />, <Landingpage3 />, <Aboutpage />, <Landingpage4 />, <UserFooter />]} />
          <Route exact path="/landingpage3" element={<Landingpage3 />} />
          <Route exact path='/landingpage4' element={<Landingpage4 />} />
          <Route exact path='/userfooter' element={<UserFooter />} />
          <Route exact path="/UserFooter" element={<UserFooter />} />
          <Route exact path="/AdminLogin" element={[<MainNavbar />, <AdminLogin />, <UserFooter />]} />
          <Route exact path="/Landingpage2" element={<Landingpage2 />} />
          <Route exact path="/MainNavbar" element={<MainNavbar />} />
          <Route exact path="/TeamCoachLandingPage1" element={<TeamCoachLandingPage1 />} />
          <Route exact path="/TeamCoachLandingPage2" element={<TeamCoachLandingPage2 />} />
          <Route exact path="/TeamCoachLandingPage3" element={<TeamCoachLandingPage3 />} />
          <Route exact path='/AdminDashbordTopContent' element={<AdminDashbordTopContent />} />
          <Route exact path='/AdminDashbord' element={[<AdminTopbar />, <Adminsidebar />, <AdminDashbordTopContent />, <AdminDashbordTopContent_2 />]} />
          <Route exact path="/AdminTopbar" element={<AdminTopbar />} />
          <Route exact path='/AdminViewTeamCoach' element={[<MainNavbar/>,<AdminViewTeamCoach/>]}/>
          <Route exact path='/AdminViewOrganiser' element={[<MainNavbar/>,<AdminViewOrganiser/>]} />
          <Route exact path='/AdminViewOrganiserRequest' element={[<MainNavbar/>,<AdminViewOrganiserRequest/>]} />
          <Route exact path='/ViewCoachRequest' element={[<MainNavbar />, <AdminViewCoachRequest />]} />
          <Route exact path="/TeamCoachForgetPass" element={<TeamCoachForgetPass />} />
          <Route exact path='/AdminDashbordTopContent_2' element={<AdminDashbordTopContent_2 />} />
          <Route exact path="/TeamCoachLogin" element={[<TeamCoachLogin />,]} />
          <Route exact path="/TeamCoachHomePage" element={[<MainNavbar/>,<TeamCoachHomePage/>,<Aboutpage/>,<UserFooter/>]}/>
          <Route exact path="/TeamCoachreg" element={[<MainNavbar />, <TeamcoachReg />, <UserFooter />]} />
          <Route exact path="/AdminResetPass" element={<AdminResetPass />} />
          <Route exact path="/Aboutpage" element={[<MainNavbar />, <Aboutpage />, <UserFooter />]} />
          <Route exact path="/Enquiries" element={[<MainNavbar />, <Enquiries />, <UserFooter />]} />
          <Route exact path="/TeamCoachViewpage/:id" element={[<TeamCoachTopbar />, <TeamCoachViewpage />]} />
          <Route exact path="/Adminsidebar1" element={[<Adminsidebar />]} />
          <Route exact path="/Adminsidebar" element={[<Adminsidebar />, <AdminDashbordTopContent />]} />
          <Route exact path='/TeamCoachEditProfile' element={[<TeamCoachEditProfile/>]}/>
          <Route exact path="/Adminsidebar2" element={[<AdminDashbordTopContent />]} />
          <Route exact path="/nav" element={[<TeamCoachTopbar />]} />
          <Route exact path="/Teamcoachdetailspopup/:id" element={[<Teamcoachdetailspopup />]} />
          <Route exact path="/Teamcoachviewprofilepopup" element={[<Teamcoachviewprofilepopup />]} />
          <Route exact path='/OrganiserRegistration' element={[<MainNavbar/>,<OrganiserRegistration/>,<UserFooter/>]} />
          <Route exact path='/OrganiserLogin' element={[<MainNavbar/>,<OrganiserLogin/>,<UserFooter/>]} />

        </Routes>




      </div>
    </BrowserRouter>
  )
}
export default App;