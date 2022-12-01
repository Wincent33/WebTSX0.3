import React, {useState} from "react";
import Slider from "@mui/material/Slider";

const hargaLabel = {
  0: "0",
  1: "100 juta",
  2: "250 juta",
  3: "500 juta",
  4: "750 juta",
  5: "1 miliar",
  6: "1.5 miliar",
  7: "2 miliar",
  8: "2.5 miliar",
  9: "3 miliar",
  10: "3+ miliar",
};
function valuetext(value: number) {
  return `${value}°C`;
}


const PriceRangeSlider = (props:any) => {
  const [value1, setValue1] = useState<number[]>([20, 37]);
  const minDistance = 10;
const handleChange1 = (
  event: Event,
  newValue: number | number[],
  activeThumb: number,
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
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
