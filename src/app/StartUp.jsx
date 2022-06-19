import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "redux/authSlice";

const StartUp = () => {
  const users = useSelector((store) => store.user.data);
  const dispatch = useDispatch();

  const shouldLogin = () => {
    let id = localStorage.getItem("userId");
    let user = users.find((item) => item.id === +id);
    if (user) {
      dispatch(login(user));
    }
  };

  useEffect(() => {
    shouldLogin();
    // eslint-disable-next-line
  }, []);

  return <></>;
};

export default StartUp;
