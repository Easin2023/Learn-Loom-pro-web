import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routs/Routes.jsx";
import Provider from "./provider/Provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <div className="max-w-7xl mx-auto font-font-playpen">
        <RouterProvider router={router} />
      </div>
    </Provider>
  </React.StrictMode>
);
