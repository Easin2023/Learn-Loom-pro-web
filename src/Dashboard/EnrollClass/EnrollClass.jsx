import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useProvider from "../../hooks/useProvider";

const EnrollClass = () => {
     const {user:users} = useProvider();
     const axios = useAxiosSecure();
     const {data, isLoading} = useQuery({
          queryKey: [users],
          queryFn: async () => {
               const FindData = await axios.get(`/getPaymentData/${users?.email}`)
               return FindData?.data
          }
     })

     console.log(data)

     return (
          <div>
              
          </div>
     );
};

export default EnrollClass;