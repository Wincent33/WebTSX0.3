import React, { useState } from "react";
import Select from "react-select";
import DeveloperOptions from "../../../assets/data/DeveloperOptions.json";

const Developer = (props) => {
  const { formValue, setFormValue } = props;
  const [isFocused, setIsFocused] = useState(false);
  const value =
    formValue.developer === null
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
  return (
    <div>
      <label
        className={
          isFocused
            ? "absolute text-xs px-1 text-primary4 bg-white translate-x-3 -translate-y-2 z-[100]"
            : "absolute text-xs px-1 text-[grey] bg-white translate-x-3 -translate-y-2 z-[100]"
        }
      >
        Nama Developer
      </label>
      <Select
        className="z-[99]"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
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
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Developer;
