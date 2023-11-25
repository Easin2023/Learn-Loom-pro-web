import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../page/Home/Home";
import SignIn from "../component/SignIn/SignIn";
import Login from "../component/Login/Login";

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
     }
])

export default router;