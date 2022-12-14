import { TextField } from "@mui/material";
const Deskripsi = (props: any) => {
  const { formValue, setFormValue } = props;
  const handleOnChange = (e: any) => {
    let updatedValue = {};
    updatedValue = { deskripsiProperti: e.target.value };
    setFormValue((prev: any) => ({ ...prev, ...updatedValue }));
  };
  return (
    <div className="flex items-center">
      <TextField
        className="w-full"
        label="Deskripsi Properti"
        variant="outlined"
        value={formValue.deskripsiProperti}
        onChange={handleOnChange}
        rows={"6"}
        multiline
        sx={{
          "& label.Mui-focused": { color: "#ee6c4d" },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#ee6c4d",
            },
          },
        }}
        required
      />
    </div>
  );
};

export default Deskripsi;
