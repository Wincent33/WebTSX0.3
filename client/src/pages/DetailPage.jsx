import React from "react";
import MovingBackground from "../components/Common/MovingBackground";
import NavBar from "../components/Common/NavBar/NavBar";
import AuthLoggedOut from "../components/Common/AuthLoggedOut";
import Detail1 from "../components/DetailPageComponents/Detail1";
import Detail2 from "../components/DetailPageComponents/Detail2";
import Detail4 from "../components/DetailPageComponents/Detail4";
import Detail5 from "../components/DetailPageComponents/Detail5";
import Detail6 from "../components/DetailPageComponents/Detail6";
function DetailPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <MovingBackground />
      <div className="flex justify-between items-center max-w-[1200px] mx-auto w-full">
        <img className="w-[100px] h-[100px] z-2" src="" alt="logo" />
        <NavBar />
        <AuthLoggedOut className="right-0" />
      </div>
      <Detail1 />
      <Detail2 />
      <Detail4 />
      <Detail5 />
      <Detail6 />
    </div>
  );
}

export default DetailPage;
