import Title from "../../../shared/Title";

const TotalUser = () => {
  return (
    <div>
      <Title/>
      <div className="flex justify-end my-40">
        <div className="stats  w-2/3 mx-auto stats-vertical bg-red-100 lg:stats-horizontal shadow">
          <div className="stat">
            <div className="stat-title">Total user</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc"></div>
          </div>

          <div className="stat">
            <div className="stat-title">Total class</div>
            <div className="stat-value text-blue-700">4,200</div>
            <div className="stat-desc"></div>
          </div>

          <div className="stat">
            <div className="stat-title">Total enrollment</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalUser;
