import { TextField } from "@mui/material";

const Lokasi = (props: any) => {
  const { formValue, setFormValue } = props;

  const handleOnChange = (e: any) => {
    let updatedValue = {};
    updatedValue = { alamat: e.target.value };
    setFormValue((prev: any) => ({ ...prev, ...updatedValue }));
  };
  return (
    <div className="flex items-center">
      <TextField
        className="w-full"
        label="Alamat"
        value={formValue.alamat}
        onChange={handleOnChange}
        required
        sx={{
          "& label.Mui-focused": { color: "#ee6c4d" },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#ee6c4d",
            },
          },
        }}
      />
    </div>
  );
};

export default Lokasi;
