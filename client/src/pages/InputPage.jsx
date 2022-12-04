import React from "react";
import MovingBackground from "../components/Common/MovingBackground";
import NavBar from "../components/Common/NavBar/NavBar";
import AuthLoggedOut from "../components/Common/AuthLoggedOut";
import InputForm from "../components/InputPageComponents";

const InputPage = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <MovingBackground />
      <div className="flex justify-between items-center max-w-[1200px] mx-auto w-full">
        <img className="w-[100px] h-[100px] z-2" src="" alt="logo" />
        <NavBar />
        <AuthLoggedOut className="right-0" />
      </div>
      <div className="bg-white">
        <InputForm />
      </div>
    </div>
  );
};

export default InputPage;
