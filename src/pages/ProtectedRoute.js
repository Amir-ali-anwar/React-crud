import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
//   if (!user) {
    // return <Navigate to="/landing" />;
//   }
  return children;
};

export default ProtectedRoute;
