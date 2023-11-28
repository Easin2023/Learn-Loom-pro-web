import useProvider from "../../hooks/useProvider";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const RequestData = () => {
  const { user } = useProvider();
  const axios = useAxiosSecure();
  const [requestData, setRequestData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`/userRequest/${user?.email}`).then((res) => {
      console.log(res.data);
      setRequestData(res.data.user);
      setLoading(false);
    });
  }, [axios, user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>title</th>
              <th>experience</th>
              <th>role</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={requestData?.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{requestData?.name}</div>
                    <div className="text-sm opacity-50">
                      {requestData?.category}s
                    </div>
                  </div>
                </div>
              </td>
              <td>{requestData?.title}</td>
              <td>{requestData?.laval}</td>
              <th>
                <button className="btn btn-error btn-outline btn-xs">
                  our request
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestData;
