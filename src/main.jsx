import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Correct: case-sensitive (App.jsx)

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
