import React, { useState } from "react";
import Select from "react-select";
import DeveloperOptions from "../../../assets/data/DeveloperOptions.json";

const Developer = (props) => {
  const { formValue, setFormValue } = props;
  const [isFocused, setIsFocused] = useState(false);
  const view =
    formValue.developer === null && formValue.devLogo === null
      ? [0]
      : { label: formValue.developer, value: formValue.devLogo };

  const handleOnChange = (e) => {
    if (e !== null) {
      let updatedValue = {};
      updatedValue = { developer: e.label, devLogo: e.value };
      setFormValue((prev) => ({ ...prev, ...updatedValue }));
    } else {
      let updatedValue = {};
      updatedValue = { developer: null, devLogo: null };
      setFormValue((prev) => ({ ...prev, ...updatedValue }));
    }
  };
  const handleFocus = () => {
    console.log("Entered the Focus");
    setIsFocused(true);
  };
  const handleBlur = () => {
    console.log("Left the Focus");
    setIsFocused(false);
  };
  return (
    <div className="z-30">
      <label
        className={
          isFocused
            ? "absolute text-xs px-1 text-primary4 bg-white translate-x-3 -translate-y-2 z-20"
            : "absolute text-xs px-1 text-[grey] bg-white translate-x-3 -translate-y-2 z-20"
        }
      >
        Nama Developer
      </label>
      <Select
        onFocus={handleFocus}
        onBlur={handleBlur}
        isClearable={true}
        isSearchable={true}
        isMulti={false}
        styles={{
          control: (base, state) => ({
            ...base,
            borderColor: state.isFocused ? "#ee6c4d" : "lightgrey",
            height: "3.5rem",
            boxShadow: state.isFocused ? null : null,
            "&:hover": {
              // Overwrittes the different states of border
              borderColor: state.isFocused ? "" : "black",
            },
          }),
        }}
        options={DeveloperOptions}
        placeholder={"Kosongkan atau Pilih salah satu..."}
        value={view}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Developer;
