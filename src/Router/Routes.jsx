import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import DashBoard from "../Layout/DashBoard";
import AddProduct from "../page/Dashboard/AddProduct";
import UpdateProduct from "../page/Dashboard/UpdateProduct";
import AllProduct from "../page/Dashboard/AllProduct";
import Home from "../page/Home/Home";
import Products from "../page/Home/Products";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import DetailsProduct from "../components/Products/DetailsProduct";
import PopularProduct from "../components/Home/PopularProduct";
import About from "../page/Home/About";
import Blog from "../page/Home/Blog";
import ContactUs from "../page/Home/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <PopularProduct></PopularProduct>,
          },
        ],
      },

      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch("http://localhost:5000/coffee"),
      },

      {
        path: "/detailsProduct/:id",
        element: <DetailsProduct></DetailsProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/aboutus",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "/dashboard/allProducts",
        element: <AllProduct></AllProduct>,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/upDateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
    ],
  },
]);
