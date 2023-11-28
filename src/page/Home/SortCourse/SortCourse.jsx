import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Course_card from "../../../shared/Course_card";
import Title from "../../../shared/Title";
import { Link } from "react-router-dom";

const SortCourse = () => {
  const axios = useAxiosSecure();
  const [sortData, setSortData] = useState([]);
  useEffect(() => {
    axios.get("/sortFewData").then((res) => {
      console.log(res.data.fewClass);
      setSortData(res.data.fewClass);
    });
  }, [axios]);

  return (
    <div className="">
      <Title title={"Our Popular Course"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {sortData.map((data) => (
          <Course_card key={data._id} cardData={data} />
        ))}
      </div>

      <Link to="/allClass" className="flex justify-center my-6">
        <button className="btn btn-outline btn-info">see All Class</button>
      </Link>
    </div>
  );
};

export default SortCourse;
