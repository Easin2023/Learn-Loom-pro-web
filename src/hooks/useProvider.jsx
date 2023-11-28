import { useContext } from "react";
import { AuthContext } from "../provider/Provider";

const useProvider = () => {
  const provider = useContext(AuthContext);
  return provider;
};

export default useProvider;
