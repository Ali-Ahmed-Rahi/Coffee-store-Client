import { useState } from "react";
import { AiOutlineHome, AiOutlineProduct } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false); 

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen); 
  };

  return (
    <>
      {/* Mobile Sidebar */}
      <div className="lg:hidden w-full absolute z-10">
        <button
          className=" w-full text-white bg-amber-950 flex items-center justify-between p-4"
          onClick={toggleMobileMenu}
        >
          <span><FaBars /></span>
          
        </button>
        {isMobileOpen && (
          <div className="bg-[#D2B48C] text-amber-950 p-4 shadow-md w-2/4 rounded-lg">
            <ul className="flex flex-col gap-4">
              <li>
                <NavLink
                  to="/"
                  className="flex items-center gap-2 p-2 rounded hover:bg-[#ddc29f]"
                  onClick={toggleMobileMenu}
                >
                  <AiOutlineHome className="text-lg" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/allProducts"
                  className="flex items-center gap-2 p-2 rounded hover:bg-[#ddc29f]"
                  onClick={toggleMobileMenu}
                >
                  <AiOutlineProduct className="text-lg" />
                  All Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addProduct"
                  className="flex items-center gap-2 p-2 rounded hover:bg-[#ddc29f]"
                  onClick={toggleMobileMenu}
                >
                  <MdAddCircleOutline className="text-lg" />
                  Add Product
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/dashboard/upDateProduct"
                  className="flex items-center gap-2 p-2 rounded hover:bg-[#ddc29f]"
                  onClick={toggleMobileMenu}
                >
                  <RxUpdate className="text-lg" />
                  Update Product
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/logout"
                  className="flex items-center gap-2 p-2 bg-red-500 text-white rounded hover:bg-red-400"
                  onClick={toggleMobileMenu}
                >
                  <BiLogOut className="text-lg" />
                  LogOut
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block relative bg-[#331A15] min-h-full">
        <div className=" px-8 py-10 text-white">
          <h1 className="font-bold text-3xl mb-8 text-center ">
            Caffeine Canvas
          </h1>
          <ul className="flex flex-col gap-2 ">
            <li className="btn text-amber-950 bg-[#D2B48C] hover:bg-[#ddc29f] hover:border-2 hover:border-[#D2B48C]">
              <AiOutlineHome />
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="btn text-amber-950 bg-[#D2B48C] hover:bg-[#ddc29f] hover:border-2 hover:border-[#D2B48C]">
              <AiOutlineProduct />
              <NavLink to="/dashboard/allProducts">All Products</NavLink>
            </li>
            <li className="btn text-amber-950 bg-[#D2B48C] hover:bg-[#ddc29f] hover:border-2 hover:border-[#D2B48C]">
              <MdAddCircleOutline />
              <NavLink to="/dashboard/addProduct">Add Product</NavLink>
            </li>
            {/* <li className="btn text-amber-950 bg-[#D2B48C] hover:bg-[#ddc29f] hover:border-2 hover:border-[#D2B48C]">
              <RxUpdate />
              <NavLink to="/dashboard/upDateProduct">Update Product</NavLink>
            </li> */}
            <li className="mx-auto btn text-amber-950 bg-red-500 hover:bg-red-400">
              <BiLogOut />
              <NavLink>LogOut</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
