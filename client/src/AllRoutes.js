import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ServicePage from './Pages/Service';
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
import AddCommunitypost from "./Features/AddCommunityPost";
import AddNewAds from "./SubPage/AddNewAds";
import Housing from "./Pages/HousingPage";
import SingleProperty from "./SubPage/SinglePropertyPage";
import ProtectedLayout from "./Layout/ProtectedLayout";
import LoginLayout from "./Layout/LoginLayout";
import EditProperties from "./Features/EditPropertyAds";
import EditServiceAd from './Features/EditServiceAd.js'
import EditRequestAds from "./Features/EditRequestAds";



export default function AllRoutes () {
    return(
      <>
    <Routes>
      <Route element={<LoginLayout/>}>
        <Route path="/userregister" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/resetpassword" element={<ResetPassowrd/>}/>
        <Route path="/forgotpassword" element={<ForgotPassowrd/>}/>
      </Route>
      
        <Route path="/" element={<HomePage/>}/>
        <Route path="/service" element={<ServicePage/>}/>
        <Route path="/community" element={<Community/>}/>
        <Route path="/guide/info" element={<InfoLondon/>}/>
        <Route path='/guide/accommodations' element={<Accommodations/>}/>
        <Route path='/guide/work' element={<Work/>}/>
        <Route path='/guide/study' element={<Study/>}/>
        <Route path='/guide/health' element={<HealthCare/>}/>
        <Route path='/guide/leisure' element={<Leisure/>}/>
        <Route path='/guide/transport' element={<Transport/>}/>
        <Route path='/guide/miscellaneous' element={<Miscellaneous/>}/>
        <Route path='/admin/addguidepost' element={<AddGuidePost/>}/>
        <Route path="/singleguidepost/:id" element={<SingleSubPage/>} />
        <Route path='/housing' element= {<Housing/>} />
        <Route path= '/singlepropertypage/:id' element = {<SingleProperty/>} />

      <Route element={<ProtectedLayout/>}>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path='/addnewad' element={<AddNewAds/>}/>
        <Route path='/editpropertyad/:id' element={<EditProperties/>}/>
        <Route path='/editservicead/:id' element= {<EditServiceAd/>}/>
        <Route path='/editrequestad/:id' element= {<EditRequestAds/>}/>
      </Route>

    </Routes>
      </>
    )
}

