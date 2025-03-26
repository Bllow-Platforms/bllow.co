import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Homepage from "./pages/homepage";

import { createBrowserRouter, RouterProvider } from "react-router";
import ScreenLoader from "./components/modules/screen-loader";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Homepage,
    loader: ScreenLoader,
  },
]);

{
  /* <StrictMode> */
}
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
// </StrictMode>
