import { Outlet } from "react-router-dom";
import Footer from "../shared/footer/Footer";
import NavBar from "../shared/navBar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
