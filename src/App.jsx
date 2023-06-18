import { createRoot } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// CSS
import "./styles/global/global.css";
import "./styles/global/animations.css";
import "./styles/fonts/fonts.css";

// Pages
import Index from "./pages/index/Index.jsx";
import Login from "./pages/authentication/login/Login.jsx";
import ChatSpace from "./pages/chatspace/ChatSpace.jsx";
import Routing from "./pages/Routing.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Routing />}>
          <Route index element={<Index />} />
          <Route path="login" element={<Login />} />
          <Route path="chatspace" element={<ChatSpace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
