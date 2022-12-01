import React from "react";
import Switch from "react-switch";

const FurnishedOption = (props) => {
  const { isFurnished, setIsFurnished } = props;

  const handleOnChange = (checked) => {
    setIsFurnished(checked);
  };
  return (
    <div className="mt-[8px] mx-auto w-[70%] flex flex-row justify-between">
      <div className="furnished-text">Furnished</div>
      <div className="furnished-toggle">
        <Switch onChange={handleOnChange} checked={isFurnished} />
      </div>
    </div>
  );
};

export default FurnishedOption;
