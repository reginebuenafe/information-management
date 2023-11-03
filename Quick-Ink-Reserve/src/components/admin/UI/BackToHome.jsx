import React from "react";
import { AiOutlineArrowLeft } from 'react-icons/ai';

function BackToHome({ color, nav }) {
  return (
    <div className="w-1/4 h-[10%] flex items-center absolute left-5">
      <a
        onClick={() => nav("/", {})}
        className={`${color && color} cursor-pointer text-lg p-3 flex items-center justify-center gap-3 bg-transparent hover:text-black border-none`}
      >
        <AiOutlineArrowLeft /> Back to Home
      </a>
    </div>
  );
}

export default BackToHome;
