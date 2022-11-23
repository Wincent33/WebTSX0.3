import React from "react";
import Slider from "@mui/material/Slider";
const Detail5 = () => {
  return (
    <div className="flex flex-row justify-between gap-4 w-[90vw] mx-auto max-w-[1200px] h-96">
      <div className="flex flex-col w-full bg-primary4 p-5">
        <text className="text-2xl font-bold">Simulasi KPR</text>
        <p className="text-xl font-bold">Harga Properti: Rp 200.000.000</p>
        <p className="text-lg">Uang Muka(DP): Rp 40.000.000</p>
        <div className="w-full mx-auto my-10">
          <Slider
            min={0}
            max={50}
            defaultValue={20}
            aria-label="Default"
            slotProps={{}}
            marks={[{ value: 0 }, { value: 100 }]}
            valueLabelDisplay="on"
            valueLabelFormat={(value) => (
              <div className="text-base">{value}%</div>
            )}
          />
        </div>
      </div>
      <div className="flex w-full bg-primary4">right</div>
    </div>
  );
};

export default Detail5;
