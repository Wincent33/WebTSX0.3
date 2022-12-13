import React, { useState } from "react";
import Select from "react-select";
const Orientasi = (props) => {
  const { formValue, setFormValue } = props;
  const [isFocused, setIsFocused] = useState(false);
  const OrientasiOption = [
    { value: "E", label: "Timur" },
    { value: "SE", label: "Tenggara" },
    { value: "S", label: "Selatan" },
    { value: "SW", label: "Barat Daya" },
    { value: "W", label: "Barat" },
    { value: "NW", label: "Barat Laut" },
    { value: "N", label: "Utara" },
    { value: "NE", label: "Timur Laut" },
  ];
  const handleOnChange = (e) => {
    let updatedValue = {};
    updatedValue = { orientasi: e.value };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };
  return (
    <>
      <label
        className={
          isFocused
            ? "absolute text-xs px-1 text-primary4 bg-white translate-x-3 -translate-y-2 z-[98]"
            : "absolute text-xs px-1 text-[grey] bg-white translate-x-3 -translate-y-2 z-[98]"
        }
      >
        Orientasi
      </label>
      <Select
        className="z-[97]"
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
        options={OrientasiOption}
        placeholder={"Kosongkan atau Pilih salah satu..."}
        value={formValue.isFurnished}
        onChange={handleOnChange}
      />

    </>
  );
};

export default Orientasi;
