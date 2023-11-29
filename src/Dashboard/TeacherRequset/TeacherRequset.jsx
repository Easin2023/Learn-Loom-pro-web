import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const TeacherRequest = () => {
  const axios = useAxiosSecure();
  // useEffect(() => {
  //   axios.get(`/userRequest`).then((res) => {
  //     console.log(res.data.request);
  //     setAllRequest(res.data.request);

  //   });
  // }, [axios]);

  const {data, refetch} = useQuery({
    queryKey: ["userRequest"],
    queryFn: async () => {
      const getData = await axios.get('/userRequest')
      return await getData?.data?.request
    }
  })

  const handleCloseRequest = async e => {
    console.log(e)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, reject request it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const status = {"status": "reject"}
          const response = await axios.patch(`/closeRequest/${e}`, status);
          console.log(response.data);
          if(response.data){
            Swal.fire({
              title: "reject!",
              text: "Your file has been reject.",
              icon: "success"
            })
            refetch();
          }else{
            Swal.fire({
              title: "not a reject!",
              text: "it has been reject.",
              icon: "error"
            });
            refetch()
          }
        } catch (error) {
          console.error("Error updating data:", error.response.data);
        }
      }
    });

  }

  const  handleConform = (e) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, reject request it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.patch(`/user/${e}`);
          console.log(response.data)
          if(response.data){
            Swal.fire({
              title: "approves!",
              text: "Your success has been approves.",
              icon: "success"
            })
          }
        } catch (error) {
          console.error("Error updating data:", error.response.data);
        }
      }
    });
  }

  return (
    <div>
      <div className="overflow-x-auto">
        {
          data?.length > 0 ? <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>title</th>
              <th>experience</th>
              <th>role</th>
            </tr>
          </thead>
          {data?.map((reqData) => (
            <tbody key={reqData._id}>
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={reqData?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{reqData?.name}</div>
                      <div className="text-sm opacity-50">
                        {reqData?.category}s
                      </div>
                    </div>
                  </div>
                </td>
                <td>{reqData?.title}</td>
                <td>{reqData?.laval}</td>
                <th>
                  {
                    reqData?.status === "reject" ? <button disabled="disabled" className="btn btn-sm btn-error "><span className="text-red-600">rejected</span></button> : <div>
                    <button onClick={() => handleConform(reqData?.email)} className="btn mr-2 btn-primary btn-outline btn-xs">
                    except teacher
                    </button> <button onClick={() => handleCloseRequest(reqData?._id)} className="btn btn-error btn-outline btn-xs">
                    close request
                  </button>
                  </div>
                  }
                </th>
              </tr>
            </tbody>
          ))}
        </table>
        :
        <div className="text-center mt-40">
          <h1 className="text-5xl font-bold  mb-4">No teacher request</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque animi, aspernatur debitis maxime eos libero quibusdam praesentium excepturi aperiam quasi consequatur quidem sapiente alias! Ex tenetur aspernatur culpa ipsa quisquam.</p>
        </div>
        }
      </div>
    </div>
  );
};

export default TeacherRequest;
