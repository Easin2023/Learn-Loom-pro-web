import {useNavigate} from 'react-router-dom';
import Swal from "sweetalert2";
import { imageUpload } from "../../hooks/imageUpload";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Title from "../../shared/Title";
import useProvider from "../../hooks/useProvider";

const AddClasses = () => {
  const { user } = useProvider(); 
  const axiosUse = useAxiosSecure();
  const navigate = useNavigate();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const image = form.image.files[0];
    const description = form.description.value;
    const imageUrl = await imageUpload(image);
    const img = imageUrl?.data?.display_url
    const status = "pending"
    const addedInfo = {
      title,
      name,
      email,
      price,
      description,
      img,
      status
    };
    console.log(addedInfo)
    console.log(img)
    axiosUse.post("/addedClass", addedInfo).then((res) => {
      console.log(res.data.success);
      if(res.data.success){
        Swal.fire({
          title: `success class added`,
          text: "Your login Success",
          icon: "success"
        });
        form.reset();
        return navigate('/dashboard/myClasses')
      }else{
        Swal.fire({
          title: `sorry check the class information`,
          text: "data is not correct",
          icon: "error"
        });
        form.reset();
      }
    });
  };

  return (
    <div>
      <Title title={"Added The Class"} />
      <div className=" mt-12 bg-base-200">
        <div>
          <div className="card w-[700px] shrink-0 shadow-2xl bg-base-100">
            <form onSubmit={HandleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Added Class title"
                  className="input input-bordered bg-red-100"
                  required
                />
              </div>
              <div className="flex gap-3">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    readOnly
                    placeholder="added Name"
                    className="input input-bordered bg-red-100"
                    required
                  />
                </div>
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    readOnly
                    placeholder="added email"
                    className="input input-bordered bg-red-100"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">class Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="$ added class price"
                  className="input input-bordered bg-red-100"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <textarea
                  className="bg-red-100 rounded-lg"
                  name="description"
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">
                  Add class banner
                </label>

                <input
                  type="file"
                  required
                  name="image"
                  accept="image/*"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-sm"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-outline btn-primary">
                  added new class
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClasses;
