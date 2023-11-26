import { NavLink, Outlet } from "react-router-dom";
import LogoImage from "../../../public/1-removebg-preview.png";
import Title from "../../shared/Title";
import useProvider from "../../hooks/useProvider";

const Dashboard = () => {
  const { user } = useProvider();
  console.log(user);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-red-100 h-screen ">
        <div className="flex h-screen flex-col justify-between border-e bg-red-100">
          <div className="px-4 py-6">
            <img className="w-48" src={LogoImage} alt="" />

            <ul className="mt-6 space-y-1">
              <li className="mb-5">
                <NavLink
                  to="/dashboard/enrollClass"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "px-4 py-2 rounded-lg text-sm bg-gray-100 text-gray-700 font-medium" : " px-4 py-2 font-medium rounded-lg text-sm text-gray-700"
                  }
                >
                  MY Enroll Class
                </NavLink>
              </li>

              <li className="mb-5">
                <NavLink
                  to="/dashboard/profile"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "px-10 py-2 rounded-lg text-sm bg-gray-100 text-gray-700 font-medium" : " px-10 py-2 font-medium rounded-lg text-sm text-gray-700"
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
                    isPending ? "pending" : isActive ? "px-10 py-2 rounded-lg text-sm bg-gray-100 text-gray-700 font-medium" : " px-10 py-2 font-medium rounded-lg text-sm text-gray-700"
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
                src={user?.photoURL}
                className="h-10 w-10 rounded-full object-cover"
              />

              <div>
                <p className="text-xs">
                  <strong className="block font-medium">
                    {user?.displayName}
                  </strong>

                  <span>{user?.email}</span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-10 bg-red-50">
        <Title title={"My enroll classes"} />
        <div className="ml-20 mt-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
