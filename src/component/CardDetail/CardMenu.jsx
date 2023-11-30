import { FaUsers } from "react-icons/fa";
import { TbLockDollar } from "react-icons/tb";
import Title from "../../shared/Title";
import {Link} from 'react-router-dom';

const CardMenu = ({ data }) => {
  const { _id, img, totalEnrolment, title, description, price, name } = data || {};

  console.log(_id)

  const sliceDescription = description?.slice(0, 150);

  return (
    <div className="grid grid-cols-12">
      <div className="bg-red-100 overflow-y-auto h-screen col-span-8">
        <Title title="Course Details" />
        <div className="ml-14 mt-10">
          <h1 className="text-3xl font-bold ">{title}</h1>
          <p className="mt-8">
            {description}
            {description}
            {description}
            {description}
            {description}
          </p>
          <div>
            <h1 className="text-2xl font-bold mt-10">course teacher</h1>
            <div className="border border-black mx-5 rounded-lg mt-8">
              <div className="flex items-center gap-7 p-9">
                <div>
                  <img
                    className="rounded-full w-[100px] h-[100px]"
                    src="https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png"
                    alt=""
                  />
                </div>
                <div>
                  <ul>
                    <li>{name}</li>
                    <li>MSc (), University of Oxford (UK);</li>
                    <li>BA, MA (), University of Dhaka;</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-bold mt-10">Details about the course</h1>
          <div className="border border-black rounded-lg mx-5 my-14 ">
            <div className="p-8">
              <p>
                Deep dive into building web applications using the Flask
                framework. Understanding RESTful API design principles for
                creating robust backend services. Integration of front-end
                technologies like HTML, CSS, and JavaScript. Deployment
                strategies for hosting Flask applications on platforms like
                Heroku.
              </p>
              <p className="mt-4">
                Deep dive into building web applications using the Flask
                framework. Understanding RESTful API design principles for
                creating robust backend services. Integration of front-end
                technologies like HTML, CSS, and JavaScript. Deployment
                strategies for hosting Flask applications on platforms like
                Heroku.
              </p>
              <p className="mt-4">
                Deep dive into building web applications using the Flask
                framework. Understanding RESTful API design principles for
                creating robust backend services. Integration of front-end
                technologies like HTML, CSS, and JavaScript. Deployment
                strategies for hosting Flask applications on platforms like
                Heroku.
              </p>
              <p className="mt-4">
                Deep dive into building web applications using the Flask
                framework. Understanding RESTful API design principles for
                creating robust backend services. Integration of front-end
                technologies like HTML, CSS, and JavaScript. Deployment
                strategies for hosting Flask applications on platforms like
                Heroku.
              </p>
              <p className="mt-4">
                Deep dive into building web applications using the Flask
                framework. Understanding RESTful API design principles for
                creating robust backend services. Integration of front-end
                technologies like HTML, CSS, and JavaScript. Deployment
                strategies for hosting Flask applications on platforms like
                Heroku.
              </p>
              <p className="mt-4">
                Deep dive into building web applications using the Flask
                framework. Understanding RESTful API design principles for
                creating robust backend services. Integration of front-end
                technologies like HTML, CSS, and JavaScript. Deployment
                strategies for hosting Flask applications on platforms like
                Heroku.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-50 h-screen col-span-4 ">
        <div className="card w-96 bg-base-100 mt-24 ml-7">
          <figure>
            <img src={img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{sliceDescription}</p>
            <div className="card-actions">
              <p className="flex gap-2 items-center">
                <FaUsers size={20} />
                <span className="font-semibold">already enroll: </span>
                <span className="text-orange-500">
                  {totalEnrolment ? totalEnrolment : "no enrollment"}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <TbLockDollar size={20} />
                <span className="font-semibold">
                  price: $<span className="text-orange-600">{price}</span>
                </span>
              </p>
              <Link to={`/payment/${_id}`}>
                <button className="btn btn-primary w-full btn-outline">
                  Buy Now Course
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMenu;
