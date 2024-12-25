import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import DashBoard from "../Layout/DashBoard";
import AddProduct from "../page/Dashboard/AddProduct";
import UpdateProduct from "../page/Dashboard/UpdateProduct";
import AllProduct from "../page/Dashboard/AllProduct";
import Home from "../page/Home/Home";
import Products from "../page/Home/Products";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch("http://localhost:5000/coffee"),
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
        loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
      },
    ],
  },
]);
