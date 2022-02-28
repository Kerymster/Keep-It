const validation = (values) => {
  let errors = { isChecked: true };
  if (!values.email) {
    errors.email = "Email is required";
    errors.isChecked = false;
  } else if (!/\S+@\S.\S+/.test(values.email)) {
    errors.email = "Email is invalid.";
    errors.isChecked = false;
  }
  if (!values.password) {
    errors.password = "Password is required";
    errors.isChecked = false;
  } else if (values.password.length < 5) {
    console.log(values.password);
    errors.password = "Password must have more than 5 characters";
    errors.isChecked = false;
  }
  if (!values.repassword) {
    errors.repassword = "Please write your password again";
    errors.isChecked = false;
  } else if (values.repassword !== values.password) {
    errors.repassword = "Passwords do not match.";
    errors.isChecked = false;
  }

  return errors;
};

export default validation;
