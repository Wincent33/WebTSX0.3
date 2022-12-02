import React from "react";
import Select from "react-select";

const options = [
  { value: "parkiran-mobil", label: "Parkir Mobil" },
  { value: "security", label: "Security" },
  { value: "garden", label: "Garden" },
  { value: "sport-center", label: "Sport Center" },
  { value: "private-pool", label: "Private Pool" },
  { value: "kitchen", label: "Kitchen" },
  { value: "maid-room", label: "Maid Room" },
  { value: "balcony", label: "Balcony" },
];

const Fasilitas = (props) => {
  const { selectedOptions, setSelectedOptions } = props;

  const handleSelectedOptionsOnChange = (e) => {
    setSelectedOptions(e);
  };
  return (
    <div className="mx-auto w-[75%] flex flex-row justify-between">
      <h3 className="my-auto">Fasilitas</h3>
      <Select
        className="m-0 w-[50%]"
        options={options}
        isMulti={true}
        onChange={handleSelectedOptionsOnChange}
        value={selectedOptions}
      />
    </div>
  );
};

export default Fasilitas;
