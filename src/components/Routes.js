import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Login from "./Login";
import SignUp from "./SignUp";
import Todo from "./Todo";
import Auth from "./Auth";

export default function AppRoutes() {
  const [userlogin, setUserlogin] = useState(false);
  const userSet = Auth();
  console.log(userSet);
  useEffect(() => {
    userSet ? setUserlogin(true) : setUserlogin(false);
    console.log(userlogin);
  }, [userSet]);

  return (
    <Routes>
      {userlogin ? (
        <Route exact path="/todo" element={<Todo />} />
      ) : (
        <Route exact path="/" element={<Home />} />
      )}

      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="*" element={<NotFound />} />
    </Routes>
  );
}
