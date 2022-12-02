import React, { useState } from "react";
import Slider from "@mui/material/Slider";

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

const hargaMarks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 1,
    label: "100 Juta",
  },
  {
    value: 2,
    label: "250 Juta",
  },
  {
    value: 3,
    label: "500 Juta",
  },
  {
    value: 4,
    label: "750 Juta",
  },
  {
    value: 5,
    label: "1 Miliar",
  },
  {
    value: 6,
    label: "1.5 Miliar",
  },
  {
    value: 7,
    label: "2 Miliar",
  },
  {
    value: 8,
    label: "2.5 Miliar",
  },
  {
    value: 9,
    label: "3 Miliar",
  },
  {
    value: 10,
    label: "3+ Miliar",
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}

const PriceRangeSlider = (props: any) => {
  const [value1, setValue1] = useState<number[]>([1, 2]);
  const minDistance = 1;

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };
  const { sliderValues, setSliderValues } = props;
  // const [sliderValues, setSliderValues] = React.useState([0, 10]);
  return (
    // Price Slider Container
    <div className="flex flex-col justify-center float-left p-2 pl-[10%] w-full h-fit">
      {/* Price Slider Text */}
      <div className="flex gap-2">
        <p>Harga:</p>
        <p>
          {/* Rp {hargaLabel[sliderValues[0]]} - Rp {hargaLabel[sliderValues[1]]} */}
        </p>
      </div>
      <div className="slider-container">
        <div className="price-slider-btn-container">
          <div className="price-slider-btn-width">
            <Slider
              // getAriaLabel={() => 'Minimum distance'}
              defaultValue={value1}
              value={value1}
              onChange={handleChange1}
              valueLabelDisplay="off"
              sx={{
                ".MuiSlider-rail": { backgroundColor: "black" },
                ".MuiSlider-track": { color: "#ee6c4d" },
                ".MuiSlider-thumb": { color: "#ee6c4d" },
                ".Mui-focusVisible": { color: "#ee6c4d" },
                "	.MuiSlider-markLabel": {
                  fontSize: 16,
                  fontWeight: "800",
                  overflow: "hidden",
                  overflowWrap: "break-word",
                  width: "50px",
                  height: "fit-content",
                  textAlign: "center",
                  whiteSpace: "normal",
                },
                "	.MuiSlider-mark": {
                  height: "5px",
                  width: "5px",
                  borderRadius: "5px",
                  color: "#ee6c4d",
                },
              }}
              // getAriaValueText={valuetext}
              step={1}
              marks={hargaMarks}
              disableSwap
              min={0}
              max={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
