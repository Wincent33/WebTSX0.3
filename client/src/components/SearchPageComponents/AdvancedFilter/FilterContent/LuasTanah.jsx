import React from "react";

export default function LuasTanah(props) {
  const { minVal, setMinVal, maxVal, setMaxVal } = props;

  const minOnChange = (event) => {
    setMinVal(event.target.value);
  };

  const maxOnChange = (event) => {
    setMaxVal(event.target.value);
  };

  return (
    // Luas Tanah
    <div className="flex flex-row w-[75%] mx-auto justify-between items-center">
      <div className="ml-7">Luas tanah</div>
      {/* Luas Tanah Min Max */}
      <div className="flex justify-center items-center mr-12">
        <input
          className="h-5 pl-2 w-24"
          type="number"
          placeholder="Min."
          value={minVal}
          onChange={minOnChange}
        />
        <h2>-</h2>
        <input
          className="h-5 pl-2 w-24"
          type="number"
          placeholder="Max."
          value={maxVal}
          onChange={maxOnChange}
        />
      </div>
    </div>
  );
}
