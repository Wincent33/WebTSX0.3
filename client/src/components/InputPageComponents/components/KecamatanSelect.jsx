import { useState, useEffect } from "react";
import Select from "react-select";
const KecamatanSelect = (props) => {
  const { formValue, setFormValue } = props;
  const [fetchKecamatan, setFetchKecamatan] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    if (
      formValue.kabupaten !== null ||
      (undefined && Object.values(formValue.provinsi) !== undefined)
    ) {
      fetch(
        `http://www.emsifa.com/api-wilayah-indonesia/api/districts/${formValue.kabupaten.value}.json`
      )
        .then((res) => res.json())
        .then((res) => {
          res.forEach(function (data) {
            data["value"] = data["id"];
            delete data["id"];
            data["label"] = data["name"];
            delete data["name"];
          });
          setFetchKecamatan(res);
        });
    }
  }, [formValue.kabupaten, formValue.provinsi, setFetchKecamatan]);

  const handleOnChange = (e) => {
    let updatedValue = {};
    updatedValue = { kecamatan: e };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };

  return (
    <div className="kecamatan">
      <label
        className={
          isFocused
            ? "absolute text-xs px-1 text-primary4 bg-white translate-x-3 -translate-y-2 z-[94]"
            : "absolute text-xs px-1 text-[grey] bg-white translate-x-3 -translate-y-2 z-[94]"
        }
      >
        Kecamatan *
      </label>
      <Select
        className="z-[93]"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        name="kecamatan"
        value={formValue.kecamatan.value !== "" ? formValue.kecamatan : null}
        onChange={handleOnChange}
        options={fetchKecamatan}
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

export default KecamatanSelect;
