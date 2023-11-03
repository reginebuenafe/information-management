import React from "react";
import { useAppContext } from "../../../../controllers/auth/AuthContext";

function Dashboard() {
  const { loginStatus, user } = useAppContext();
  return (
    <h1>Dashboard</h1>
  );
}

export default Dashboard;
