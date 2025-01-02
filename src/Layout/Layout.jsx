import { Outlet } from "react-router-dom";
import Navbar from "../shered/Navbar";
import Footer from "../shered/Footer";
import img from "../assets/images/more/1.png";



const Layout = () => {
  
  return (
    <div className="text-white bg-white">
      <Navbar></Navbar>
      <div
        className="min-h-screen bg-fixed"
        style={{ backgroundImage: `url(${img})` }}
      >
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
