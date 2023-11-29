import Title from "../../shared/Title";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import Course_card from "../../shared/Course_card";

const HomeAllClass = () => {
     const [allClassData, setAllClassData] = useState([]);
     const [loading, setLoading] = useState(false)
     const axios = useAxiosSecure();
     useEffect(() => {
          setLoading(true)
          axios.get('/getAllClass').then(res => {
               console.log(res.data.sites)
               setAllClassData(res.data.sites)
               setLoading(false)
          })
     }, [axios])
     
     if(loading === true){
          return (
               <div className="flex justify-center items-center h-screen">
                    <span className="loading loading-bars loading-lg"></span>
               </div>
          )
     }

     return (
          <div>
               <Title title={"our All class"}/>
               <div className="grid mt-10 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {
                         allClassData?.map(data => <Course_card key={data._id} cardData={data}/>)
                    }
               </div>
          </div>
     );
};

export default HomeAllClass;