import { useContext } from "react";
import { AuthProvider } from "../provider/Provider";

const useProvider = () => {
  const provider = useContext(AuthProvider);
  return provider;
};

export default useProvider;
