import { FaUsers } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { TbLockDollar } from "react-icons/tb";
import {Link} from 'react-router-dom';

const Course_card = ({ cardData }) => {
  const { img, totalEnrolment, title, description, price, name, _id } =
    cardData || {};

    const sliceDescription = description.slice(0, 100)

  return (
    <div>
      <a className="group relative block w-96 h-64  sm:h-80 lg:h-96">
        <span className="absolute inset-0 border-2  rounded-2xl border-dashed border-gray-500"></span>

        <div className="relative flex h-full transform  rounded-2xl items-end border-2 border-gray-500 bg-red-100 hover:bg-red-50 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
            <img className="w-full rounded-2xl" src={img} alt="" />
            <h2 className="mt-4 text-xl font-medium sm:text-2xl">{title}</h2>
            <p className="flex gap-2 items-center">
              <FaUsers size={20} />{" "}
              <span className="font-semibold">already enroll: </span>
              <span className="text-orange-500">{totalEnrolment ? totalEnrolment : "no enrollment"}</span>
            </p>
          </div>

          <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
            <h3 className="mt-4 text-xl font-medium sm:text-2xl">{title}</h3>
            <h1 className="flex mt-2 items-center gap-2">
              <GiTeacher size={20} />
              <span className="font-medium">
                Teacher Name: <span>{name}</span>
              </span>
            </h1>
            <p className="flex items-center gap-2">
              <TbLockDollar size={20} />
              <span className="font-semibold">
              price:n$<span className="text-orange-600">{price}</span>
              </span>
            </p>
            <p className="mt-4 text-sm sm:text-base">{sliceDescription}</p>

            <Link to={`/allClass/${_id}`}>
              <button className="btn btn-sm font-font-caveat font-bold text-xl mt-3 btn-outline btn-error ">
                <span className="hover:text-white">Enroll now</span>
              </button>
            </Link>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Course_card;
