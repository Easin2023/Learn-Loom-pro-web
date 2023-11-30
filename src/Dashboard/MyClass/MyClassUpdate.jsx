import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Title from "../../shared/Title";
import {useParams} from 'react-router-dom';

const MyClassUpdate = () => {

     const axios = useAxiosSecure();
     const params = useParams();
     console.log(params.id)

     const {data} = useQuery({
      queryKey: ["classData"],
      queryFn: async () => {
        const find = await axios.get(`/getClassOne/${params?.id}`)
        return find?.data
      }
     })


  return (
    <div>
     <Title title={"my class update"}/>
      <div className="card w-[700px] shrink-0 shadow-2xl bg-base-100">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">update Class Title</span>
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
              update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyClassUpdate;
