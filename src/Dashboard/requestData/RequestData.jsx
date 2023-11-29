import useProvider from "../../hooks/useProvider";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const RequestData = () => {
  const { user } = useProvider();
  const axios = useAxiosSecure();
  const [requestData, setRequestData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`/userRequest/${user?.email}`).then((res) => {
      console.log(res?.data?.status);
      setRequestData(res?.data?.user);
      setLoading(false);
    });
  }, [axios, user]);

  console.log(user);
  if (loading === "true") {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  console.log(requestData);
  return (
    <div>
      {requestData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>title</th>
                <th>experience</th>
                <th>role</th>
              </tr>
            </thead>

            {requestData?.map((data) => (
              <tbody key={data._id}>
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={data?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{data?.name}</div>
                        <div className="text-sm opacity-50">
                          {data?.category}s
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{data?.title}</td>
                  <td>{data?.laval}</td>
                  <th>
                    {data?.status ? (
                      <button className="btn text-red-600 btn-sm">
                        reject
                      </button>
                    ) : (
                      <button className="btn btn-error btn-outline btn-xs">
                        my request
                      </button>
                    )}
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      ) : (
        <div className="text-center mt-40">
          <h1 className="text-5xl font-bold mb-4">
            You have not requested any teachers
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            voluptas quas voluptatem repudiandae eligendi, minus ducimus
            possimus ipsa nemo ipsam blanditiis aspernatur fugit dolorum
            quisquam non harum excepturi. Earum, ut?
          </p>
          <Link to="/teachOn">
            <button className="btn btn-primary mt-5">the request</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default RequestData;
