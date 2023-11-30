import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../page/Home/Home";
import SignIn from "../component/SignIn/SignIn";
import Login from "../component/Login/Login";
import Dashboard from "../page/Dashboard/Dashboard";
import EnrollClass from "../Dashboard/EnrollClass/EnrollClass";
import Profile from "../Dashboard/Profile/Profile";
import AddClasses from "../Dashboard/AddClasses/AddClasses";
import MyClass from "../Dashboard/MyClass/MyClass";
import AllClasses from "../Dashboard/AllClasses/AllClasses";
import AllUser from "../Dashboard/AllUser/AllUser";
import TeacherRequest from "../Dashboard/TeacherRequset/TeacherRequset";
import HomeAllClass from "../page/HomeAllClass/HomeAllClass";
import CardDetail from "../component/CardDetail/CardDetail";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Feedback from "../Dashboard/feedback/Feedback";
import TeacherOnPage from "../page/TeacherOnPage/TeacherOnPage";
import RequestData from "../Dashboard/requestData/RequestData";
import Payment from "../Payment/Payment";
import MyClassUpdate from "../Dashboard/MyClass/MyClassUpdate";
import AdminSecure from "../Admin/AdminSecure";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allClass",
        element: (
          <PrivateRoute>
            <HomeAllClass />
          </PrivateRoute>
        ),
      },
      {
        path: "/allClass/:id",
        element: (
          <PrivateRoute>
            <CardDetail />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/:id",
        element: <Payment />,
      },
      {
        path: "/teachOn",
        element: (
          <PrivateRoute>
            <TeacherOnPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/enrollClass",
        element: <EnrollClass />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/addClass",
        element: <AddClasses />,
      },
      {
        path: "/dashboard/myClasses",
        element: <MyClass />,
      },
      {
        path: "/dashboard/myClassUpdate/:id",
        element: <MyClassUpdate />,
      },
      {
        path: "/dashboard/allClasses",
        element: (
          <AdminSecure>
            <AllClasses />
          </AdminSecure>
        ),
      },
      {
        path: "/dashboard/allUser",
        element: (
          <AdminSecure>
            <AllUser />
          </AdminSecure>
        ),
      },
      {
        path: "/dashboard/teacherRequest",
        element: (
          <AdminSecure>
            <TeacherRequest />
          </AdminSecure>
        ),
      },
      {
        path: "/dashboard/feedback",
        element: <Feedback />,
      },
      {
        path: "/dashboard/userRequest",
        element: <RequestData />,
      },
    ],
  },
]);

export default router;
