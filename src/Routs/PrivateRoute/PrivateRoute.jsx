import { Navigate, useLocation } from "react-router-dom";
import useProvider from "../../hooks/useProvider";

const PrivateRoute = ({children}) => {
     const location = useLocation();
     console.log(location)
     const { user } = useProvider();
     if(user){
          return children;
     }
     return <Navigate to="/login" state={location?.pathname} />
};

export default PrivateRoute;