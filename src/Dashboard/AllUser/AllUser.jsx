import useAxiosSecure from "../../hooks/useAxiosSecure";
import Title from "../../shared/Title";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const AllUser = () => {
  const axios = useAxiosSecure();
  // useEffect(() => {
  //   setLoading(true);
  //   axios.get("/user").then((res) => {
  //     console.log(res.data.user);
  //         const userData = res?.data?.user.filter(data => data.role !== "admin")
  //     setAllUser(userData);
  //     setLoading(false);
  //   });
  // }, [axios]);

  const {data, refetch, isLoading} = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      const getData = await axios.get('/user')
      return await getData?.data?.user
    }
  })

  const handleMakeAdmin = e => {
    console.log(e)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, reject request it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.patch(`/userMakeAdmin/${e}`);
          console.log(response.data);
          if(response.data){
            Swal.fire({
              title: "success admin!",
              text: "Your user has been admin.",
              icon: "success"
            })
            refetch();
          }else{
            Swal.fire({
              title: "not a reject!",
              text: "user has been reject.",
              icon: "error"
            });
            refetch()
          }
        } catch (error) {
          console.error("Error updating data:", error.response.data);
        }
      }
    });

  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }


  return (
     <div>
     <Title title={"All user"} />
     <div>
          <div>
               
          </div>
       <div className="overflow-x-auto">
         <table className="table">
           <thead>
             <tr>
               <th>User Name</th>
               <th>User Email</th>
               <th>make admin</th>
               <th>role</th>
             </tr>
           </thead>
           {
              data?.map((userData, index) => (
                   <tbody key={userData._id}>
             <tr>
               <td>
                 <div className="flex items-center gap-3">
                    <div>
                         <h1>{index +1}</h1>
                    </div>
                   <div>
                     <div className="font-bold">{userData?.name}</div>
                     <div className="text-sm opacity-50">
                       {userData?.category}
                     </div>
                   </div>
                 </div>
               </td>
               <td>{userData?.email}</td>
               <td>
                  {
                    userData?.role === "admin" ? <button disabled="disabled"  className="btn btn-sm btn-outline">Make admin</button> 
                    : 
                    <button onClick={() => handleMakeAdmin(userData?.email)} className="btn btn-sm btn-outline">Make admin</button>
                  }
               </td>
               <td>
                    {userData?.role}
               </td>
             </tr>
             <hr />
           </tbody>
              ))
           }
         </table>
       </div>
     </div>
   </div>
  );
};

export default AllUser;
