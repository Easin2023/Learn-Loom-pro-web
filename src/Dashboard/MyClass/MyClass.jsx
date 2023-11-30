import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useProvider from "../../hooks/useProvider";
import Title from "../../shared/Title";
import Swal from "sweetalert2";
import {Link} from 'react-router-dom';

const MyClass = () => {
  const { user } = useProvider();
  const axios = useAxiosSecure();

  console.log(user.email);
  
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["one", user?.email],
    queryFn: async () => {
      const getData = await axios.get(`/getClassOneAndEmail/${user?.email}`);
      return getData?.data?.data;
    },
  });
  
  console.log("data is", data)
  

  const handleDelete = (e) => {
    console.log(e);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, reject request it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`/myClassDelete/${e}`);
          console.log(response.data);
          if (response.data) {
            Swal.fire({
              title: "approves 👌👍👍😎!",
              text: "Your success has been approves.",
              icon: "success",
            });
            refetch();
          } else {
            Swal.fire({
              title: "noo😂!",
              text: "not a success delete.",
              icon: "success",
            });
          }
        } catch (error) {
          console.error("Error updating data:", error.response.data);
        }
      }
    });
  };


  // const handleUpdate = (e) => {
  //   console.log(e);
  // };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Title title={"My added all classes"} />

        <div className="grid grid-cols-2 gap-4">
          {data?.map((allData) => (
            <div
              key={allData._id}
              className="card w-96 bg-base-100 shadow-xl mt-10"
            >
              <figure>
                <img src={allData?.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{allData?.title}</h2>
                <h2 className="text-orange-400">Name: {allData?.name}</h2>
                <h2 className="text-orange-400">Email: {allData?.email}</h2>
                <p>{allData?.description}</p>
                <p className="text-orange-400">status: {allData?.status}</p>
                <div className="card-actions mt-4">
                  <Link to={`/dashboard/myClassUpdate/${allData?._id}`}>
                    <button className="btn btn-primary btn-sm">update</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(allData._id)}
                    className="btn btn-error btn-outline btn-sm"
                  >
                    delete
                  </button>
                  {allData?.status === "pending" && (
                    <button
                      disabled="disable"
                      className="btn btn-primary btn-sm"
                    >
                      seeDetails
                    </button>
                  )}
                  {allData?.status === "approved" && (
                    <button className=" btn-sm btn btn-primary">
                      seeDetails
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyClass;
