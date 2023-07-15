import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from "react";
import NavigationBar from "./components/navigation/NavigationBar";

// Bootstrap
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// CSS
import "./styles/global/global.css";
import "./styles/global/animations.css";
import "./styles/fonts/fonts.css";

// Pages
import Index from "./pages/index/Index.jsx";
import Login from "./pages/authentication/login/Login.jsx";
import Register from "./pages/authentication/register/Register";
import ChatSpace from "./pages/chatspace/ChatSpace.jsx";
import Routing from "./pages/Routing.jsx";
import Savedposts from "./pages/saved_videos/Savedposts";
import { useAuth } from "./Global";
import Homepage from "./pages/homepage/Homepage";
import Explore from "./pages/homepage/components/Explore";
import Notifications from "./pages/homepage/components/Notifications";
import Profile from "./pages/homepage/components/Profile";

const Protected = ({ isLoggedIn, children }) => {
  console.log(isLoggedIn)
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default Protected;

function App() {
  const { isLoggedIn, logIn, logOut } = useAuth();


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Routing />}>
          <Route index element={<Index />} />
          <Route path="login" element={<Login logIn={logIn} />} />
          {/* Protected Routes */}
          <Route
            path="homepage"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Homepage />
              </Protected>
            }
          />
          <Route
            path="explore"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Explore />
              </Protected>
            }
          />
          <Route
            path="notifications"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Notifications />
              </Protected>
            }
          />
          <Route
            path="profile"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Profile />
              </Protected>
            }
          />
          <Route
            path="ChatSpace"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <ChatSpace />
              </Protected>
            }
          />
          <Route
            path="savedvideos"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Savedposts />
              </Protected>
            }
          />
          <Route path="signup" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavigationBar />
    <App />
  </React.StrictMode>
);