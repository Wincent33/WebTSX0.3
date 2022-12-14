import React, { useState } from "react";
import PriceRangeSlider from "./PriceRangeSlider";
import FurnishedOption from "./FurnishedOption";
import LuasBangunan from "./LuasBangunan";
import LuasTanah from "./LuasTanah";
import KamarNWCCounter from "./KamarNWCCounter";
import Fasilitas from "./Fasilitas";
import ZonaInteraksi from "./ZonaInteraksi";
import YardOption from "./YardOption";
import BeliSewa from "./BeliSewa";
import JenisProperti from "./JenisProperti";
import Lokasi from "./Lokasi";

export default function FilterContent() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  // const hargaLabel = {
  //   0: "0",
  //   1: "100 juta",
  //   2: "250 juta",
  //   3: "500 juta",
  //   4: "750 juta",
  //   5: "1 miliar",
  //   6: "1.5 miliar",
  //   7: "2 miliar",
  //   8: "2.5 miliar",
  //   9: "3 miliar",
  //   10: "3+ miliar",
  // };
  const [lokasiValue, setLokasiValue] = useState("");
  const [beliSewaValue, setBeliSewaValue] = useState(0);
  const [jenisPropertiOptions, setJenisPropertiOptions] = useState([]);
  const [hargaSlider, setHargaSlider] = useState([0, 10]);
  const [furnishedValue, setFurnishedValue] = useState(false);
  const [minLBValue, setMinLBValue] = useState("");
  const [maxLBValue, setMaxLBValue] = useState("");
  const [minLTValue, setMinLTValue] = useState("");
  const [maxLTValue, setMaxLTValue] = useState("");
  const [kamarValue, setKamarValue] = useState(0);
  const [wCValue, setWCValue] = useState(0);
  const [fasilitasValue, setFasilitasValue] = useState([]);
  const [zonaValue, setZonaValue] = useState("");
  const [yardValue, setYardValue] = useState(false);
  return (
    <form onSubmit={handleSubmit} className="m-0 flex flex-col z-50">
      {/* Beli Sewa Tabs */}
      <BeliSewa activeTab={beliSewaValue} setActiveTab={setBeliSewaValue} />
      {/* Lokasi */}
      <Lokasi locationSelect={lokasiValue} setLocationSelect={setLokasiValue} />
      {/* Jenis Properti */}
      <JenisProperti
        selectedOptions={jenisPropertiOptions}
        setSelectedOptions={setJenisPropertiOptions}
      />
      {/* Slider Harga */}
      <PriceRangeSlider
      // sliderValues={hargaSlider}
      // setSliderValues={setHargaSlider}
      />
      {/* Furnished Option */}
      <FurnishedOption
        isFurnished={furnishedValue}
        setIsFurnished={setFurnishedValue}
      />
      <LuasBangunan
        minVal={minLBValue}
        setMinVal={setMinLBValue}
        maxVal={maxLBValue}
        setMaxVal={setMaxLBValue}
      />
      <LuasTanah
        minVal={minLTValue}
        setMinVal={setMinLTValue}
        maxVal={maxLTValue}
        setMaxVal={setMaxLTValue}
      />
      <KamarNWCCounter
        kamarCounter={kamarValue}
        setKamarCounter={setKamarValue}
        wCCounter={wCValue}
        setWCCounter={setWCValue}
      />
      <Fasilitas
        selectedOptions={fasilitasValue}
        setSelectedOptions={setFasilitasValue}
      />
      <ZonaInteraksi
        selectedOptions={zonaValue}
        setSelectedOptions={setZonaValue}
      />
      <YardOption isYard={yardValue} setIsYard={setYardValue} />
      {/* <div className="submit-data">
        <h3>sewa/Beli : {beliSewaValue}</h3>
        <h3>lokasi :{lokasiValue}</h3>
        <h3>jenis :{jenisPropertiOptions.map((d) => d.label).join(", ")}</h3>
        <h3>
          Harga : {hargaLabel[hargaSlider[0]]} - {hargaLabel[hargaSlider[1]]}
        </h3>
        <h3>Furnished : {furnishedValue.toString()}</h3>
        <h3>
          LuasBangunan : {minLBValue} m^2 - {maxLBValue} m^2
        </h3>
        <h3>
          LuasTanah : {minLTValue} m^2 - {maxLTValue} m^2
        </h3>
        <h3>JumlahKamar :{kamarValue}</h3>
        <h3>Jumlah WC : {wCValue}</h3>
        <h3>fasilitas : {fasilitasValue.map((v)=>v.label).join(", ")}</h3>
        <h3>zona :  {zonaValue === null ? null : zonaValue.label}</h3>
        <h3>Yard :{yardValue.toString()}</h3>
      </div> */}

      <button
        type="submit"
        className="w-[75%] h-14 bg-primary4 text-3xl text-white mx-auto rounded-3xl"
        onClick={() => {}}
      >
        Submit
      </button>
    </form>
  );
}
