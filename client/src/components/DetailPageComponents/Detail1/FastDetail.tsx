import React from "react";
// import "./style.scss";
import { BiBed, BiBath, BiCar } from "react-icons/bi";
const FastDetail = () => {
  const Items = ({ title, value, unit, powerOf }: any) => {
    return (
      <div>
        <label className="text-primary3">{title}</label>
        <p className="m-0">
          {value} {unit}
          <sup>{powerOf}</sup>
        </p>
        ----------------------
      </div>
    );
  };
  return (
    <div className="flex flex-col m-[10px] w-[30em] max-h-[500px] rounded-[20px] p-[25px] text-white bg-gradient-to-br from-primary5 via-primary1 to-primary4">
      <div className="ml-[10px] mb-[20px]">
        <h1 className="m-0 text-[24px] font-[900]">Fasilitas Properti</h1>
        <div className="flex gap-[15px] m-0 mt-[15px] ">
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
        </div>
      </div>
      <div className="flex flex-row justify-around h-full">
        <div className="flex flex-col w-[50%] m-auto">
          <Items title="Tipe Properti" value="Rumah" />
          <Items title="Status" value="Dijual" />
          <Items title="Luas Tanah" value="123" unit="m" powerOf="2" />
          <Items title="Daya Listrik" value="2200" unit="VA" />
        </div>
        <div className="flex flex-col w-[50%] m-auto">
          <Items title="Sertifikat" value="SHM-Sertifikat Hak Milik" />
          <Items title="Terdaftar Pada" value="1 bulan yang lalu" />
          <Items title="Orientasi" value="Timur" />
          <Items title="Dibangun Tahun" value="2015" />
        </div>
      </div>
    </div>
  );
};

export default FastDetail;
