import React from "react";
import Switch from "react-switch";

const YardOption = (props) => {
  const { isYard, setIsYard } = props;

  const handleChange = (checked) => {
    setIsYard(checked);
  };
  return (
    <div className="flex flex-row w-[75%] justify-between mx-auto">
      <div className="yard-text">Yard?</div>
      <div className="yard-toggle">
        <Switch onChange={handleChange} checked={isYard} />
      </div>
    </div>
  );
};
export default YardOption;
