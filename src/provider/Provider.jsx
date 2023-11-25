import { createContext, useState } from "react";

export const AuthProvider = createContext(null);


const Provider = ({ children }) => {
     const [user, setUser] = useState(null);

     const userInfo = {
          user
     }

  return <AuthProvider.Provider value={userInfo}>{children}</AuthProvider.Provider>;
};

export default Provider;
