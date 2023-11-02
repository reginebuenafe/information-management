import React from "react";

function ProfilePicture({ profilePicture, user }) {
  return (
    <div className="flex justify-end items-end w-2/3">
      <img
        src={
          profilePicture == null
            ? `https://api.dicebear.com/7.x/fun-emoji/svg?seed=${user.userName}`
            : `http://localhost:5000/${profilePicture}`
        }
        alt="Profile Picture"
        className="h-20 w-20 lg:h-40 lg:w-40 rounded-lg border-2 shadow-md shadow-white border-white p-2 m-auto lg:mr-3"
      />
    </div>
  );
}

export default ProfilePicture;
