import { useState } from "react";
import Select from "react-select";

const Furnished = (props) => {
  const { formValue, setFormValue } = props;
  const [isFocused, setIsFocused] = useState(false);

  const FurnishedOption = [
    { value: true, label: "Furnished" },
    { value: false, label: "Not Furnished" },
  ];

  const handleOnChange = (e) => {
    let updatedValue = {};
    updatedValue = { isFurnished: e };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };
  return (
    <>
      <label
        className={
          isFocused
            ? "absolute text-xs px-1 text-primary4 bg-white translate-x-3 -translate-y-2 z-[100]"
            : "absolute text-xs px-1 text-[grey] bg-white translate-x-3 -translate-y-2 z-[100]"
        }
      >
        Interior
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
        options={FurnishedOption}
        placeholder={"Kosongkan atau Pilih salah satu..."}
        value={formValue.isFurnished}
        onChange={handleOnChange}
      />
    </>
  );
};

export default Furnished;
