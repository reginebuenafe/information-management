import React from "react";

import UserHeader from "./UserHeader";
import UserDetails from "./UserDetails";

function UserContainer({ user, maxWidth }) {
  return (
    <div
      className={`flex ${maxWidth ? `w-[${maxWidth}]` : "w-[20%]"} border-white gap-3`}
    >
      <UserHeader user={user} />
      <UserDetails user={user} />
    </div>
  );
}

export default UserContainer;
