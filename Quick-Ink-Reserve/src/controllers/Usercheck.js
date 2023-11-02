import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserCheck(loginStatus, user, setUser, setLoginStatus) {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      loginStatus === false ||
      loginStatus === undefined ||
      loginStatus === ""
    ) {
      navigate("/");
    }

    if (loginStatus === true && user.userRole == "ADMIN") {
      navigate("/admin", {
        user: user,
        loginStatus: loginStatus,
        setUser: setUser,
        setLoginStatus: setLoginStatus,
      });
    } else if (
      (loginStatus === true && user.userRole == "MEMBER") ||
      user.userRole == "ADMIN"
    ) {
      navigate("/", {
        user: user,
        loginStatus: loginStatus,
        setUser: setUser,
        setLoginStatus: setLoginStatus,
      });
    }
  }, []);
}

export default UserCheck;
