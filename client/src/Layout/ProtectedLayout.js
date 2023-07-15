
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