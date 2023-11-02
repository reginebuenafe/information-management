import React, { useEffect } from "react";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import AdminHome from "./admin/AdminHome";
import MemberHome from "./member/MemberHome";

function Home({ loginStatus, user, setLoginStatus, setUser }) {
  const nav = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/");
        if (response.data.loggedIn === true) {
          setUser(response.data.user);
          setLoginStatus(response.data.loggedIn);
        } else {
          nav("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MemberHome
            loginStatus={loginStatus}
            user={user}
            setLoginStatus={setLoginStatus}
            setUser={setUser}
            nav={nav}
          />
        }
      />
      <Route
        path="/admin/*"
        element={
          <AdminHome
            loginStatus={loginStatus}
            user={user}
            setLoginStatus={setLoginStatus}
            setUser={setUser}
            nav={nav}
          />
        }
      />
    </Routes>
  );
}

export default Home;
