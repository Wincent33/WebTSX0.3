import { useState } from "react";
import Select from "react-select";
import FasilitasOptions from "../../../assets/data/FasilitasOptions.json";
const FasilitasSekitar = (props) => {
  const { formValue, setFormValue } = props;
  const [isFocused, setIsFocused] = useState(false);

  const handleOnChange = (e) => {
    let updatedValue = {};
    updatedValue = { fasilitasSekitar: e.value };
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
        Fasilitas Sekitar*
      </label>
      <Select
        className="z-[89]"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        options={FasilitasOptions}
        isMulti={true}
        onChange={handleOnChange}
        value={formValue.fasilitasSekitar}
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

export default FasilitasSekitar;
