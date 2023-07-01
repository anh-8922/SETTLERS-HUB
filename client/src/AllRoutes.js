import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Register from "./Pages/Register";
import Login from "./Pages/Login"
import ProfilePage from "./Pages/Profile";


export default function AllRoutes () {
    return(
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/userregister" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
      </Routes>
    )
}