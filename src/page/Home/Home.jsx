import Course_card from "../../shared/Course_card";
import Review from "../../shared/Review";
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
          </div>
     );
};

export default Home;