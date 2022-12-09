import React from "react";
import { BiCar } from "react-icons/bi";
import Tooltip from "react-tooltip";
const ParkirMobil = (props: any) => {
  const { formValue, setFormValue } = props;
  const handleParkirMinus = (e: any) => {
    e.preventDefault();
    if (formValue.parkir > 0) {
      let updatedValue = {};
      updatedValue = { parkir: formValue.parkir - 1 };
      setFormValue((prev: any) => ({ ...prev, ...updatedValue }));
    }
  };
  const handleParkirPlus = (e: any) => {
    e.preventDefault();
    if (formValue.parkir < 5) {
      let updatedValue = {};
      updatedValue = { parkir: formValue.parkir + 1 };
      setFormValue((prev: any) => ({ ...prev, ...updatedValue }));
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
          <BiCar size={"40px"} color={"black"} />
          <Tooltip />
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
