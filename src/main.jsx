import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./router/Routers";
import InstallContextProvider from "./context/InstallContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InstallContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </InstallContextProvider>
  </StrictMode>,
);
