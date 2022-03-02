import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../Redux/actions/authenticationActions";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";
import "../styles/Login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import validationLogin from "./validationLogin";
import { v4 as uuidv4 } from "uuid";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    token: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const users = JSON.parse(localStorage.getItem("users"));

  useEffect(() => {
    setLsToken();
  }, []);

  //---------------Events---------

  const setLsToken = () => {
    localStorage.setItem("onlineUser", JSON.stringify({}));
  };

  const handleInput = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidate = validationLogin(values);
    if (isValidate.isChecked) {
      const user = users
        ? users.find((user) => user.email === values.email)
        : "";
      if (user && user.password === values.password) {
        const token = uuidv4();
        const userId = user.userId;
        localStorage.setItem("onlineUser", JSON.stringify({ token, userId }));
        dispatch(setToken(token));
        navigate("/todo");
      } else {
        alert("User is not found.Please sign up!");
        navigate("/signup");
      }
    } else {
      setErrors(validationLogin);
    }
  };

  return (
    <div>
      <Form>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            name="email"
            value={values.email}
            onChange={handleInput}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={values.password}
            onChange={handleInput}
          />
          {errors.email && <p className="error">{errors.password}</p>}
        </Form.Group>
        <Button size="lg" type="submit" className="mt-3" onClick={handleSubmit}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
