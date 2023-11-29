import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useProvider from "../../hooks/useProvider";

const MyClass = () => {
  const { user } = useProvider();
  const axios = useAxiosSecure();

  console.log(user);

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["myClass"],
    queryFn: async () => {
      const getData = await axios.get(`/getClassOneAndEmail/${user?.email}`);
      return await getData?.data;
    },
  });
  console.log(data)

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <h1>My Class</h1>
    </div>
  );
};

export default MyClass;
