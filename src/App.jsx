import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, {useState} from "react";
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

//firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyA5KuVKg7vp6OuIBMYSgbsxWizMZhqKNmw",
    authDomain: "orbit-90a9a.firebaseapp.com",
    projectId: "orbit-90a9a",
    storageBucket: "orbit-90a9a.appspot.com",
    messagingSenderId: "355762773896",
    appId: "1:355762773896:web:bd8c63fa6d57499427643d",
    measurementId: "G-PVEBSYX62E"
  }


const firebase = initializeApp(firebaseConfig);

const Protected = ({ isLoggedIn, children }) => {
  console.log(isLoggedIn)
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default Protected;

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(() => {
    // Check if the user is already logged in from local storage
    const storedLoggedIn = localStorage.getItem('isLoggedIn');
    return storedLoggedIn ? JSON.parse(storedLoggedIn) : null;
  });

  const logIn = () => {
    setisLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
  };

  const logOut = () => {
    setisLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Routing />}>
          <Route index element={<Index />} />
          <Route path="login" element={<Login logIn={logIn}/>} />
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