import { createBrowserRouter } from "react-router-dom";

import { Navbar } from "./general-components/NavBar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import UserEdit from "./pages/User/EditUser";
import User from "./pages/User";
import PrivateRoute from "./PrivateRoute";
import SignUp from "./pages/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/signin",
    element: (
      <>
        <Navbar />
        <SignIn />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Navbar />
        <SignUp />
      </>
    ),
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/users",
        element: (
          <>
            <Navbar />
            <User />
          </>
        ),
      },
      {
        path: "/users/:userId",
        element: (
          <>
            <Navbar />
            <UserEdit />
          </>
        ),
      },
    ],
  },
]);

export default router;
