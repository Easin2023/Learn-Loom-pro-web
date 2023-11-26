import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../page/Home/Home";
import SignIn from "../component/SignIn/SignIn";
import Login from "../component/Login/Login";
import Dashboard from "../page/Dashboard/Dashboard";
import EnrollClass from "../Dashboard/EnrollClass/EnrollClass";
import Profile from "../Dashboard/Profile/Profile";

const router = createBrowserRouter([
     {
          path: "/",
          element: <Main/>,
          children: [
               {
                    path: "/",
                    element: <Home/>
               },
          ]
     },
     {
          path:"/signIn",
          element: <SignIn/>
     },
     {
          path: "/login",
          element: <Login/>
     },
     {
          path: "/dashboard",
          element: <Dashboard/>,
          children: [
               {
                    path: "/dashboard/enrollClass",
                    element: <EnrollClass/>
               },
               {
                    path: "/dashboard/profile",
                    element: <Profile/>
               }
          ]
     }
])

export default router;