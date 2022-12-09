import { TextField } from "@mui/material";
import { NumericFormat } from "react-number-format";
import { WordifyRupiah } from "../../../assets/utils/WordifyRupiah";
const Harga = (props) => {
  const { formValue, setFormValue } = props;
  const handleOnChange = (e) => {
    var num = e.target.value;
    num = num.split(".").join("");
    num = parseInt(num, 10);
    let updatedValue = {};
    updatedValue = { harga: num };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };
  return (
    <NumericFormat
      className="w-full"
      decimalSeparator={","}
      displayType="number"
      label="Harga"
      required
      value={formValue.harga}
      onChange={handleOnChange}
      placeholder={"Masukan Harga..."}
      InputProps={{
        startAdornment: <p className="text-[gray] mr-2">Rp</p>,
      }}
      allowLeadingZeros={false}
      thousandSeparator={"."}
      autoComplete={false}
      allowNegative={false}
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
        return value >= 0 && value <= 99999999999;
      }}
      //helper Text please
      helperText={
        isNaN(formValue.harga)
          ? "≈ Rp 0"
          : "≈ Rp " + WordifyRupiah(formValue.harga)
      }
    />
  );
};

export default Harga;
