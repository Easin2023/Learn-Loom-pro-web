import { Helmet } from "react-helmet";
import Review from "../../shared/Review";
import Teacher from "../../shared/Teacher";
import Banner from "./Banner/Banner";
import SortCourse from "./SortCourse/SortCourse";
import TotalUser from "./TotalUser/TotalUser";
import Collaborators from "./collaborators/Collaborators";

const Home = () => {
     return (
          <div>
               <Helmet>
                    <title>LearnLoom | Home</title>
               </Helmet>
              <Banner/> 
              <Collaborators/>
              <SortCourse/>
              <Review/>
              <TotalUser/>
              <Teacher/>
          </div>
     );
};

export default Home;