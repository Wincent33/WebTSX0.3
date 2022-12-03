import React, { useState } from "react";
import Select from "react-select";
import JenisPropertiOption from "../../../assets/data/JenisPropertiOption.json";
import HargaOption from "../../../assets/data/HargaOption.json";
function QuickFilters() {
  const [jenisValue, setJenisValue] = useState("");

  const kamarOption = [
    {
      value: 1,
      label: "1 kamar",
    },
    {
      value: 2,
      label: "2 kamar",
    },
    {
      value: 3,
      label: "3 kamar",
    },
    {
      value: 4,
      label: "4 kamar",
    },
    {
      value: 5,
      label: "5 kamar",
    },
    {
      value: 6,
      label: "5+ kamar",
    },
  ];

  return (
    // Quick Filter
    <div className="max-w-[1200px] w-full py-2 bg-white">
      <div className="flex flex-row mx-auto items-center gap-3 w-full ">
        {/* Jenis Properti */}
        <div className="flex items-center">
          <Select
            options={JenisPropertiOption}
            isClearable={true}
            placeholder={"Semua Jenis"}
          />
          {/* <select value={jenisValue} onChange={(e)=>setJenisValue(e.target.value)}>
        <option value="semuaJenis">Semua Jenis</option>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select> */}
        </div>
        <label className="text-xl text-[gray]">|</label>
        {/* Harga Filter */}
        <div className="flex flex-row items-center">
          <div className="harga-min">
            <Select
              options={HargaOption}
              isClearable={true}
              placeholder={"Min Harga"}
            />
          </div>
          <label className="text-xl mx-2 text-[gray]">-</label>
          <div className="harga-max">
            <Select
              options={HargaOption}
              isClearable={true}
              placeholder={"Max Harga"}
            />
          </div>
        </div>
        <label className="text-xl text-[gray]">|</label>
        <div className="kamar-filter">
          <Select
            options={kamarOption}
            isClearable={true}
            placeholder={"jumlah kamar"}
          />
        </div>
      </div>
    </div>
  );
}

export default QuickFilters;
