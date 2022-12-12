import { useState } from "react";
import Select from "react-select";
import FasilitasOptions from "../../../assets/data/FasilitasOptions.json";
const Fasilitas = (props) => {
  const { formValue, setFormValue } = props;
  const [isFocused, setIsFocused] = useState(false);

  const handleOnChange = (e) => {
    let updatedValue = {};
    updatedValue = { fasilitas: e.value };
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
        Fasilitas *
      </label>
      <Select
        className="z-[91]"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        options={FasilitasOptions}
        isMulti={true}
        onChange={handleOnChange}
        value={formValue.fasilitas}
        placeholder="Pilih Lebih Dari 1..."
        styles={{
          control: (base, state) => ({
            ...base,
            borderColor: state.isFocused ? "#ee6c4d" : "lightgrey",
            minHeight: "3.5rem",
            // height: "3.5rem",
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

export default Fasilitas;
