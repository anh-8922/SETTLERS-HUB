import { Outlet } from "react-router-dom";

function LoginLayout(props) {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default LoginLayout;