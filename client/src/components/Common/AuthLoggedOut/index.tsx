import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import LoginDaftarPopUp from "./LoginSignUpPopUp";
// import "./style.scss";

function AuthLoggedOut() {
  const [trigger, setTrigger] = useState(false);
  return (
    <>
      <div
        className="flex border-[1px] border-solid rounded-[20px] duration-300 py-[20px] px-[10px] items-center text-white max-w-fit h-[30px] hover:bg-primary4 hover:scale-110 hover:shadow-[10px_17px_21px_-2px_rgba(0,0,0,0.67)] hover:cursor-pointer"
        onClick={() => setTrigger(true)}
      >
        <HiOutlineUserCircle size={"30px"} />
        <label className="cursor-pointer ">Daftar/Masuk</label>
      </div>
      <LoginDaftarPopUp trigger={trigger} setTrigger={setTrigger} />
    </>
  );
}

export default AuthLoggedOut;
