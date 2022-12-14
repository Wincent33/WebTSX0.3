import { NumericFormat } from "react-number-format";
import { TextField } from "@mui/material";
const TahunBangun = (props) => {
  const { formValue, setFormValue } = props;
  const handleOnChange = (e) => {
    let updatedValue = {};
    updatedValue = { tahunBangun: parseInt(e.target.value) };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };
  var currentYear = new Date().getFullYear();
  return (
    <NumericFormat
      className="w-[40%]"
      displayType="number"
      label="Tahun Bangun"
      required
      value={formValue.tahunBangun}
      onChange={handleOnChange}
      helperText={() => {
        var currentYear = Date().getFullYear;
        if (formValue.tahunBangun < 1900) {
          return "Tahun Tidak dapat lebih tua dari 1900";
        }
        if (formValue.tahunBangun > currentYear) {
          return `Tahun tidak dapat lebih dari ${currentYear}`;
        } else {
          return "";
        }
      }}
      // InputProps={{
      //   endAdornment: (
      //     <p className="text-[gray]">
      //       m<sup>2</sup>
      //     </p>
      //   ),
      // }}
      allowLeadingZeros={false}
      allowNegative={false}
      maxLength={4}
      customInput={TextField}
      sx={{
        "& label.Mui-focused": { color: "#ee6c4d" },
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "#ee6c4d",
          },
        },
      }}
      // isAllowed={(values) => {
      //   var year = new Date().getFullYear();
      //   const { value } = values;
      //   return value <= year;
      // }}
    />
  );
};

export default TahunBangun;
