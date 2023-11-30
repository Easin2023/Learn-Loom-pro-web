import { useQuery } from "@tanstack/react-query";
import Title from "../../../shared/Title";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const TotalUser = () => {

  const axios = useAxiosSecure();
  const {data} = useQuery({
    queryKey: ["totalUser"],
    queryFn: async () => {
      const allData = await axios.get('/user')
      return allData?.data
    }
  })

  const {data: data2} = useQuery({
    queryKey: ["totalClass"],
    queryFn: async () => {
      const allData = await axios.get('/getAllClass')
      return allData?.data
    }
  })

  const {data: data3} = useQuery({
    queryKey: ["totalPayment"],
    queryFn: async () => {
      const allData = await axios.get('/allPaymentData')
      return allData?.data
    }
  })

  console.log(data3);


  return (
    <div>
      <Title/>
      <div className="flex justify-end my-40">
        <div className="stats  w-2/3 mx-auto stats-vertical bg-red-100 lg:stats-horizontal shadow">
          <div className="stat">
            <div className="stat-title">Total user</div>
            <div className="stat-value">{data?.user?.length}</div>
            <div className="stat-desc"></div>
          </div>

          <div className="stat">
            <div className="stat-title">Total class</div>
            <div className="stat-value text-blue-700">{data2?.sites?.length}</div>
            <div className="stat-desc"></div>
          </div>

          <div className="stat">
            <div className="stat-title">Total enrollment</div>
            <div className="stat-value">{data3?.payment?.length}</div>
            <div className="stat-desc"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalUser;
