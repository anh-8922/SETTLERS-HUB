import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ServicePage from './Pages/ServicePage';
import Register from "./Pages/Register";
import Login from "./Pages/Login"
import ProfilePage from "./Pages/Profile";
import InfoLondon from "./SubPage/info";
import Accommodations from "./SubPage/Accommodations";
import Work from "./SubPage/Work";
import Study from "./SubPage/Study";
import HealthCare from "./SubPage/HealthCare";
import Leisure from "./SubPage/Leisure";
import Transport from "./SubPage/Transport";
import Miscellaneous from "./SubPage/Miscellaneous";
import Community from "./Pages/CommunityPage";
import ResetPassowrd from "./Pages/ResetPasswordPage";
import ForgotPassowrd from "./Pages/ForgotPasswordPage";
import AddGuidePost from "./AdminUnpublished/AddGuidePost";
import SingleSubPage from "./SubPage/SingleSubPage";
import AddCommunitypost from "./SubPage/AddCommunityPost";
import AddNewAds from "./SubPage/AddNewAds";
import Housing from "./Pages/HousingPage";
import SingleProperty from "./SubPage/SinglePropertyPage";



export default function AllRoutes () {
    return(
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/service" element={<ServicePage/>}/>
        <Route path="/community" element={<Community/>}/>
        <Route path="/userregister" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/guide/info" element={<InfoLondon/>}/>
        <Route path='/guide/accommodations' element={<Accommodations/>}/>
        <Route path='/guide/work' element={<Work/>}/>
        <Route path='/guide/study' element={<Study/>}/>
        <Route path='/guide/health' element={<HealthCare/>}/>
        <Route path='/guide/leisure' element={<Leisure/>}/>
        <Route path='/guide/transport' element={<Transport/>}/>
        <Route path='/guide/miscellaneous' element={<Miscellaneous/>}/>
        <Route path="/resetpassword" element={<ResetPassowrd/>}/>
        <Route path="/forgotpassword" element={<ForgotPassowrd/>}/>
        <Route path='/admin/addguidepost' element={<AddGuidePost/>}/>
        <Route path="/singleguidepost/:id" element={<SingleSubPage/>} />
        <Route path='/addcommunitypost' element={<AddCommunitypost/>}/>
        <Route path='/addnewad' element={<AddNewAds/>}/>
        <Route path='/housing' element= {<Housing/>} />
        <Route path= '/singlepropertypage' element = {<SingleProperty/>} />
      </Routes>
    )
}