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
  const Items = ({ title, value, unit, powerOf }: any) => {
    return (
      <div className="flex flex-row h-fit w-fit bg-primary4 text-white py-1 px-4 rounded-2xl">
        <BiCctv size={"30px"} color={"white"} />
        <p className="text-[20px]">{value}</p>
      </div>
    );
  };
  return (
    <div className="flex flex-col m-[10px] w-[650px] max-h-[500px] rounded-[20px] p-[25px] text-white bg-gradient-to-br from-primary5 via-primary1 to-primary4">
      <div className="mb-[20px]">
        <h1 className="ml-[10px] mb-[10px] text-[30px] font-[900]">
          Fasilitas Properti:
        </h1>
        <div className="flex flex-wrap gap-1">
          <div className="flex flex-row h-fit w-fit bg-primary4 text-white py-1 px-4 rounded-2xl">
            <BiCctv size={"30px"} color={"white"} />
            <p className="text-[20px]">Keamanan 24/7</p>
          </div>
          <div className="flex flex-row h-fit w-fit bg-primary4 text-white py-1 px-4 rounded-2xl">
            <MdPool size={"30px"} color={"white"} />
            <p className="text-[20px]">Kolam Pribadi</p>
          </div>
          <div className="flex flex-row h-fit w-fit bg-primary4 text-white py-1 px-4 rounded-2xl">
            <MdOutlineWaterDrop size={"30px"} color={"white"} />
            <p className="text-[20px]">PAM</p>
          </div>
          <div className="flex flex-row h-fit w-fit bg-primary4 text-white py-1 px-4 rounded-2xl">
            <MdOutlineFence size={"30px"} color={"white"} />
            <p className="text-[20px]">Pagar</p>
          </div>
        </div>
        <h1 className="m-[10px] text-[30px] font-[900]">Fasilitas Sekitar:</h1>
        <div className="flex flex-wrap gap-1">
          <div className="flex flex-row h-fit w-fit bg-primary4 text-white py-1 px-4 rounded-2xl">
            <MdOutlinePark size={"30px"} color={"white"} />
            <p className="text-[20px]">Taman</p>
          </div>
          <div className="flex flex-row h-fit w-fit bg-primary4 text-white py-1 px-4 rounded-2xl">
            <BsSuitClub size={"30px"} color={"white"} />
            <p className="text-[20px]">Club House</p>
          </div>
          <div className="flex flex-row h-fit w-fit bg-primary4 text-white py-1 px-4 rounded-2xl">
            <MdOutlineShoppingBag size={"30px"} color={"white"} />
            <p className="text-[20px]">Shopping Mall</p>
          </div>
          <div className="flex flex-row h-fit w-fit bg-primary4 text-white py-1 px-4 rounded-2xl">
            <MdOutlineLocalHospital size={"30px"} color={"white"} />
            <p className="text-[20px]">Rumah Sakit</p>
          </div>
          <div className="flex flex-row h-fit w-fit bg-primary4 text-white py-1 px-4 rounded-2xl">
            <MdOutlineFastfood size={"30px"} color={"white"} />
            <p className="text-[20px]">Rumah Sakit</p>
          </div>
        </div>
        {/* <div className="flex gap-[15px] m-0 mt-[15px] ">
          <div className="w-auto flex items-center justify-center">
            <p className="my-0 mx-[5px] text-[24px]">3</p>
            <BiBed size={"30px"} color={"white"} />
          </div>
          <div className="w-auto flex items-center justify-center">
            <p className="my-0 mx-[5px] text-[24px]">3</p>
            <BiBath size={"30px"} color={"white"} />
          </div>
          <div className="w-auto flex items-center justify-center">
            <p className="my-0 mx-[5px] text-[24px]">3</p>
            <BiCar size={"30px"} color={"white"} />
          </div>
        </div> */}
      </div>
      {/* <div className="flex flex-row justify-around h-full">
        <div className="flex flex-col w-[50%] m-auto">
          <Items title="Tipe Properti" value="Rumah" />
          <Items title="Status" value="Dijual" />
          <Items title="Luas Tanah" value="123" unit="m" powerOf="2" />
          <Items title="Daya Listrik" value="2200" />
        </div>
        <div className="flex flex-col w-[50%] m-auto">
          <Items title="Sertifikat" value="SHM-Sertifikat Hak Milik" />
          <Items title="Terdaftar Pada" value="1 bulan yang lalu" />
          <Items title="Orientasi" value="Timur" />
          <Items title="Dibangun Tahun" value="2015" />
        </div>
      </div> */}
    </div>
  );
};

export default FasilitasDetail;
