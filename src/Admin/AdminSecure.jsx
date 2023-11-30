import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Navigate } from "react-router-dom";
import useProvider from "../hooks/useProvider";

const AdminSecure = ({children}) => {
     const {user} = useProvider();
     const axios = useAxiosSecure();
     const { data, isLoading } = useQuery({
          queryKey: ["adminCheck"],
          queryFn: async () => {
            const userFind = await axios.get(`/user/${user?.email}`);
            return userFind?.data?.user;
          },
        });
      
        console.log(data);

        if(isLoading){
          return <div className="flex justify-center items-center h-screen">
               <span className="loading loading-bars loading-lg"></span>
          </div>
        }

        if(data?.role === "admin"){
          return children
        }
        return <Navigate to="/login"/>
     
     

};

export default AdminSecure;