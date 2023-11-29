import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Title from "../../shared/Title";

const AllUser = () => {
  const [allUser, setAllUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const axios = useAxiosSecure();
  useEffect(() => {
    setLoading(true);
    axios.get("/user").then((res) => {
      console.log(res.data.user);
          const userData = res?.data?.user.filter(data => data.role === "user")
      setAllUser(userData);
      setLoading(false);
    });
  }, [axios]);

  if (loading === true) {
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
              allUser.map((data, index) => (
                   <tbody key={data._id}>
             <tr>
               <td>
                 <div className="flex items-center gap-3">
                    <div>
                         <h1>{index +1}</h1>
                    </div>
                   <div>
                     <div className="font-bold">{data?.name}</div>
                     <div className="text-sm opacity-50">
                       {data?.category}s
                     </div>
                   </div>
                 </div>
               </td>
               <td>{data?.email}</td>
               <th>
               </th>
               <th>
                    {data?.role}
               </th>
             </tr>
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
