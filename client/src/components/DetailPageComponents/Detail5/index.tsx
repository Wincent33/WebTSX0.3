import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
const Detail5 = () => {
  const percentage = [
    {
      value: 0,
      label: "0%",
    },
    {
      value: 50,
      label: "50%",
    },
  ];
  const [persen, setPersen] = useState(20);
  const hargaProperti = 2000000000;
  const handleOnChange = (event: any, newValue: any) => {
    setPersen(newValue);
  };
  const textChange= (e:any)=>{setPersen(e.target.value)}
  const uangMuka = (persen / 100) * hargaProperti;
  const uangMukaText= hargaProperti/uangMuka
  return (
    <div className="flex flex-row justify-between gap-4 w-[90vw] mx-auto max-w-[1200px] h-96">
      <div className="flex flex-col w-full bg-primary4 p-5">
        <text className="text-2xl font-bold">Simulasi KPR</text>
        <p className="text-xl font-bold">
          Harga Properti: Rp {hargaProperti.toLocaleString()}
        </p>
        <p>Persentase Uang Muka: </p>
      
        <div className="w-full mx-auto my-10">
          <Slider
            min={0}
            max={50}
            defaultValue={persen}
            value={persen}
            aria-label="Default"
            marks={percentage}
            valueLabelDisplay="on"
            onChange={handleOnChange}
            valueLabelFormat={(value) => (
              <div className="text-base">{value}%</div>
            )}
          />
          <p className="text-lg">
            Uang Muka(DP): Rp {uangMuka.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="flex w-full bg-primary4">right</div>
    </div>
  );
};

export default Detail5;
