import React from "react";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Products from "./components/Products";
import Careers from "./components/Careers";
import Contactus from "./components/Contactus";
import Team from "./components/Team";
import Admin from "./components/Admin";
import ProductPage from "./components/ProductPage";
import Imageupload from "./components/Imageupload";
import RequirementPage from "./components/RequirementPage";
import Login from "./components/Login";
import DisplayTimesheet from "./components/DisplayTimesheet";
import { Usercontext } from "./utils/Context";
import Cookies from "universal-cookie";
import CareerPage from "./components/CareerPage";
import SubmitRequirement from "./components/SubmitRequirement";
import EditTeam from "./components/EditTeam";
import EditProduct from "./components/EditProduct";
import ForgotPassword from "./components/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/careers",
    element: <Careers />,
  },
  {
    path: "/contactus",
    element: <Contactus />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
  {
    path: "/requirement/:id",
    element: <RequirementPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/career/:id",
    element: <CareerPage />,
  },
  {
    path: "/submitrequirement",
    element: <SubmitRequirement />,
  },
  {
    path: "/submitrequirement/:id",
    element: <SubmitRequirement />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
]);
const routerAdmin = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/careers",
    element: <Careers />,
  },
  {
    path: "/contactus",
    element: <Contactus />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
  {
    path: "/upload/:id",
    element: <Imageupload />,
  },
  {
    path: "/requirement/:id",
    element: <RequirementPage />,
  },
  {
    path: "/career/:id",
    element: <CareerPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/timesheet/:id",
    element: <DisplayTimesheet />,
  },
  {
    path: "/submitrequirement",
    element: <SubmitRequirement />,
  },
  {
    path: "/submitrequirement/:id",
    element: <SubmitRequirement />,
  },
  {
    path: "/editteam/:id",
    element: <EditTeam />,
  },
  {
    path: "/editproduct/:id",
    element: <EditProduct />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
]);

const App = () => {
  const [auth, setRole] = React.useState<any | null>();
  const cookies = new Cookies();

  React.useEffect(() => {
    if (cookies.get("auth")) {
      let auth2 = cookies.get("auth");
      setRole(auth2);
    }
  }, []);
  return (
    <Usercontext.Provider value={{ auth, setRole }}>
      {/* <RouterProvider router={router} /> */}
      {!auth && <RouterProvider router={router} />}
      {auth && <RouterProvider router={routerAdmin} />}
    </Usercontext.Provider>
  );
};

export default App;
