import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Route } from "react-router-dom";
import Todo from "./Todo";
const PrivateRoute = ({ component: Component, ...rest }, { children }) => {
  const navigate = useNavigate();
  //   const isAuthenticated = (userID) => {
  //     const users = JSON.parse(localStorage.getItem("users"));
  //     console.log(users);
  //     // users.find(eachUser=>eachUser.id)
  //   };
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return isAuthenticated ? <Todo /> : navigate("/");
};

export default PrivateRoute;
