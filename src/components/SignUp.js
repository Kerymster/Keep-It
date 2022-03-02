import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/actions/usersActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import validation from "./validation";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "../styles/SignUp.css";

//-------- Data------------

const getLocalData = () => {
  let users = localStorage.getItem("users");

  if (users) {
    return JSON.parse(localStorage.getItem("users"));
  } else {
    return [];
  }
};

const SignUp = () => {
  const users = getLocalData();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: "",
    password: "",
    repassword: "",
    userId: "",
  });

  const [errors, setErrors] = useState({});
  const localData = getLocalData();

  // ---------- Local Storage ----------

  useEffect(() => {
    localStorage.setItem("users", localData ? JSON.stringify(localData) : []);
  }, [localData]);

  //---------------Events---------

  const handleSignUp = (e) => {
    values.userId = uuidv4();
    const isValidate = validation(values);

    if (isValidate.isChecked) {
      // let isUser = false;
      const user = users.find((user) => user.email === values.email);
      // console.log(usersTest);
      // users.forEach((user) =>
      //   user.email == values.email ? (isUser = true) : null
      // )
      if (!user) {
        let users = JSON.parse(localStorage.getItem("users"));
        const usersLocal = users.some((user) => user.email === values.email);
        usersLocal
          ? console.log("true")
          : localStorage.setItem(
              "users",
              JSON.stringify([...localData, values])
            );

        dispatch(addUser(values));
        navigate("/login");
      } else {
        alert("you've already signed up!");
        navigate("/login");
      }
    } else {
      setErrors(isValidate);
    }

    e.preventDefault();
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  //-----------JSX---------------

  return (
    <div>
      <Form onSubmit={handleSignUp}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </Form.Group>
        <Form.Group size="lg" controlId="repassword">
          <Form.Label>Password Again</Form.Label>
          <Form.Control
            type="password"
            name="repassword"
            value={values.repassword}
            onChange={handleChange}
          />
          {errors.repassword && <p className="error">{errors.repassword}</p>}
        </Form.Group>
        <Button size="lg" type="submit" className="mt-3">
          Sign Up!
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
