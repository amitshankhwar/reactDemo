import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Parent = ({ children }) => {
  const navigate = useNavigate();
  console.log(children);

  const isAuth = true;

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Parent;
