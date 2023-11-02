import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";
import "../../App.css";

import UserWrapper from "../admin/profileComponents/userComponents/UserWrapper";
import AdminNavbar from "./UI/adminNavbarComponents/AdminNavbar";
import Dashboard from "./adminComponents/dashboard/Dashboard";
import Materials from "./adminComponents/materials/Materials";
import Services from "./adminComponents/services/Services"; 

function AdminHome({ loginStatus, user, setLoginStatus, setUser, nav }) {
  axios.defaults.withCredentials = true;

  if(loginStatus === false) {
    nav('/');
  }

  if (user.userRole === 'MEMBER') {
    nav("/", {
      loginStatus: loginStatus,
      user: user,
      setLoginStatus: setLoginStatus,
      setUser: setUser,
    });
  }

  useEffect(() => {
    axios.get("http://localhost:5000/").then((response) => {
      if (response.data.loggedIn == true) {
        setUser(response.data.user);
        setLoginStatus(response.data.loggedIn);
      }
    });
  }, []);

  function CheckPath() {
    const location = useLocation();

    switch (location.pathname) {
      case "/admin":
        return "Dashboard";
      case "/admin/materials":
        return "Materials";
      case "/admin/services":
        return "Services";
      default:
        return "Dashboard";
    }
  }

  return (
    <div className="flex h-full w-full bg-[#000122] overflow-x-hidden">
      <AdminNavbar
        loginStatus={loginStatus}
        user={user}
        setLoginStatus={setLoginStatus}
        setUser={setUser}
        defaultActive={CheckPath()}
      />
      <main className="h-full w-5/6">
        <div className="h-[10%] w-full">
          {loginStatus != false && user.userRole === "ADMIN" && (
            <UserWrapper user={user} />
          )}
        </div>
        <Routes>
          <Route
            path="/"
            element={<Dashboard loginStatus={loginStatus} user={user} setLoginStatus={setLoginStatus} setUser={setUser}/>}
          />
          <Route
            path="/materials/*"
            element={<Materials loginStatus={loginStatus} />}
          />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
    </div>
  );
}

export default AdminHome;
