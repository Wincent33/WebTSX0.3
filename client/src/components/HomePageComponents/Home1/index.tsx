import React, { useState } from "react";
// import "./style.scss";
// import SearchTabs from "../../Common/HomeSearchTab";
// import SearchTabs from "../../Common/HomeSearchTab/indexTest";
import NavBar from "../../Common/NavBar/NavBar";
// import LoginDaftarPopUp from "../../Common/AuthLoggedOut/LoginSignUpPopUp";
import MovingBackground from "../../Common/MovingBackground";
import AuthLoggedOut from "../../Common/AuthLoggedOut";
// import PhoneLogo from "../assets/images/phone_icon.png";

export default function HomeB1() {
  const [trigger, setTrigger] = useState<boolean>(false);
  return (
    <section className="flex flex-col bg-transparent h-[600px] ">
      <div className="absolute w-full h-[600px] -z-1 ">
        <MovingBackground />
      </div>
      <div className="flex flex-row items-center z-10 mx-auto">
        <div className="flex flex-row items-center content-around">
          <img src="" alt="Logo" className="h-[100px] w-[200px]" />
          <NavBar />
          <AuthLoggedOut />
        </div>
        {/* <LoginDaftarPopUp trigger={trigger} setTrigger={setTrigger} /> */}
      </div>
      <div className="flex flex-row justify-between relative">
        <div className="w-[50%]">
          <h1 className="text-white text-[56px] ml-[150px] drop-shadow-[7px_7px_3px_black] ">
            Mencari Rumah Idaman Dengan Praktis
          </h1>
          <div className="m-0">{/* <SearchTabs /> */}</div>
        </div>
        <img
          className="absolute h-[610px] w-[1200px] translate-x-[480px] translate-y-[-50px] m-0 [clip-path:polygon(45%_10%,100%_28%,67%_100%,5%_60%)] "
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
      </div>
    </section>
  );
}
