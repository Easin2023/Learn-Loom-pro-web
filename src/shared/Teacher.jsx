import { Link } from "react-router-dom";
import Title from "./Title";

const Teacher = () => {
  return (
    <div>
     <Title/>
      <section className="p-4 lg:p-8 dark:bg-gray-800 my-24 dark:text-gray-100">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="https://assets.hellovector.com/product-images/b_4513.jpg"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              <span className="text-xs uppercase dark:text-gray-400">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">
                Become a teacher 
              </h3>
              <p className="my-6 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <Link to="/teachOn">
              <button type="button" className="btn btn-primary btn-outline w-32">
                go new
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teacher;
