import { createBrowserRouter } from "react-router-dom";

import { Navbar } from "./components/NavBar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import UserEdit from "./pages/Users/UserEdit";
import Users from "./pages/Users/Users";
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
            <Users />
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
