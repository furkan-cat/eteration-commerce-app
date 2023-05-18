import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className="h-10" />
    </>
  );
};

export default AppLayout;
