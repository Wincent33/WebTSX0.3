import React from "react";
// import "./style.scss";
import { BiBed, BiBath, BiCar } from "react-icons/bi";
const FastDetail = () => {
  const Items = ({ title, value, unit, powerOf }: any) => {
    return (
      <div>
        <label className="text-primary3 text-sm font-bold">{title}</label>
        <p className="m-0 text-xs">
          {value} {unit}
          <sup>{powerOf}</sup>
        </p>
        ------------------
      </div>
    );
  };
  return (
    <div className="flex flex-col m-[10px] w-[40%] max-h-fit rounded-[20px] p-2 text-white bg-gradient-to-br from-primary5 via-primary1 to-primary4">
      <div className="ml-[10px] mb-[20px]">
        <h1 className="m-0 font-[900]">Fasilitas Properti</h1>
        <div className="flex gap-[15px] m-0 ">
          <div className="w-auto flex items-center justify-center">
            <p className="my-0 mx-[5px] text-lg">3</p>
            <BiBed size={"20px"} color={"white"} />
          </div>
          <div className="w-auto flex items-center justify-center">
            <p className="my-0 mx-[5px] text-lg">3</p>
            <BiBath size={"20px"} color={"white"} />
          </div>
          <div className="w-auto flex items-center justify-center">
            <p className="my-0 mx-[5px] text-lg">3</p>
            <BiCar size={"20px"} color={"white"} />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-around h-full">
        <div className="flex flex-col w-[30%] m-auto">
          <Items title="Tipe Properti" value="Rumah" />
          <Items title="Status" value="Dijual" />
          <Items title="Luas Tanah" value="123" unit="m" powerOf="2" />
          <Items title="Luas Bangunan" value="123" unit="m" powerOf="2" />
        </div>
        <div className="flex flex-col w-[30%] m-auto">
          <Items title="Daya Listrik" value="2200" unit="VA" />
          <Items title="Sertifikat" value="SHM-Sertifikat Hak Milik" />
          <Items title="Terdaftar Pada" value="1 bulan yang lalu" />
          <Items title="Orientasi" value="Timur" />
        </div>
        <div className="flex flex-col w-[30%] m-auto">
          <Items title="Dibangun Tahun" value="2015" />
          <Items title="Interior" value="furnished" />
          <Items title="Harga Tanah" value="Rp 12.000.000" unit="/m" powerOf="2" />
          <Items title="ID Listing" value="1234567890" />
        </div>
      </div>
    </div>
  );
};

export default FastDetail;
