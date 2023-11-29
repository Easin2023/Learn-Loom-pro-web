import { useQuery } from "@tanstack/react-query";
import Title from "../../shared/Title";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllClasses = () => {
  const [allClassData, setAllClassData] = useState([]);
  const [loading, setLoading] = useState(false);
  const axios = useAxiosSecure();
  useEffect(() => {
    setLoading(true);
    axios.get("/getAllClass").then((res) => {
      console.log(res.data.sites);
      setAllClassData(res.data.sites);
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
            {
               allClassData.map(data => (
                    <tbody key={data._id}>
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={data?.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{data?.name}</div>
                      <div className="text-sm opacity-50">
                        {data?.category}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{data?.title}</td>
                <td>
                    <button className="btn btn-sm btn-primary">approved</button>
                </td>
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

export default AllClasses;
