import React from "react";
import { EditListComponent } from "../../homeNavbarComponents/ListComponent";

function EditNavbar({ handleLogout, Icon, name }) {
  return (
    <nav className="h-2/3 w-full flex flex-col m-auto justify-center items-center lg:items-end gap-5">
      <EditListComponent name={name} />
      <button
        onClick={handleLogout}
        className="flex justify-center items-center gap-2 transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-100 hover:bg-red-800 duration-300 w-2/3"
      >
        {Icon}
        Logout
      </button>
    </nav>
  );
}

export default EditNavbar;
