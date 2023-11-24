import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider } from "react-router-dom";
import router from "./Routs/Routes.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-7xl mx-auto font-font-playpen">
      {/* <NextUIProvider> */}
      <RouterProvider router={router} />
      {/* </NextUIProvider> */}
    </div>
  </React.StrictMode>
);
