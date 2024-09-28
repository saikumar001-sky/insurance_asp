import React from "react";
import { Route,Routes } from "react-router-dom";
import LoginPage from "../components/Authentication/LoginPage";
import RegisterPage from "../components/Authentication/RegisterPage";
import UserProfile from "../components/Profile/UserProfile"
const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    );
  };
  
  export default AppRoutes;