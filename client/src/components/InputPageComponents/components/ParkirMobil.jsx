import React from "react";
import { BiCar } from "react-icons/bi";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";
const ParkirMobil = (props) => {
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
  return (
    <div className="h-[50px]">
      <div className="flex justify-center items-center">
        <button
          className="flex bg-primary5 text-white text-3xl w-8 h-8 justify-center items-center rounded-full border-[2px] border-primary5 border-solid hover:bg-primary4"
          onClick={handleParkirMinus}
        >
          -
        </button>
        <div className="flex flex-row juscen items-center ml-2">
          <BiCar
            id="parkir"
            size={"40px"}
            color={"black"}
          />
          <Tooltip anchorId="parkir" place="bottom" content="Hello Nigger"/>
          <h2 className="whitespace-nowrap break-keep"> {formValue.parkir}</h2>
        </div>
        <button
          className="flex bg-primary5 text-white text-3xl w-8 h-8 justify-center items-center rounded-full border-[2px] border-primary5 border-solid hover:bg-primary4"
          onClick={handleParkirPlus}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ParkirMobil;
