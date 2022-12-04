import TextField from "@mui/material/TextField";

const Judul = (props: any) => {
  const { formValue, setFormValue } = props;

  const handleOnChange = (e: any) => {
    let updatedValue = {};
    updatedValue = { judul: e.target.value };
    setFormValue((prev: any) => ({ ...prev, ...updatedValue }));
  };
  return (
    <div className="flex items-center">
      <TextField
        className="w-full"
        label="Judul"
        variant="outlined"
        value={formValue.judul}
        onChange={handleOnChange}
        required
      />
    </div>
  );
};
export default Judul;
