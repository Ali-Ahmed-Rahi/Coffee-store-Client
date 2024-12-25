import { Outlet } from "react-router-dom";
import Sidebar from "../components/DashBoard/Sidebar";
import bg from '../assets/images/more/1.png'


const DashBoard = () => {
  return (
    <div className="grid lg:grid-cols-12 ">
        <div className="col-span-2">
          <Sidebar></Sidebar>
        </div>
        <div className=" min-h-screen col-span-10 p-4 bg-cover bg-white bg-repeat mt-10 lg:mt-0" style={{backgroundImage:`url(${bg})`}}>
          <Outlet></Outlet>
        </div>
      </div>
  );
};

export default DashBoard;