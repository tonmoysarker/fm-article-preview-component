import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "font-awesome/css/font-awesome.min.css";
import "./reset.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
