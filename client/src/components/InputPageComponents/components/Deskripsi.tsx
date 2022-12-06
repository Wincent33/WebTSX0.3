import { TextField } from "@mui/material";
const Deskripsi = (props:any) => {
  const { formValue, setFormValue } = props;
  const handleOnChange = (e:any) => {
    let updatedValue = {};
    updatedValue = { deskripsiProperti: e.target.value };
    setFormValue((prev:any) => ({ ...prev, ...updatedValue }));
  };
  return (
    <div className="flex items-center">
      <TextField  
        className="w-full"
        label="Deskripsi Properti"
        variant="outlined"
        value={formValue.deskripsiProperti}
        onChange={handleOnChange}
        // minRows={"4"}
        rows={"6"}
        multiline
        required/>
    </div>
  );
};

export default Deskripsi;
