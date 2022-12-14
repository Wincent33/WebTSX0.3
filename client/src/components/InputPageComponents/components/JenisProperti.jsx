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

  return (
    <div>
      <label
        className={
          isFocused
            ? "absolute text-xs px-1 text-primary4 bg-white translate-x-3 -translate-y-2 z-[92]"
            : "absolute text-xs px-1 text-[grey] bg-white translate-x-3 -translate-y-2 z-[92]"
        }
      >
        Jenis Properti *
      </label>
      <Select
        className="z-[91]"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
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
              borderColor: state.isFocused ? "" : "black",
            },
          }),
        }}
      />
    </div>
  );
};

export default JenisProperti;
