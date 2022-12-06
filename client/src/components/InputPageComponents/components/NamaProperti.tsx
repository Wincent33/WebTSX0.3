import { TextField } from "@mui/material";
const NamaProperti = (props:any) => {
  const { formValue, setFormValue } = props;

  const handleOnChange = (e:any) => {
    let updatedValue = {};
    updatedValue = { namaProperti: e.target.value };
    setFormValue((prev:any) => ({ ...prev, ...updatedValue }));
  };
  return (
      <div className="flex items-center">
      <TextField
        className="w-full"
        label="Nama Properti"
        variant="outlined"
        value={formValue.judul}
        onChange={handleOnChange}
        required
      />
    </div>
  );
};
export default NamaProperti;
