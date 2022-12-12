import { NumericFormat } from "react-number-format";
import { TextField } from "@mui/material";
const LTLB = (props) => {
  const { formValue, setFormValue } = props;

  const handleOnChangeLt = (e) => {
    let updatedValue = {};
    updatedValue = { luasTanah: parseInt(e.target.value) };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };

  const handleOnChangeLb = (e) => {
    let updatedValue = {};
    updatedValue = { luasBangunan: parseInt(e.target.value) };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };

  return (
    <div className="flex flex-row w-full justify-around">
      <NumericFormat
        className="w-[40%]"
        decimalSeparator=","
        displayType="number"
        label="Luas Tanah"
        required
        value={formValue.luasTanah}
        onChange={handleOnChangeLt}
        InputProps={{
          endAdornment: (
            <p className="text-[gray]">
              m<sup>2</sup>
            </p>
          ),
        }}
        defaultValue={0}
        allowLeadingZeros={false}
        allowNegative={false}
        maxLength={3}
        customInput={TextField}
        sx={{
          "& label.Mui-focused": { color: "#ee6c4d" },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#ee6c4d",
            },
          },
        }}
        isAllowed={(values) => {
          const { value } = values;
          return value >= 0;
        }}
      />
      <NumericFormat
        className="w-[40%]"
        decimalSeparator=","
        displayType="number"
        label="Luas Tanah"
        required
        value={formValue.luasBangunan}
        onChange={handleOnChangeLb}
        InputProps={{
          endAdornment: (
            <p className="text-[gray]">
              m<sup>2</sup>
            </p>
          ),
        }}
        defaultValue={0}
        allowLeadingZeros={false}
        allowNegative={false}
        maxLength={3}
        customInput={TextField}
        sx={{
          "& label.Mui-focused": { color: "#ee6c4d" },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#ee6c4d",
            },
          },
        }}
        isAllowed={(values) => {
          const { value } = values;
          return value >= 0;
        }}
      />
    </div>
  );
};

export default LTLB;
