import React from "react";
// import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
// import "./style.scss";
import { BiBed, BiBath } from "react-icons/bi";
import SimpleImageSlider from "react-simple-image-slider";

const HomeCards: React.FC = () => {
  // var sliderSettings = {
  //   className: "card-slider",
  //   draggable: false,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  // };
  const imagesExample = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1384&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];
  return (
    <div className="w-[350px] h-content pb-[10px] flex flex-col rounded-[20px] border-solid border-[black] border-[1px] ">
      <div className="flex justify-between h-[50px] items-center py-0 px-[20px]">
        <h5>Nama cluster</h5>
        <img src="" alt="dev-logo" />
      </div>
      <div className="translate-x-[-10px] w-[370px]">
        <SimpleImageSlider
          height={200}
          width={370}
          images={imagesExample}
          showBullets={false}
          showNavs={true}
        />
      </div>

      <div className="flex flex-col">
        <div className="py-0 px-[15px] flex flex-row justify-between items-center">
          <p className="text-[gray] text-[14px] font-[500] my-[5px] mx-0">
            Thamrin, Jakarta Pusat, DKI Jakarta
          </p>
          <h5 className="text-[16px] my-[5px] mx-0">Rp 1.5 Mil</h5>
        </div>
        <div className="flex flex-row justify-around">
          <div className="flex flex-row items-center justify-center h-max bg-primary4 py-[3px] px-[10px] rounded-[10px] border-solid border-[2px] border-primary5">
            <p className="m-0 font-[600] text-white">3</p>
            <BiBed size={"20px"} color={"white"} />
          </div>

          <div className="flex flex-row items-center justify-center h-max bg-primary4 py-[3px] px-[10px] rounded-[10px] border-solid border-[2px] border-primary5">
            <p className="m-0 font-[600] text-white">5</p>
            <BiBath size={"20px"} color={"white"} />
          </div>

          <div className="flex flex-row items-center justify-center h-max bg-primary4 py-[3px] px-[10px] rounded-[10px] border-solid border-[2px] border-primary5">
            <p className="m-0 font-[600] text-white">TagJenis</p>
          </div>
          <div className="flex flex-row items-center justify-center h-max bg-primary4 py-[3px] px-[10px] rounded-[10px] border-solid border-[2px] border-primary5">
            <p className="m-0 font-[600] text-white">TagSert</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
