import React from "react";
import MovingBackground from "../components/Common/MovingBackground";
import NavBar from "../components/Common/NavBar/NavBar";
import AuthLoggedOut from "../components/Common/AuthLoggedOut";
import KPRHero from "../components/KPRPageComponents/KPRHero";
import SurveyKPR from "../components/KPRPageComponents/SurveyKPR";
const KPRPage = () => {
  return (
    <div className="flex flex-col">
      <div>
        <MovingBackground />
        <div className="flex justify-between items-center px-[100px] max-w-[2000px]">
          <img className="w-[200px] h-[100px] z-2" src="" alt="logo" />
          <NavBar />
          <AuthLoggedOut className="ml-30px" />
        </div>
        <KPRHero />
      </div>
      <div className="kpr2">
        <SurveyKPR />
      </div>
    </div>
  );
};

export default KPRPage;
