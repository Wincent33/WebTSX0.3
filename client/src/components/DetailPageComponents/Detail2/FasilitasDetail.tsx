import React from "react";
// import "./style.scss";
import { BiCctv } from "react-icons/bi";
import {
  MdPool,
  MdOutlineWaterDrop,
  MdOutlineFence,
  MdOutlinePark,
  MdOutlineShoppingBag,
  MdOutlineLocalHospital,
  MdOutlineFastfood,
} from "react-icons/md";
import { BsSuitClub } from "react-icons/bs";
const FasilitasDetail = () => {
  const Items = ({ Icon, value }: any) => {
    return (
      <div className="flex flex-row h-fit w-fit bg-primary4 text-white py-1 px-4 rounded-2xl hover:cursor-default hover:scale-105 duration-200">
        <Icon size={"20px"} color={"white"} />
        <p className="text-sm">{value}</p>
      </div>
    );
  };
  return (
    <div className="flex flex-col mx-auto w-full min-h-[310px] min-w-[500px] rounded-[20px] text-white bg-gradient-to-br from-primary5 via-primary1 to-primary4">
      <div className="m-4 ">
        <h1 className="ml-[10px] mb-[10px] text-2xl font-[900]">
          Fasilitas Properti:
        </h1>
        <div className="flex flex-wrap gap-2">
          <Items Icon={BiCctv} value="Keamanan 24/7" />
          <Items Icon={MdOutlineWaterDrop} value="Air PAM" />
          <Items Icon={MdPool} value="Kolam Pribadi" />
          <Items Icon={MdOutlineFence} value="Pagar" />
        </div>
        <h1 className="m-[10px] text-2xl font-[900]">Fasilitas Sekitar:</h1>
        <div className="flex flex-wrap gap-2">
          <Items Icon={MdOutlinePark} value="Taman Hijau" />
          <Items Icon={BsSuitClub} value="Club House" />
          <Items Icon={MdOutlineShoppingBag} value="Shopping Mall" />
          <Items Icon={MdOutlineLocalHospital} value="Rumah Sakit" />
          <Items Icon={MdOutlineFastfood} value="Pusat Makanan" />
        </div>
      </div>
    </div>
  );
};

export default FasilitasDetail;
