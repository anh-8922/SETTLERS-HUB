// import { useContext } from "react";
// import { AppContext } from "../components/Context";
import { Outlet, Navigate } from "react-router-dom";
import { useGetUserID } from "../CustomHooks/useGetUserID";

function ProtectedLayout(props) {
  const userID = useGetUserID()

  if (userID) {
    return <Outlet />;
  }

  return <Navigate to="/" />;
}

export default ProtectedLayout;