import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Components
import NavigationBar from "./components/navigation/NavigationBar.jsx";
import Index from "./components/index/Index.jsx";

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";

// CSS
import "./styles/global/global.css";
import "./styles/global/animations.css";
import "./styles/fonts/fonts.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavigationBar />
    <Index />
    <App />
  </React.StrictMode>
);
