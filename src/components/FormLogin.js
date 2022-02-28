import React, { useState } from "react";
import Todo from "./Todo";
import Login from "./Login";
const FormLogin = () => {
  const [isLogin, setIslogin] = useState(false);
  const submitLogin = () => {
    setIslogin(true);
  };
  return <div>{isLogin ? <Todo /> : <Login submitLogin={submitLogin} />}</div>;
};

export default FormLogin;
