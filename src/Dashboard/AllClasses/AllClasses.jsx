import Title from "../../shared/Title";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import {Link} from 'react-router-dom';

const AllClasses = () => {
  const axios = useAxiosSecure();

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["userRequest"],
    queryFn: async () => {
      const getData = await axios.get("/getAllClass");
      return getData?.data?.sites;
      // const filter = getData?.data?.sites.filter(da => da.status === "pending")
      // return filter
    },
  });

  const handleUpdate = async (e) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, approved request it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.patch(`/updateClassOne/${e}`);
          console.log(response.data);
          if (response.data) {
            Swal.fire({
              title: "reject!",
              text: "Your file has been reject.",
              icon: "success",
            });
            refetch();
          } else {
            Swal.fire({
              title: "not a reject!",
              text: "it has been reject.",
              icon: "error",
            });
            refetch();
          }
        } catch (error) {
          console.error("Error updating data:", error.response.data);
        }
      }
    });
  };

  console.log(data);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <Title title={"class approved admin"} />
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>title</th>
                <th>approved</th>
              </tr>
            </thead>
            {data.map((ClassData) => (
              <tbody key={ClassData._id}>
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={ClassData?.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{ClassData?.name}</div>
                        <div className="text-sm opacity-50">
                          {ClassData?.category}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{ClassData?.title}</td>
                  <td>
                    {ClassData?.status === "approved" ? (
                      <Link to={`/allClass/${ClassData?._id}`}>
                        <button className="btn btn-sm btn-info btn-outline">
                          see details
                        </button>
                      </Link>
                    ) : (
                      <div>
                        <button
                          onClick={() => handleUpdate(ClassData?._id)}
                          className="btn btn-sm btn-primary "
                        >
                          approved
                        </button>
                        <button className="btn btn-sm btn-error btn-outline ml-3 ">
                          reject
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllClasses;
