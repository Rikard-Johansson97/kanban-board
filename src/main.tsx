import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./theme/index.scss";
import ProjectProvider from "./context/projectContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProjectProvider>
        <App />
      </ProjectProvider>
    </BrowserRouter>
  </React.StrictMode>
);
