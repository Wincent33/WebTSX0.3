import React, { useState } from "react";
import Select from "react-select";
import JenisPropertiOptions from "../../../assets/data/JenisPropertiOption.json";

const JenisProperti = (props) => {
  const { formValue, setFormValue } = props;
  const [isFocused, setIsFocused] = useState(false);

  const handleOnChange = (e) => {
    let updatedValue = {};
    updatedValue = { jenisProperti: e.value };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
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
    <div className="jenis-properti">
      <label
        className={
          isFocused
            ? "absolute text-xs px-1 text-primary4 bg-white translate-x-3 -translate-y-2 z-[2]"
            : "absolute text-xs px-1 text-[grey] bg-white translate-x-3 -translate-y-2 z-[2]"
        }
      >
        Jenis Properti *
      </label>
      <Select
        onFocus={handleFocus}
        onBlur={handleBlur}
        options={JenisPropertiOptions}
        value={formValue.jenisProperti.value}
        onChange={handleOnChange}
        placeholder={"Pilih Salah Satu..."}
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
      />
    </div>
  );
};

export default JenisProperti;
