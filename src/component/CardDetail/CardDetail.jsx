import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import CardMenu from "./CardMenu";

const CardDetail = () => {
     const axios = useAxiosSecure();
     const [data, setData] = useState({});
     const [loading, setLoading] = useState(false);
     const params = useParams()
     console.log(params.id)


     useEffect(() => {
          setLoading(true)
          axios.get(`/getClassOne/${params?.id}`)
          .then(res => {
               setData(res.data?.class);
               setLoading(false)
          })
     }, [axios, params.id])

     if(loading){
          return (
               <div className="flex justify-center items-center h-screen">
                    <span className="loading loading-bars loading-lg"></span>
               </div>
          )
     }

     return (
          <div>
               <CardMenu data={data}/>
          </div>
     );
};

export default CardDetail;