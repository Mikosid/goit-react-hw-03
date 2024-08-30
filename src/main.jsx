import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../src/Component/App/App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
