import { Link, NavLink } from "react-router-dom";
import img from "../assets/images/more/15.jpg";
import logo from "../assets/images/more/logo1.png";
import { IoIosContact } from "react-icons/io";
const Navbar = () => {
  const nav = (
    <>
      <NavLink to="/">
        <p>Home</p>
      </NavLink>
      <NavLink to="/products">
        <p>Products</p>
      </NavLink>
      <NavLink to="/aboutus">
        <p>About Us</p>
      </NavLink>
      <NavLink to="/blog">
        <p>Blog</p>
      </NavLink>
      <NavLink to="/contactus">
        <p>Contact Us</p>
      </NavLink>
    </>
  );

  return (
    <>
      <div
        className="navbar bg-cover bg-center bg-no-repeat text-white fixed z-10 top-0 "
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#331A15] rounded-box z-[1] mt-3 w-52 p-6 shadow gap-3 font-semibold"
            >
              {nav}
            </ul>
          </div>
          <Link className="flex items-center gap-1">
            <img className="w-10" src={logo} alt="" />
            <p className=" lg:text-xl">Caffeine Canvas</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 font-semibold">
            {nav}
          </ul>
        </div>
        {/*  */}
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="text-3xl">
              <IoIosContact />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-[#331A15] rounded-box z-[1] w-52 p-5 shadow mt-3 font-semibold space-y-4 "
            >
              <NavLink to="/dashboard">
                <p>DashBoard</p>
              </NavLink>
              <NavLink to="/login">
                <p>Login</p>
              </NavLink>
              <NavLink to="/register">
                <p>Register</p>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
