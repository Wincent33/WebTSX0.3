import React from "react";
import FinanceSVG from "../../assets/svg/finance.svg";
// const FinanceSVG = require("../../assets/svg/finance.svg");

const KPRHero = () => {
  return (
    <div className="mt-[80px] z-10 flex justify-center gap-[80px]">
      <div>
        <h1 className="text-white text-6xl">Simulasi KPR</h1>
        <p className="text-white text-xl">
          Kalkulasikan kemampuanmu untuk mengajukan pengkreditan
          <br /> rumah dan cari program KPR yang tepat untuk anda.
        </p>
      </div>
      <img className="w-[450px]" src={FinanceSVG} alt="?" />
    </div>
  );
};

export default KPRHero;
