import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const TeacherRequest = () => {
  const axios = useAxiosSecure();
  const [allRequest, setAllRequest] = useState([]);
  useEffect(() => {
    axios.get(`/userRequest`).then((res) => {
      console.log(res.data.request);
      setAllRequest(res.data.request);
    });
  }, [axios]);


  const handleCloseRequest = e => {
    console.log(e)
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
          {allRequest.map((data) => (
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
                  <button className="btn mr-2 btn-primary btn-outline btn-xs">
                  except teacher
                  </button>
                  <button onClick={() => handleCloseRequest(data?._id)} className="btn btn-error btn-outline btn-xs">
                    close request
                  </button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default TeacherRequest;
