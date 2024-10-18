import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Toaster
      position="top-center"
      gutter={12}
      containerStyle={{ margin: "8px" }}
      toastOptions={{
        success: {
          duration: 1000,
          style: { backgroundColor: "#dcfce7" },
        },
        error: {
          duration: 3000,
          style: { backgroundColor: "#ff8787" },
        },

        style: {
          color: "#000",
        },
      }}
    />
  </StrictMode>
);
