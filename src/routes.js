import { createBrowserRouter } from "react-router-dom";

import { Navbar } from "./components/NavBar";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import User from "./pages/User";
import UserCreate from "./pages/User/CreateUser";
import EditUser from "./pages/User/EditUser";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter(
  [
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
              <EditUser />
            </>
          ),
        },
        {
          path: "/users/create",
          element: (
            <>
              <Navbar />
              <UserCreate />
            </>
          ),
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

export default router;
