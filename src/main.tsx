import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Homepage from "./pages/homepage";

{/* <StrictMode> */}
createRoot(document.getElementById("root")!).render(
    <Homepage />
  );
  // </StrictMode>
