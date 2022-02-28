const validationLogin = (values) => {
  let errors = { isChecked: true };
  if (!values.email) {
    errors.email = "Email is required";
    errors.isChecked = false;
  }
  if (!values.password) {
    errors.password = "Password is required";
    errors.isChecked = false;
  }

  return errors;
};

export default validationLogin;
