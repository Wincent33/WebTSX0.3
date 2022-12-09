import { useState, useEffect } from "react";
import Select from "react-select";
const KabupatenSelect = (props) => {
  const { formValue, setFormValue } = props;
  const [fetchKabupaten, setFetchKabupaten] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    if (Object.values(formValue.provinsi)[0] !== undefined) {
      fetch(
        `http://www.emsifa.com/api-wilayah-indonesia/api/regencies/${
          Object.values(formValue.provinsi)[0]
        }.json`
      )
        .then((res) => res.json())
        .then((res) => {
          res.forEach(function (data) {
            data["value"] = data["id"];
            delete data["id"];
            data["label"] = data["name"];
            delete data["name"];
          });
          setFetchKabupaten(res);
        });
    }
  }, [formValue.provinsi, setFetchKabupaten]);

  const handleOnChange = (e) => {
    let updatedValue = {};
    updatedValue = {
      kabupaten: e,
      kecamatan: { regency_id: "", value: "", label: "" },
    };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };
  return (
    <div className="my-2">
      <label
        className={
          isFocused
            ? "absolute text-xs px-1 text-primary4 bg-white translate-x-3 -translate-y-2 z-[96]"
            : "absolute text-xs px-1 text-[grey] bg-white translate-x-3 -translate-y-2 z-[96]"
        }
      >
        Kabupaten *
      </label>
      <Select
        className="z-[95]"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        name="provinsi"
        value={formValue.kabupaten.value !== "" ? formValue.kabupaten : null}
        onChange={handleOnChange}
        options={fetchKabupaten}
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

export default KabupatenSelect;
