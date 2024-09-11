import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="card-container">
      <App name="Free" price="0" />
      <App name="Plus" price="9" />
      <App name="Pro" price="49" />
    </div>
  </StrictMode>
);
