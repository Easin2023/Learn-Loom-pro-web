import { useQuery } from "@tanstack/react-query";
import useProvider from "../../hooks/useProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Profile = () => {
  const { user } = useProvider();
  const axios = useAxiosSecure();

  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const userFind = await axios.get(`/user/${user?.email}`);
      return userFind?.data;
    },
  });

  console.log(data);

  return (
    <div className="mx-10">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
          className="w-60 h-60 m-20 rounded-full"
            src={user?.photoURL}
            alt="Album"
          />
        </figure>
        <div className="divider divider-horizontal"></div>
        <div className="card-body">
          <h1 className="text-center text-3xl text-red-300 font-bold">My Profile</h1>
          <h2 className="card-title">{user?.displayName}</h2>
          <p>{user?.email}</p>
          <p>my Role:  {data?.user?.role}</p>
          <p className="-mt-24">my phone: +8801645650504</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
