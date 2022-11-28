import React from "react";
import BedroomIcon from "../../../../../assets/images/bedroom.png";
import BathroomIcon from "../../../../../assets/images/bathroom.png";


export default function KamarNWCCounter(props) {
  const { kamarCounter, wCCounter, setKamarCounter, setWCCounter } = props;

  const onKamarMinusClick = () => {
    if (kamarCounter > 0) {
      setKamarCounter(kamarCounter - 1);
    } else if (kamarCounter === "5+") {
      setKamarCounter(5);
    }
  };

  const onKamarPlusClick = () => {
    if (kamarCounter < 5) {
      setKamarCounter(kamarCounter + 1);
    } else if (kamarCounter === 5) {
      setKamarCounter("5+");
    }
  };

  const onWCMinusClick = () => {
    if (wCCounter > 0) {
      setWCCounter(wCCounter - 1);
    } else if (wCCounter === "5+") {
      setWCCounter(5);
    }
  };

  const onWCPlusClick = () => {
    if (wCCounter < 5) {
      setWCCounter(wCCounter + 1);
    } else if (wCCounter === 5) {
      setWCCounter("5+");
    }
  };
  return (
    // KamarNWCCounter
    <div className="flex flex-row items-center justify-around">
      {/* Kamar Counter */}
      <div>
        <div className="font-[600]">Jumlah Kamar Tidur:</div>
        {/* Kamar Input */}
        <div className="flex justify-center items-center">
          {/* Button */}
          <button className="flex bg-primary5 text-white text-3xl w-8 h-8 items-center justify-center rounded-[50%] border-[2px] border-primary5 border-solid cursor-pointer hover:bg-primary4" onClick={onKamarMinusClick}>
            -
          </button>
          {/* Jumlah Kamar */}
          <div className="flex flex-row justify-center items-center ml-3">
            <img
              className="w-[40px] h-[40px]"
              width="50px"
              src={BedroomIcon}
              alt="bathroom"
            />
            <h2 className="break-keep p-4 w-10 whitespace-nowrap">x {kamarCounter}</h2>
          </div>
          {/* Button */}
          <button className="flex bg-primary5 text-white text-3xl w-8 h-8 items-center justify-center rounded-[50%] border-[2px] border-primary5 border-solid cursor-pointer hover:bg-primary4" onClick={onKamarPlusClick}>
            +
          </button>
        </div>
      </div>
      {/* Wc Counter  */}
      <div>
        <div className="font-[600]">Jumlah Kamar Mandi:</div>
        <div className="flex justify-center items-center">
          {/* Button */}
          <button className="flex bg-primary5 text-white text-3xl w-8 h-8 items-center justify-center rounded-[50%] border-[2px] border-primary5 border-solid cursor-pointer hover:bg-primary4" onClick={onWCMinusClick}>
            -
          </button>
          {/* Jumlah WC */}
          <div className="flex flex-row justify-center items-center ml-2">
            <img
              className="w-[40px] h-[40px]"
              width="50px"
              src={BathroomIcon}
              alt="bathroom"
            />
            <h2 className="break-keep p-4 w-10 whitespace-nowrap">x {wCCounter}</h2>
          </div>
          {/* Button */}
          <button className="flex bg-primary5 text-white text-3xl w-8 h-8 items-center justify-center rounded-[50%] border-[2px] border-primary5 border-solid cursor-pointer hover:bg-primary4" onClick={onWCPlusClick}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
