import { useSelector } from "react-redux";

const Auth = () => {
  const token = useSelector((state) => state.authentication.token);
  const jwt = JSON.parse(localStorage.getItem("onlineUser"));

  if (jwt && token === jwt.token) {
    return jwt.userId;
  }
};

export default Auth;
