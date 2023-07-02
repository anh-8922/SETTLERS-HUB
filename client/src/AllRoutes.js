import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Register from "./Pages/Register";
import Login from "./Pages/Login"
import ProfilePage from "./Pages/Profile";
import InfoLondon from "./Pages/HomeSubPage/info";

export default function AllRoutes () {
    return(
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/userregister" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/guide/info" element={<InfoLondon/>}/>
      </Routes>
    )
}