import { useState, useEffect } from "react";
import Select from "react-select";

const ProvinsiSelect = (props) => {
  const { formValue, setFormValue } = props;
  const [fetchProvinsi, setFetchProvinsi] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    fetch("http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      .then((res) => res.json())
      .then((res) => {
        res.forEach(function (data) {
          data["value"] = data["id"];
          delete data["id"];
          data["label"] = data["name"];
          delete data["name"];
        });
        setFetchProvinsi(res);
      });
  }, [setFetchProvinsi]);

  const handleOnChange = (e) => {
    let updatedValue = {};
    updatedValue = {
      provinsi: e,
      kabupaten: { province_id: "", value: "", label: "" },
      kecamatan: { regency_id: "", value: "", label: "" },
    };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
    console.log(formValue.provinsi.value);
  };

  return (
    <div>
      <label
        className={
          isFocused
            ? "absolute text-xs px-1 text-primary4 bg-white translate-x-3 -translate-y-2 z-[98]"
            : "absolute text-xs px-1 text-[grey] bg-white translate-x-3 -translate-y-2 z-[98]"
        }
      >
        Provinsi *
      </label>
      <Select
        className="z-[97]"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        name="provinsi"
        value={formValue.provinsi.value !== "" ? formValue.provinsi : null}
        onChange={handleOnChange}
        options={fetchProvinsi}
        placeholder={"Pilih Salah Satu..."}
        styles={{
          control: (base, state) => ({
            ...base,
            borderColor: state.isFocused ? "#ee6c4d" : "lightgrey",
            height: "3.5rem",
            boxShadow: state.isFocused ? null : null,
            "&:hover": {
              // Overwrittes the different states of border
              borderColor: state.isFocused ? "" : "black",
            },
          }),
        }}
      />
    </div>
  );
};

export default ProvinsiSelect;
