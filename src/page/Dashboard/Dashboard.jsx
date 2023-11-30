import { NavLink, Outlet } from "react-router-dom";
import LogoImage from "../../../public/1-removebg-preview.png";
import useProvider from "../../hooks/useProvider";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const { user: users } = useProvider();
  const axiosUse = useAxiosSecure();

  const {data, isLoading} = useQuery({
    queryKey: [users],
    queryFn: async () => {
      const find = await axiosUse.get(`/user/${users?.email}`)
      return await find?.data
    }
  })
  console.log(data)

  if(isLoading){
    return <div className="flex justify-center items-center h-screen">
      <span className="loading loading-bars loading-lg"></span>
    </div>
  }

  // useEffect(() => {
  //   axiosUse.get(`/user/${users?.email}`).then((res) => {
  //     console.log(res.data.user.role);
  //     setUserRole(res.data);
  //   });
  // }, [axiosUse, users?.email]);

  return (
    <div className="grid grid-cols-12">
      <Helmet>
                    <title>LearnLoom | Dashboard</title>
               </Helmet>
      <div className="col-span-2 bg-red-100 h-screen ">
        {data?.user?.role === "user" && (
          <div className="flex h-screen flex-col justify-between border-e bg-red-100">
            <div className="px-4 py-6">
              <img className="w-48" src={LogoImage} alt="" />

              <ul className="mt-6 space-y-1">
                <li className="mb-5">
                  <NavLink
                    to="/dashboard/enrollClass"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " btn btn-sm btn-active w-full"
                        : "   btn btn-sm  w-full flex justify-start"
                    }
                  >
                    MY Enroll Class
                  </NavLink>
                </li>

                <li className="mb-5">
                  <NavLink
                    to="/dashboard/profile"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " btn btn-sm btn-active w-full"
                        : "   btn btn-sm  w-full flex justify-start"
                    }
                  >
                    Profile
                  </NavLink>
                </li>
                <li className="mb-5">
                  <NavLink
                    to="/dashboard/feedback"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " btn btn-sm btn-active w-full"
                        : "   btn btn-sm  w-full flex justify-start"
                    }
                  >
                    User Feedback
                  </NavLink>
                </li>
                <li className="mb-5">
                  <NavLink
                    to="/dashboard/userRequest"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " btn btn-sm btn-active w-full"
                        : "   btn btn-sm  w-full flex justify-start"
                    }
                  >
                    my request
                  </NavLink>
                </li>
                <div className="divider my-3"></div>
                <li className="mb-4">
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " btn btn-sm btn-active w-full"
                        : "   btn btn-sm  w-full flex justify-start"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    to="/allClass"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " btn btn-sm btn-active w-full"
                        : "   btn btn-sm  w-full flex justify-start"
                    }
                  >
                    All Class
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
              <a
                href="#"
                className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
              >
                <img
                  alt="Man"
                  src=""
                  className="h-10 w-10 rounded-full object-cover"
                />

                <div>
                  <p className="text-xs">
                    <strong className="block font-medium">
                      {users?.displayName}
                    </strong>

                    <span>{users?.email}</span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        )}
        {data?.user?.role === "teacher" && (
          <div className="flex h-screen flex-col justify-between border-e bg-red-100">
            <div className="px-4 py-6">
              <img className="w-48" src={LogoImage} alt="" />

              <ul className="mt-6 space-y-1">
                <li>
                  <NavLink
                    to="/dashboard/addClass"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " btn btn-sm btn-active w-full"
                        : "  btn btn-sm  w-full flex justify-start"
                    }
                  >
                    Add classes
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/myClasses"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " btn btn-sm btn-active w-full"
                        : " btn btn-sm w-full flex justify-start"
                    }
                  >
                    My classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/profile"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " btn btn-sm btn-active w-full"
                        : " btn btn-sm w-full flex justify-start"
                    }
                  >
                    profile
                  </NavLink>
                </li>
                <div className="divider my-3"></div>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " btn btn-sm btn-active w-full"
                        : "btn btn-sm w-full flex justify-start"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    to="/allClass"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " btn btn-sm btn-active w-full"
                        : "   btn btn-sm  w-full flex justify-start"
                    }
                  >
                    All Class
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
              <a
                href="#"
                className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
              >
                <img
                  alt="Man"
                  src=""
                  className="h-10 w-10 rounded-full object-cover"
                />

                <div>
                  <p className="text-xs">
                    <strong className="block font-medium">
                      {users?.displayName}
                    </strong>

                    <span>{users?.email}</span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        )}
        {data?.user?.role === "admin" && (
          <div className="flex h-screen flex-col justify-between border-e bg-red-100">
            <div className="px-4 py-6">
              <img className="w-48" src={LogoImage} alt="" />

              <ul className="mt-6 space-y-1">
                <li className="mb-5">
                  <NavLink
                    to="/dashboard/teacherRequest"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " btn btn-sm btn-active w-full"
                        : "  btn btn-sm  w-full flex justify-start"
                    }
                  >
                    Teacher Request
                  </NavLink>
                </li>

                <li className="mb-5">
                  <NavLink
                    to="/dashboard/allUser"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " btn btn-sm btn-active w-full"
                        : "   btn btn-sm  w-full flex justify-start"
                    }
                  >
                    user
                  </NavLink>
                </li>
                <li className="mb-5">
                  <NavLink
                    to="/dashboard/allClasses"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " btn btn-sm btn-active w-full"
                        : "   btn btn-sm  w-full flex justify-start"
                    }
                  >
                    all Classes
                  </NavLink>
                </li>
                <li className="mb-5">
                  <NavLink
                    to="/dashboard/profile"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " btn btn-sm btn-active w-full"
                        : "   btn btn-sm  w-full flex justify-start"
                    }
                  >
                    Profile
                  </NavLink>
                </li>
                <div className="divider my-3"></div>
                <li className="mb-4">
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " btn btn-sm btn-active w-full"
                        : "   btn btn-sm  w-full flex justify-start"
                    }
                  >
                    Home
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
              <a
                href="#"
                className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
              >
                <img
                  alt="Man"
                  src=""
                  className="h-10 w-10 rounded-full object-cover"
                />

                <div>
                  <p className="text-xs">
                    <strong className="block font-medium">
                      {users?.displayName}
                    </strong>

                    <span>{users?.email}</span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="col-span-10 bg-red-50">
        <div className="ml-20 mt-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
