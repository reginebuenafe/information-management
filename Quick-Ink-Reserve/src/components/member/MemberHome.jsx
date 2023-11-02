import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import LogoutButton from "../admin/UI/LogoutButton";
import UserWrapper from "../admin/profileComponents/userComponents/UserWrapper";
import LandingPage from "./LandingPage";

function MemberHome({ loginStatus, user, setLoginStatus, setUser, nav }) {
  axios.defaults.withCredentials = true;

  useEffect(() => {
    if (user.userRole == "ADMIN" || user.userRole == "MEMBER") {
      nav("/", {
        loginStatus: loginStatus,
        user: user,
        setLoginStatus: setLoginStatus,
        setUser: setUser,
      });
    }
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/logout")
      .then((response) => {
        if (response.status === 200) {
          setUser("");
          setLoginStatus(false);
          nav("/");
        } else {
          console.error("Logout error:", response);
        }
      })
      .catch((error) => {
        console.log("Logout error:", error);
      });
  };

  return (
    <div className="h-full w-full overflow-x-hidden scroll-smooth">
      <LandingPage 
        user={user}
        loginStatus={loginStatus}
        setLoginStatus={setLoginStatus}
        setUser={setUser}
        handleLogout={handleLogout}
      />
    </div>
  );
}

export default MemberHome;
