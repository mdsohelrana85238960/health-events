import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from "./component/router/Router";
import AuthProviders from "./component/provider/AuthProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);