import React from "react";
import Select from "react-select";

const options = [
  { value: "RumahTapak", label: "Rumah Tapak" },
  { value: "RumahCluster", label: "Rumah Cluster" },
  { value: "RumahKopel", label: "Rumah Kopel" },
  { value: "Villa", label: "Villa" },
  { value: "Apartment", label: "Apartment / Kondominium" },
  { value: "Ruko", label: "Rumah Toko (Ruko)" },
  { value: "Rukan", label: "Rumah Kantor (Rukan)" },
  { value: "Kosan", label: "Kosan / Indekos" },
];

const JenisProperti = (props) => {
  const { selectedOptions, setSelectedOptions } = props;

  const handleSelectedOptionsOnChange = (e) => {
    setSelectedOptions(e);
  };

  return (
    <React.Fragment>
      <Select
        isMulti={true}
        value={selectedOptions}
        onChange={handleSelectedOptionsOnChange}
        options={options}
        className="w-[70%] mx-auto"
      />
    </React.Fragment>
  );
};

export default JenisProperti;
