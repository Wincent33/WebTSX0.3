import { useState } from "react";
import Select from "react-select";
import SertifikatOptions from "../../../assets/data/JenisSertifikatOptions.json";
const JenisSertifikat = (props) => {
  const { formValue, setFormValue } = props;

  const [isFocused, setIsFocused] = useState(false);

  const handleOnChange = (e) => {
    let updatedValue = {};
    updatedValue = { jenisSertifikat: e.value };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };

  return (
    <div className="jenis-sertifikat">
      <label
        className={
          isFocused
            ? "absolute text-xs px-1 text-primary4 bg-white translate-x-3 -translate-y-2 z-[90]"
            : "absolute text-xs px-1 text-[grey] bg-white translate-x-3 -translate-y-2 z-[90]"
        }
      >
        Jenis Sertifikat *
      </label>
      <Select
        className="z-[89]"
        options={SertifikatOptions}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={formValue.jenisSertifikat.value}
        onChange={handleOnChange}
        placeholder="Pilih Salah Satu..."
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

export default JenisSertifikat;
