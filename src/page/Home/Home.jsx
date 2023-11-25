import Course_card from "../../shared/Course_card";
import Review from "../../shared/Review";
import Teacher from "../../shared/Teacher";
import Banner from "./Banner/Banner";
import TotalUser from "./TotalUser/TotalUser";
import Collaborators from "./collaborators/Collaborators";

const Home = () => {
     return (
          <div>
              <Banner/> 
              <Collaborators/>
              <Course_card/>
              <Review/>
              <TotalUser/>
              <Teacher/>
          </div>
     );
};

export default Home;