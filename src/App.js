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
import OrganizerLogin from './Components/Organiser/OrganiserLogin';
import OrganiserForgotPassword from './Components/Organiser/OrganiserForgotPassword';
import OrganiserDashboard from './Components/Organiser/OrganiserDashboard';
import OrganiserSideBar from './Components/Organiser/OrganiserSideBar'
import OrganiserDashboardNavBar from './Components/Organiser/OrganiserDashboardNavBar';
import OrganiserViewProfile from './Components/Organiser/OrganiserViewProfile';
import AdminViewAprvdCoachIndividual from './Components/Admin/TeamCoach/AdminViewAprvdCoachIndividual';
import AdminMain from './Components/Admin/AdminMain';
import AdminNav from './Components/Admin/Nav/AdminNav'
import AdminallViewOrganizerRequest from './Components/Admin/Organiser/AdminallViewOrganizerRequest';
import AdminViewOrganizerToApprove from './Components/Admin/Organiser/AdminViewOrganizerToApprove';

import OrganiserEditProfile from './Components/Organiser/OrganiserEditProfile';
import ViewerRegistration from './Components/Viewer/ViewerRegistration';
import ViewerLogin from './Components/Viewer/ViewerLogin';
import ViewerForgotPassword from './Components/Viewer/ViewerForgotPassword';
import ViewerHomePage from './Components/Viewer/ViewerHomePage';
import AdminEnquiriesViewpage from './Components/Admin/AdminEnquiriesViewpage';

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
          <Route exact path="/Landingpage2" element={<Landingpage2 />} />
          <Route exact path="/MainNavbar" element={<MainNavbar />} />

          {/* Admin */}
          <Route exact path="/AdminLogin" element={[<MainNavbar />, <AdminLogin />, <UserFooter />]} />
          <Route exact path='/AdminDashbordTopContent' element={<AdminDashbordTopContent />} />
          

          {/* <Route exact path='/AdminDashbord' element={[<AdminTopbar />, <Adminsidebar />, <AdminDashbordTopContent />, <AdminDashbordTopContent_2 />]} /> */}

          <Route path='/admindashboard' element={[<AdminNav />, <AdminMain data="admindashboard" />]} />
          <Route exact path="/AdminTopbar" element={<AdminTopbar />} />
          <Route exact path='/AdminViewTeamCoach' element={[<AdminNav />, <AdminMain data="AdminViewTeamCoach" />]} />
          <Route exact path='/AdminViewAprvdCoachIndividual/:id' element={[<AdminTopbar />, <AdminMain data="AdminViewAprvdCoachIndividual" />]} />

          <Route exact path='/AdminViewOrganiser' element={[<AdminNav/>,<AdminMain data='adminvieworganizerreq'/>]} />
          <Route exact path='/AdminViewOrganiser1' element={[<AdminNav/>,<AdminViewOrganiser/>]} />
          <Route exact path='/AdminViewOrganiserRequest' element={[<AdminNav/>,<AdminMain data='adminvieworganiserrequest'/>]} />
          <Route exact path='/AdminallViewOrganizerRequest/:id' element={[<AdminNav/>,<AdminMain data='AdminallViewOrganizerRequest'/>]} />

          <Route exact path='/ViewCoachRequest' element={[<AdminNav />, <AdminMain data="ViewCoachRequest"  />]} />
          <Route exact path='/AdminViewOrganiser' element={[<AdminNav />, <AdminMain data='adminvieworganizerreq' />]} />
          <Route exact path='/AdminViewOrganiser1' element={[<AdminNav />, <AdminViewOrganiser />]} />
          <Route exact path='/AdminViewOrganiserRequest' element={[<AdminNav />, <AdminMain data='adminvieworganiserrequest' />]} />
          <Route exact path='/ViewCoachRequest' element={[<AdminNav />, <AdminMain data="ViewCoachRequest" />]} />
          <Route exact path='/AdminDashbordTopContent_2' element={<AdminDashbordTopContent_2 />} />
          <Route exact path='/AdminDashbordTopContent' element={<AdminDashbordTopContent />} />
          <Route exact path="/AdminResetPass" element={[<AdminNav />, <AdminMain data="resetpswd" />]} />
          <Route exact path="/Adminsidebar2" element={[<AdminDashbordTopContent />]} />
          <Route exact path="/Adminsidebar1" element={[<Adminsidebar />]} />
          <Route exact path="/Adminsidebar" element={[<Adminsidebar />, <AdminDashbordTopContent />]} />
          <Route path='/adminmain' element={[<AdminNav />, <AdminMain />]} />
          <Route path='/viewallEnquiries' element={[ <AdminEnquiriesViewpage />]} />

          {/* Team Coach */}
          <Route exact path="/TeamCoachForgetPass" element={<TeamCoachForgetPass />} />
          <Route exact path="/TeamCoachLogin" element={[<MainNavbar />,<TeamCoachLogin />, <UserFooter />]} />
          <Route exact path="/TeamCoachHomePage" element={[<MainNavbar/>,<TeamCoachHomePage/>,<Aboutpage/>,<UserFooter/>]}/>
          <Route exact path="/TeamCoachreg" element={[<MainNavbar />, <TeamcoachReg />, <UserFooter />]} />
          <Route exact path="/AdminResetPass" element={[<AdminTopbar />, <Adminsidebar />, <AdminResetPass />]} />
          <Route exact path="/Aboutpage" element={[<MainNavbar />, <Aboutpage />, <UserFooter />]} />
          <Route exact path="/Enquiries" element={[<MainNavbar />, <Enquiries />, <UserFooter />]} />
          <Route exact path="/TeamCoachViewpage" element={[<TeamCoachViewpage />]} />
          <Route exact path='/TeamCoachEditProfile' element={[<TeamCoachEditProfile />]} />
          <Route exact path="/nav" element={[<TeamCoachTopbar />]} />
          <Route exact path="/Teamcoachdetailspopup/:id" element={[<AdminNav />, <AdminMain data="Teamcoachdetailspopup" />]} />
          <Route exact path="/Teamcoachviewprofilepopup" element={[<Teamcoachviewprofilepopup />]} />
          <Route exact path="/TeamCoachLandingPage1" element={<TeamCoachLandingPage1 />} />
          <Route exact path="/TeamCoachLandingPage2" element={<TeamCoachLandingPage2 />} />
          <Route exact path="/TeamCoachLandingPage3" element={<TeamCoachLandingPage3 />} />
          
          {/* Oraganizer */}
          <Route exact path='/OrganizerRegistration' element={[<MainNavbar/>,<OrganiserRegistration/>,<UserFooter/>]} />
          <Route exact path='/OrganizerLogin' element={[<MainNavbar/>,<OrganizerLogin/>,<UserFooter/>]} />
          <Route exact path='/OrganizerForgotPassword' element={[<MainNavbar/>,<OrganiserForgotPassword/>,<UserFooter/>]}/>
          <Route exact path='/OrganizerDashboard' element={[<OrganiserDashboardNavBar/>,<OrganiserSideBar/>,<OrganiserDashboard/>,<UserFooter/>]}/>
          <Route path='/adminoraganizerviewrequest' element={[<MainNavbar/>,<AdminMain data='adminallvieworganizerpage'/>]} />
          <Route path='/adminViewOrganizerToApprove/:id' element={[<MainNavbar/>,<AdminMain data='adminViewOrganizerToApprove'/>]} />


          {/* Organizer */}
          <Route exact path='/OrganizerRegistration' element={[<MainNavbar />, <OrganiserRegistration />, <UserFooter />]} />
          <Route exact path='/OrganizerLogin' element={[<MainNavbar />, <OrganizerLogin />, <UserFooter />]} />
          <Route exact path='/OrganizerForgotPassword' element={[<MainNavbar />, <OrganiserForgotPassword />, <UserFooter />]} />
          <Route exact path='/OrganizerDashboard' element={[<OrganiserDashboardNavBar />, <OrganiserSideBar />, <OrganiserDashboard />, <UserFooter />]} />
          <Route exact path='/OrganizerEditProfile' element={[<OrganiserEditProfile />]} />

          <Route path='/adminoraganizerviewrequest' element={[<MainNavbar />, <AdminMain data='adminallvieworganizerpage' />]} />

          {/* Viewer */}
          <Route exact path='/ViewerRegistration' element={[<MainNavbar />, <ViewerRegistration />, <UserFooter />]} />
          <Route exact path='/ViewerLogin' element={[<MainNavbar />, <ViewerLogin />, <UserFooter />]} />
          <Route exact path='/ViewerForgotPassword' element={[<MainNavbar />, <ViewerForgotPassword />, <UserFooter />]} />
          <Route exact path='/ViewerHomePage' element={[<ViewerHomePage />,<Aboutpage/>,<UserFooter/>]} />

        </Routes>

      </div>

    </BrowserRouter>

  )

}

export default App;