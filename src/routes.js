import { createBrowserRouter } from "react-router-dom";

import { Navbar } from "./services/NavBar";
import Home from "./pages/Home";
import SigIn from "./pages/SignIn";
import UserEdit from "./pages/UserEdit";
import Users from "./pages/Users";
import PrivateRoute from "./PrivateRoute";

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
    path: "/login",
    element: (
      <>
        <Navbar />
        <SigIn />
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
