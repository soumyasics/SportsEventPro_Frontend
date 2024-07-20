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
import ViewerNavBar from './Components/Viewer/ViewerNavBar';
import ViewerProfile from './Components/Viewer/ViewerProfile';
import ViewerEditProfile from './Components/Viewer/ViewerEditProfile';
import TeamCoachTopNav from './Components/TeamCoach/TeamCoachTopNav';
import ViewAllViewer from './Components/Viewer/ViewAllViewer';
import ViewerProfilePopup from './Components/Viewer/ViewerProfilePopup';
import EventRequests from './Components/Admin/EventRequests';
import TeamCoachViewDetails from './Components/TeamCoach/TeamCoachViewDetails';
import AdminEnquiriesViewpage from './Components/Admin/AdminEnquiriesViewpage';
import TeamCoachViewTeamMembers from './Components/TeamCoach/TeamCoachViewTeamMembers';
import OrganizerScheduleEvents from './Components/Organiser/OrganizerScheduleEvents';
import OrganiserViewEvents from './Components/Organiser/OrganiserViewEvents';
import TeamCoachEditTeamMembers from './Components/TeamCoach/TeamCoachEditTeamMembers';
import TeamCoachAddTeamMembers from './Components/TeamCoach/TeamCoachAddTeamMembers';
import TeamCoachAddSub from './Components/TeamCoach/TeamCoachAddSub';
import OrganizerMain from './Components/Organiser/OrganizerMain';
import TeamCoachViewEvents from './Components/TeamCoach/TeamCoachViewEvents';
import TeamCoachEnrolledEvents from './Components/TeamCoach/TeamCoachEnrolledEvents';
import TeamCoachResults from './Components/TeamCoach/TeamCoachResults';
import TeamCoachReviewRatings from './Components/TeamCoach/TeamCoachReviewRatings';
import TeamCoachEnrollNow from './Components/TeamCoach/TeamCoachEnrollNow';
import OrganiserEnroll from './Components/Organiser/OrganiserEnroll';
import TeamCoachViewResults from './Components/TeamCoach/TeamCoachViewResults';
import ViewerUpcoming from './Components/Viewer/ViewerUpcoming';
import ViewerUpcomingDetails from './Components/Viewer/ViewerUpcomingDetails';
import ViewerPayment from './Components/Viewer/ViewerPayment';
import ViewerBookedTickets from './Components/Viewer/ViewerBookedTickets';
import ViewerScoreboard from './Components/Viewer/ViewerScoreboard';
import ViewerViewScoreboard from './Components/Viewer/ViewerViewScoreboard';
import ViewerReviewRating from './Components/Viewer/ViewerReviewRating';
import OrganiserAddBlogs from './Components/Organiser/OrganiserAddBlogs';
import AdminViewReviewAndRatings from './Components/Admin/AdminViewReviewAndRatings'
import ViewerBlogs from './Components/Viewer/ViewerBlogs';
function App() {

  return (

    <BrowserRouter basename="sports_event_pro">

      <div className="App">

        <Routes>
        <Route exact path="/OrganiserEnroll" element={[<MainNavbar />, <OrganiserEnroll />, <Landingpage2 />, <Landingpage3 />, <Aboutpage />, <Landingpage4 />, <UserFooter />]} />

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
          <Route exact path="/AdminEnquiriesViewpage" element={[<AdminNav />, <AdminMain data="AdminEnquiriesViewpage" />]} />


          {/* <Route exact path='/AdminDashbord' element={[<AdminTopbar />, <Adminsidebar />, <AdminDashbordTopContent />, <AdminDashbordTopContent_2 />]} /> */}

          <Route path='/admindashboard' element={[<AdminNav />, <AdminMain data="admindashboard" />]} />
          <Route exact path="/AdminTopbar" element={<AdminTopbar />} />
          <Route exact path='/AdminViewTeamCoach' element={[<AdminNav />, <AdminMain data="AdminViewTeamCoach" />]} />
          <Route exact path='/AdminViewAprvdCoachIndividual/:id' element={[<AdminTopbar />, <AdminMain data="AdminViewAprvdCoachIndividual" />]} />

          <Route exact path='/AdminViewOrganiser' element={[<AdminNav />, <AdminMain data='adminvieworganizerreq' />]} />
          {/* <Route exact path='/AdminViewOrganiser1' element={[<AdminNav/>,<AdminViewOrganiserRequest/>]} /> */}
          <Route exact path='/AdminViewOrganiserRequest' element={[<AdminNav />, <AdminMain data='adminvieworganiserrequest' />]} />
          <Route exact path='/AdminallViewOrganizerRequest/:id' element={[<AdminNav />, <AdminMain data='AdminallViewOrganizerRequest' />]} />
          <Route exact path='/AdminViewReviewAndRatings' element={[<AdminNav />, <AdminMain data='AdminViewReviewAndRatings' />]} />

          <Route exact path='/ViewCoachRequest' element={[<AdminNav />, <AdminMain data="ViewCoachRequest" />]} />
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
          <Route exact path='/adminmain' element={[<AdminNav />, <AdminMain />]} />
          <Route exact path='/ViewAllViewer' element={[<ViewAllViewer/>]} />
          <Route exact path='/ViewerProfilePopup/:id' element={[<ViewerProfilePopup/>]}/>
          <Route exact path='/EventRequests' element={[<AdminNav />, <AdminMain data="EventRequests" />]} />
          <Route path='/ViewAllEvents' element={[<AdminNav />, <AdminMain data='ViewAllEvents' />,<UserFooter/>]} />
          <Route exact path='/ViewAllViewer' element={[<ViewAllViewer />]} />
          <Route exact path='/ViewerProfilePopup/:id' element={[<ViewerProfilePopup />]} />
          <Route exact path='/EventRequests' element={[<EventRequests />]} />
          <Route path='/ViewAllEvents' element={[<AdminNav />, <AdminMain data='ViewAllEvents' />, <UserFooter />]} />

          {/* Team Coach */}
          <Route exact path="/TeamCoachForgetPass" element={<TeamCoachForgetPass />} />
          <Route exact path="/TeamCoachLogin" element={[<MainNavbar />, <TeamCoachLogin />, <UserFooter />]} />
          <Route exact path="/TeamCoachHomePage" element={[<TeamCoachTopNav />, <TeamCoachHomePage />, <Aboutpage />, <UserFooter />]} />
          <Route exact path="/TeamCoachreg" element={[<MainNavbar />, <TeamcoachReg />, <UserFooter />]} />
          <Route exact path="/AdminResetPass" element={[<AdminTopbar />, <Adminsidebar />, <AdminResetPass />]} />
          <Route exact path="/Aboutpage" element={[<MainNavbar />, <Aboutpage />, <UserFooter />]} />
          <Route exact path="/Enquiries" element={[<MainNavbar />, <Enquiries />, <UserFooter />]} />
          <Route exact path="/TeamCoachViewpage" element={[<TeamCoachViewpage />]} />
          <Route exact path='/TeamCoachEditProfile' element={[<TeamCoachTopNav />, <TeamCoachEditProfile />, <UserFooter />]} />
          <Route exact path="/Teamcoachdetailspopup/:id" element={[<AdminNav />, <AdminMain data="Teamcoachdetailspopup" />]} />
          <Route exact path="/Teamcoachviewprofilepopup" element={[<TeamCoachTopNav />, <Teamcoachviewprofilepopup />, <UserFooter />]} />
          <Route exact path="/TeamCoachLandingPage1" element={<TeamCoachLandingPage1 />} />
          <Route exact path="/TeamCoachLandingPage2" element={<TeamCoachLandingPage2 />} />
          <Route exact path="/TeamCoachLandingPage3" element={<TeamCoachLandingPage3 />} />
          <Route exact path="/TeamCoachAddTeamMembers" element={<TeamCoachAddTeamMembers/>} />
          <Route exact path="/TeamCoachEditTeamMembers/:id" element={[<TeamCoachTopNav/>,<TeamCoachEditTeamMembers/>]} />
          <Route exact path='/TeamCoachAddSub' element={[<TeamCoachTopNav/>,<TeamCoachAddSub/>,<UserFooter/>]}/>
          <Route exact path='/TeamCoachViewEvents' element={[<TeamCoachTopNav/>,<TeamCoachViewEvents/>,<UserFooter/>]} />
          <Route exact path='/TeamCoachEnrolledEvents' element={[<TeamCoachTopNav/>,<TeamCoachEnrolledEvents/>,<UserFooter/>]} />
          <Route exact path='/TeamCoachEnrollNow' element={[<TeamCoachTopNav/>,<TeamCoachEnrollNow/>,<UserFooter/>]} />

          <Route exact path='/TeamCoachResults' element={[<TeamCoachTopNav/>,<TeamCoachResults/>,<UserFooter/>]} />
          <Route exact path='/TeamCoachRR' element={[<TeamCoachTopNav/>,<TeamCoachReviewRatings/>,<UserFooter/>]} />
          <Route exact path='/TeamCoachViewTeamMembers' element={[<TeamCoachTopNav/>,<TeamCoachViewTeamMembers/>,<UserFooter/>]} />
          <Route exact path="/TeamCoachAddTeamMembers" element={[<TeamCoachTopNav />, <TeamCoachAddTeamMembers />, <UserFooter />]} />
          <Route exact path="/TeamCoachEditTeamMembers" element={[<TeamCoachTopNav />, <TeamCoachEditTeamMembers />, <UserFooter />]} />
          <Route exact path='/TeamCoachAddSub' element={[<TeamCoachTopNav />, <TeamCoachAddSub />, <UserFooter />]} />
          <Route exact path='/TeamCoachViewEvents' element={[<TeamCoachTopNav />, <TeamCoachViewEvents />, <UserFooter />]} />
          <Route exact path='/TeamCoachEnrolledEvents' element={[<TeamCoachTopNav />, <TeamCoachEnrolledEvents />, <UserFooter />]} />
          <Route exact path='/TeamCoachResults' element={[<TeamCoachTopNav />, <TeamCoachResults />, <UserFooter />]} />
          <Route exact path='/TeamCoachRR' element={[<TeamCoachTopNav />, <TeamCoachReviewRatings />, <UserFooter />]} />
          <Route exact path='/TeamCoachViewTeamMembers' element={[<TeamCoachTopNav />, <TeamCoachViewTeamMembers />, <UserFooter />]} />
          <Route exact path='/TeamCoachViewResults' element={[<TeamCoachTopNav />, <TeamCoachViewResults />, <UserFooter />]} />

          {/* Organizer */}
          <Route exact path='/OrganizerRegistration' element={[<MainNavbar />, <OrganiserRegistration />, <UserFooter />]} />
          <Route exact path='/OrganizerLogin' element={[<MainNavbar />, <OrganizerLogin />, <UserFooter />]} />
          <Route exact path='/OrganizerForgetPass' element={[<MainNavbar />, <OrganiserForgotPassword />, <UserFooter />]} />
          <Route exact path='/OrganizerDashboard' element={[<OrganiserDashboardNavBar />, <OrganizerMain data="OrganizerDashboard" />, <UserFooter />]} />
          <Route exact path='/OrganiserEditProfile' element={[<OrganiserDashboardNavBar />, <OrganizerMain data="OrganiserEditProfile" />, <UserFooter />]} />
          <Route path='/adminoraganizerviewrequest' element={[<MainNavbar />, <AdminMain data='adminallvieworganizerpage' />]} />
          <Route path='/adminViewOrganizerToApprove/:id' element={[<MainNavbar />, <AdminMain data='adminViewOrganizerToApprove' />]} />

          <Route exact path='/OrganizerScheduleEvents' element={[<OrganiserDashboardNavBar />, <OrganizerMain data="OrganizerScheduleEvents" />, <UserFooter />]} />
          <Route exact path='/OrganizerViewEvents' element={[<OrganiserDashboardNavBar />, <OrganizerMain data="OrganizerViewEvents" />, <UserFooter />]} />
          <Route exact path='/OrganizerEnroll' element={[<OrganiserDashboardNavBar />, <OrganizerMain data="OrganizerEnroll" />, <UserFooter />]} />
          <Route exact path='/OrganizerScoreBoard' element={[<OrganiserDashboardNavBar />, <OrganizerMain data="OrganizerScoreBoard" />, <UserFooter />]} />
          <Route exact path='/OrganizerViewScore/:id' element={[<OrganiserDashboardNavBar />, <OrganizerMain data='OrganizerViewScore' />, <UserFooter />]} />
          <Route exact path='/OrganizerEditScore/:id' element={[<OrganiserDashboardNavBar />, <OrganizerMain data='OrganizerEditScore' />, <UserFooter />]} />
          <Route exact path='/OrganizerViewDetails/:id' element={[<OrganiserDashboardNavBar />, <OrganizerMain data='OrganizerViewDetails' />, <UserFooter />]} />
          <Route exact path='/OrganizerTicketGen' element={[<OrganiserDashboardNavBar/>,<OrganizerMain data='OrganizerTicketGen'/>,<UserFooter/>]} />
          <Route exact path='/OrganizerTicketGen2' element={[<OrganiserDashboardNavBar/>,<OrganizerMain data='OrganizerTicketGen2'/>,<UserFooter/>]} />
          <Route exact path='/OrganizerViewReport' element={[<OrganiserDashboardNavBar/>,<OrganizerMain data='OrganizerViewReport'/>,<UserFooter/>]} />
          <Route exact path='/OrganizerViewBlogs' element={[<OrganiserDashboardNavBar/>,<OrganizerMain data='OrganizerViewBlogs'/>,<UserFooter/>]} />

          <Route path='/adminoraganizerviewrequest' element={[<MainNavbar />, <AdminMain data='adminallvieworganizerpage' />, <UserFooter />]} />

          <Route exact path='/OrganiserAddBlogs' element={[<OrganiserDashboardNavBar/>,<OrganizerMain data='OrganiserAddBlogs'/>,<UserFooter/>]}/>


          {/* Viewer */}
          <Route exact path='/ViewerRegistration' element={[<MainNavbar />, <ViewerRegistration />, <UserFooter />]} />
          <Route exact path='/ViewerLogin' element={[<MainNavbar />, <ViewerLogin />, <UserFooter />]} />
          <Route exact path='/ViewerForgotPassword' element={[<MainNavbar />, <ViewerForgotPassword />, <UserFooter />]} />
          <Route exact path='/ViewerHomePage' element={[<ViewerNavBar />, <ViewerHomePage />, <Aboutpage />, <UserFooter />]} />
          <Route exact path='/ViewerProfile' element={[<ViewerNavBar />, <ViewerProfile />, <UserFooter />]} />
          <Route exact path='/ViewerEditProfile' element={<ViewerEditProfile />} />
          <Route exact path='/ViewerUpcoming' element={[<ViewerNavBar />, <ViewerUpcoming />, <UserFooter />]} />
          <Route exact path='/ViewerUpcomingDetails' element={[<ViewerNavBar />, <ViewerUpcomingDetails />, <UserFooter />]} />
          <Route exact path='/ViewerPayment' element={[<ViewerNavBar />, <ViewerPayment />, <UserFooter />]} />
          <Route exact path='/ViewerBookedTickets' element={[<ViewerNavBar />, <ViewerBookedTickets />, <UserFooter />]} />
          <Route exact path='/ViewerScoreboard' element={[<ViewerNavBar/>,<ViewerScoreboard/>,<UserFooter/>]} />
          <Route exact path='/ViewerViewScoreboard' element={[<ViewerNavBar/>,<ViewerViewScoreboard/>,<UserFooter/>]} />
          <Route exact path='/ViewerReviewRating' element={[<ViewerNavBar/>,<ViewerReviewRating/>,<UserFooter/>]} />
          <Route exact path='/ViewerBlogs' element={[<ViewerNavBar/>,<ViewerBlogs/>,<UserFooter/>]} />

          <Route path='/admin-viewAllViewer' element={[<MainNavbar />, <AdminMain data='admin-viewAllViewer' />]} />

          {/* Events */}

        </Routes>

      </div>

    </BrowserRouter>

  )

}

export default App;