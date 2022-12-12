import React from "react";
import { BiCar, BiBed, BiBath } from "react-icons/bi";
import { ImStack } from "react-icons/im";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
const JumlahDetail = (props) => {
  const { formValue, setFormValue } = props;
  const handleParkirMinus = (e) => {
    e.preventDefault();
    if (formValue.parkir > 0) {
      let updatedValue = {};
      updatedValue = { parkir: formValue.parkir - 1 };
      setFormValue((prev) => ({ ...prev, ...updatedValue }));
    }
  };
  const handleParkirPlus = (e) => {
    e.preventDefault();
    if (formValue.parkir < 5) {
      let updatedValue = {};
      updatedValue = { parkir: formValue.parkir + 1 };
      setFormValue((prev) => ({ ...prev, ...updatedValue }));
    }
  };

  const handleLantaiMinus = (e) => {
    e.preventDefault();
    if (formValue.lantai > 0) {
      let updatedValue = {};
      updatedValue = { lantai: formValue.lantai - 1 };
      setFormValue((prev) => ({ ...prev, ...updatedValue }));
    }
  };
  const handleLantaiPlus = (e) => {
    e.preventDefault();
    if (formValue.lantai < 5) {
      let updatedValue = {};
      updatedValue = { lantai: formValue.lantai + 1 };
      setFormValue((prev) => ({ ...prev, ...updatedValue }));
    }
  };

  const handleKamarMinus = (e) => {
    e.preventDefault();
    if (formValue.kamarTidur > 0) {
      let updatedValue = {};
      updatedValue = { kamarTidur: formValue.kamarTidur - 1 };
      setFormValue((prev) => ({ ...prev, ...updatedValue }));
    }
  };

  const handleKamarPlus = (e) => {
    e.preventDefault();
    if (formValue.kamarTidur < 10) {
      let updatedValue = {};
      updatedValue = { kamarTidur: formValue.kamarTidur + 1 };
      setFormValue((prev) => ({ ...prev, ...updatedValue }));
    }
  };

  const handleWCMinus = (e) => {
    e.preventDefault();
    if (formValue.kamarMandi > 0) {
      let updatedValue = {};
      updatedValue = { kamarMandi: formValue.kamarMandi - 1 };
      setFormValue((prev) => ({ ...prev, ...updatedValue }));
    }
  };

  const handleWCPlus = (e) => {
    e.preventDefault();
    if (formValue.kamarMandi < 10) {
      let updatedValue = {};
      updatedValue = { kamarMandi: formValue.kamarMandi + 1 };
      setFormValue((prev) => ({ ...prev, ...updatedValue }));
    }
  };
  return (
    <div className="h-fit">
      {/* Top */}
      <div className="flex flex-row gap-5">
        {/* Parkiran */}
        <div className="flex justify-between items-center w-48">
          <button
            className="flex bg-primary5 text-white text-3xl w-8 h-8 justify-center items-center rounded-full border-[2px] border-primary5 border-solid hover:bg-primary4"
            onClick={handleParkirMinus}
          >
            -
          </button>
          <div className="flex flex-row items-center justify-around ml-2 w-20">
            <BiCar id="parkir" size={"40px"} color={"black"} />
            <Tooltip
              anchorId="parkir"
              place="bottom"
              content="Jumlah Parkiran Mobil"
            />
            <h2 className="whitespace-nowrap break-keep min-w-[1rem] text-2xl font-bold">
              {formValue.parkir}
            </h2>
          </div>
          <button
            className="flex bg-primary5 text-white text-3xl w-8 h-8 justify-center items-center rounded-full border-[2px] border-primary5 border-solid hover:bg-primary4"
            onClick={handleParkirPlus}
          >
            +
          </button>
        </div>
        {/* Jumlah Lantai */}
        <div className="flex justify-between items-center w-48">
          <button
            className="flex bg-primary5 text-white text-3xl w-8 h-8 justify-center items-center rounded-full border-[2px] border-primary5 border-solid hover:bg-primary4"
            onClick={handleLantaiMinus}
          >
            -
          </button>
          <div className="flex flex-row items-center justify-around ml-2 w-20">
            <ImStack id="lantai" size={"40px"} color={"black"} />
            <Tooltip anchorId="lantai" place="bottom" content="Jumlah Lantai" />
            <h2 className="whitespace-nowrap break-keep min-w-[1rem] text-2xl font-bold">
              {formValue.lantai}
            </h2>
          </div>
          <button
            className="flex bg-primary5 text-white text-3xl w-8 h-8 justify-center items-center rounded-full border-[2px] border-primary5 border-solid hover:bg-primary4"
            onClick={handleLantaiPlus}
          >
            +
          </button>
        </div>
      </div>
      {/* Bottom */}
      <div className="flex flex-row gap-5">
        {/* Jumlah Kamar */}
        <div className="flex justify-between items-center w-48">
          <button
            className="flex bg-primary5 text-white text-3xl w-8 h-8 justify-center items-center rounded-full border-[2px] border-primary5 border-solid hover:bg-primary4"
            onClick={handleKamarMinus}
          >
            -
          </button>
          <div className="flex flex-row items-center justify-around ml-2 w-20">
            <BiBed id="kamar" size={"40px"} color={"black"} />
            <Tooltip
              anchorId="kamar"
              place="top"
              content="Jumlah Kamar Tidur"
            />
            <h2 className="whitespace-nowrap break-keep min-w-20 min-w-[1rem] text-2xl font-bold">
              {formValue.kamarTidur}
            </h2>
          </div>
          <button
            className="flex bg-primary5 text-white text-3xl w-8 h-8 justify-center items-center rounded-full border-[2px] border-primary5 border-solid hover:bg-primary4"
            onClick={handleKamarPlus}
          >
            +
          </button>
        </div>
        {/* Jumlah WC */}
        <div className="flex justify-between items-center w-48">
          <button
            className="flex bg-primary5 text-white text-3xl w-8 h-8 justify-center items-center rounded-full border-[2px] border-primary5 border-solid hover:bg-primary4"
            onClick={handleWCMinus}
          >
            -
          </button>
          <div className="flex flex-row items-center justify-around ml-2 w-20">
            <BiBath id="wc" size={"40px"} color={"black"} />
            <Tooltip anchorId="wc" place="top" content="Jumlah Kamar Mandi" />
            <h2 className="whitespace-nowrap break-keep min-w-20 min-w-[1rem] text-2xl font-bold">
              {formValue.kamarMandi}
            </h2>
          </div>
          <button
            className="flex bg-primary5 text-white text-3xl w-8 h-8 justify-center items-center rounded-full border-[2px] border-primary5 border-solid hover:bg-primary4"
            onClick={handleWCPlus}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default JumlahDetail;
