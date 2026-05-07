import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../components/Home/Home";
import AllProuct from "../pages/AllProuct";
import HelpSupport from "../pages/HelpSupport";
import ProductDetails from "../components/ProductDetails";
import Wishlist from "../pages/Wishlist";
import DeliveryInfo from "../pages/DeliveryInfo";
import Login from "../components/Login/Login";
import Signup from "../components/SignUp/SignUp";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, loader: () => fetch("/products.json"), Component: Home },
      { path: "/helpSupport", Component: HelpSupport },
      {
        path: "/allProduct",
        loader: () => fetch("/products.json"),
        Component: AllProuct,
      },
      {
        path: "/:id",
        loader: () => fetch("/products.json"),
        Component: ProductDetails,
      },
      {
        path: "/wishlist",
        loader: () => fetch("/products.json"),
        Component: Wishlist,
      },
      {
        path: "/deliveryInf",
        // loader: () => fetch("/products.json"),
        Component: DeliveryInfo,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: Signup,
      },
    ],
  },
]);
