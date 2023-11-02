import React from "react";
import axios from "axios";

import { BsFillDoorOpenFill } from "react-icons/bs";
import EditNavbar from "./adminNavbarComponents/editComponents/EditNavbar";
import ProfilePicture from "./adminNavbarComponents/editComponents/ProfilePicture";

function Navbar({
  loginStatus,
  user,
  setLoginStatus,
  setUser,
  profilePicture,
  nav,
  name,
}) {
  const handleLogout = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/logout")
      .then((response) => {
        if (response.status === 200) {
            setUser('');
          setLoginStatus(false);
          nav("/");
        } else {
          console.error("Logout error:", response);
        }
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <>
      <div className="w-1/3 flex flex-col items-center justify-center m-auto mb-[300px]">
        <ProfilePicture profilePicture={profilePicture} user={user} />
        <EditNavbar 
            handleLogout={handleLogout}
            Icon={<BsFillDoorOpenFill />}
            name={name}
        />
      </div>
    </>
  );
}

export default Navbar;
