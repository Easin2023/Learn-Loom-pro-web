import Swal from "sweetalert2";
import { imageUpload } from "../../hooks/imageUpload";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useProvider from "../../hooks/useProvider";
import Title from "../../shared/Title";
import { useState } from "react";

const TeacherOnPage = () => {
  const [laval, setLaval] = useState("");
  const { user } = useProvider();
  const axios = useAxiosSecure();

  const handleRadioButton = (e) => {
    e.preventDefault();
    setLaval(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target
    const name = form.name.value;
    const title = form.title.value;
    const email = form.email.value;
    const img = form.image.files[0];
    const category = form.category.value;
    const imageUrl = await imageUpload(img);
    const image = imageUrl?.data?.display_url
    console.log(name, title, email, laval, category, image);
    const info = {
      name, 
      title, 
      email, 
      laval, 
      category,
      image
    }
    axios.post("/teacherRequest", info)
    .then(res => {
      console.log(res.data)
      if(res.data.success){
        Swal.fire({
          title: `welcome ${name}`,
          text: "your teacher request Success",
          icon: "success"
        });
      }else{
        Swal.fire({
          title: `welcome ${name}`,
          text: "Your request not a success find the problem",
          icon: "error"
        });
      }
    })
    .catch(err => {
      console.log(err)
    })

  };
  return (
    <div>
      <Title title={"Apply The teacher role"} />
      <div className="flex justify-center -mt-14 h-screen items-center">
        <div>
          <div className="card w-[700px] shrink-0 shadow-2xl bg-base-100">
            <form onSubmit={handleFormSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Added your name"
                  className="input input-bordered bg-red-100"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Added title"
                  className="input input-bordered bg-red-100"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  readOnly
                  placeholder="added Name"
                  className="input input-bordered bg-red-100"
                  required
                />
              </div>
              <div>
                <div className="form-control w-full max-w-full">
                  <label className="label">
                    <span className="label-text">
                      select the category
                    </span>
                  </label>
                  <select name="category" className="select select-bordered">
                    <option value="web_development">click the selected </option>
                    <option value="web_development">web development</option>
                    <option value="digital_marketin">digital marketin</option>
                    <option value="Python_beginner">Python beginner</option>
                    <option value="Java_beginner">Java beginner</option>
                    <option value="JavaScript_beginner">
                      JavaScript beginner
                    </option>
                    <option value="php_beginner">php beginner</option>
                    <option value="laravel_beginner">laravel beginner</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="label">
                  <span className="label-text">your experience</span>
                </label>
                <div>
                  <label className="flex gap-3 my-4">
                    <input
                      type="radio"
                      name="beginner"
                      value="beginner"
                      checked={laval === "beginner"}
                      onChange={handleRadioButton}
                      className="radio"
                    />
                    <p>beginner</p>
                  </label>
                </div>
                <div>
                  <label className="flex gap-3 my-4">
                    <input
                      type="radio"
                      name="experienced"
                      value="experienced"
                      checked={laval === "experienced"}
                      onChange={handleRadioButton}
                      className="radio"
                    />
                    <p>experienced</p>
                  </label>
                </div>
                <div>
                  <label className="flex gap-3 my-4">
                    <input
                      type="radio"
                      name="some_idea"
                      value="some_idea"
                      checked={laval === "some_idea"}
                      onChange={handleRadioButton}
                      className="radio"
                    />
                    <p>some idea</p>
                  </label>
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">
                  add image your image
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
                  apply the teacher
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherOnPage;
