import { useState } from "react";
import ZonaOptions from "../../../assets/data/ZonaOptions.json";
import Select from "react-select";

const Zona = (props) => {
  const { formValue, setFormValue } = props;
  const [isFocused, setIsFocused] = useState(false);

  const handleOnChange = (e) => {
    let updatedValue = {};
    updatedValue = { zona: e };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };
  return (
    <div>
      <label
        className={
          isFocused
            ? "absolute text-xs px-1 text-primary4 bg-white translate-x-3 -translate-y-2 z-[90]"
            : "absolute text-xs px-1 text-[grey] bg-white translate-x-3 -translate-y-2 z-[90]"
        }
      >
        Zona Interaksi *
      </label>
      <Select
        className="z-[89]"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        options={ZonaOptions}
        onChange={handleOnChange}
        placeholder="Pilih salah satu..."
        isClearable={true}
        value={formValue.zona}
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

export default Zona;
