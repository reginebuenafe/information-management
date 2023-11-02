import React from "react";
import { Link } from "react-router-dom";

function UserHeader({ user }) {
  return (
    <Link to="/profile" className="flex w-1/3 m-auto h-full">
      <img
        src={(user.profilePicture == null) ? `https://api.dicebear.com/7.x/fun-emoji/svg?seed=${user.userName}` : `http://localhost:5000/${user.profilePicture}`}
        alt="Profile Picture"
        className="h-[70%] w-[100%] rounded-lg m-auto border-2 border-white hover:border-blue-300 hover:scale-105 transition-all"
      />
    </Link>
  );
}

export default UserHeader;
