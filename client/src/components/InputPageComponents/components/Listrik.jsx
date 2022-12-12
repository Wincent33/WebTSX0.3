import React from "react";
import { NumericFormat } from "react-number-format";
import { TextField } from "@mui/material";
const Listrik = (props) => {
  const { formValue, setFormValue } = props;

  const handleOnChange = (e) => {
    let updatedValue = {};
    updatedValue = { listrik: parseInt(e.target.value) };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };
  return (
    <div className="listrik">
      <NumericFormat
        label="Daya Listrik"
        required
        displayType="number"
        value={formValue.listrik}
        onChange={handleOnChange}
        defaultValue={null}
        allowLeadingZeros={false}
        allowNegative={false}
        maxLength={5}
        placeholder={"Daya Listrik Properti..."}
        customInput={TextField}
        isAllowed={(values) => {
          const { value } = values;
          return value >= 0;
        }}
        sx={{
          "& label.Mui-focused": { color: "#ee6c4d" },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#ee6c4d",
            },
          },
        }}
        InputProps={{
          endAdornment: <p className="text-[gray]">VA</p>,
        }}
      />
    </div>
  );
};

export default Listrik;
