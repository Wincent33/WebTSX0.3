import React, { useState } from "react";
// import "../../Assets/Styles/Global/Cards.scss";
import "./style.scss";
import { AiOutlineCalculator, AiOutlineCamera } from "react-icons/ai";
import { BiBed, BiBath, BiCar } from "react-icons/bi";
import { BsWhatsapp, BsTelephone } from "react-icons/bs";
import SimpleImageSlider from "react-simple-image-slider";
import { BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";
// import { Slide } from "react-slideshow-image";
// import LineEllipsis from "react-lines-ellipsis";
const SellerPhotoSrc =
  "https://images.unsplash.com/photo-1668441515735-39c4331a1fcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
const AgencyLogoSrc =
  "https://i1.au.reastatic.net/340x64/35cf0218ae06159ccac043664a51fd81578b2ff738f2c8037aa05ed10c14fac1/main.jpg";
export default function PropertyCards(props: any) {
  // const description =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt placerat hendrerit. Cras gravida nunc id lorem interdum pellentesque. In hac habitasse platea dictumst. Sed sit amet odio id turpis vulputate convallis sit amet a urna. Donec luctus hendrerit laoreet. Proin iaculis ipsum eros, vel fermentum elit tempor feugiat. Donec sit amet sapien vel lectus tempus tincidunt vitae eget neque.";;

  const [bookmark, setBookmark] = useState(false);
  const BookMarkBtn = () => {
    return (
      // Bookmark Icon
      <div
        className="static m-0 flex translate-x-[410px] -translate-y-[240px] w-fit duration-300 hover:scale-125"
        onClick={triggerBookmark}
      >
        {bookmark ? (
          <BsBookmarkCheck size={30} color="white" />
        ) : (
          <BsBookmarkCheckFill size={30} color="white" />
        )}
      </div>
    );
  };
  const triggerBookmark = () => {
    setBookmark(!bookmark);
    // console.log(bookmark);
  };
  // console.log(props);
  return (
    // Property Cards
    <div className="flex flex-col items-center gap-1 rounded-[40px] m-2 py-5 px-0 w-[450px] max-h-[700px]">
      {/* Top Card */}
      <div className="flex justify-between rounded-tl-2xl w-[400px] border-solid border-[1px] border-primary5">
        {/* Property Logo */}
        <div className="max-h-14 mt-5 mr-2 mb-2 ml-4 max-w-[200px]">
          <img
            className="object-cover"
            src={props.devLogo}
            alt="property logo"
          />
        </div>
        {/* Top Harga */}
        <div className="mt-2 mr-5 mb-1 ml-0 flex flex-col items-center gap-1">
          <h1 className="m-0 text-primary5 text-2xl font-extrabold">
            {props.harga}
          </h1>
          <h5 className="font-black text-[gray] m-0">
            {" "}
            Cicilan: {props.cicilan} jutaan/bulan
          </h5>
        </div>
      </div>
      {/* Property Image */}
      <div className="h-[250px] w-[450px] p-0 border-[1px] border-solid border-primary5 -z-[1]">
        <SimpleImageSlider
          navSize={30}
          height={250}
          width={450}
          images={props.images}
          showBullets={true}
          showNavs={true}
        />
        <BookMarkBtn />
        {/* Jenis */}
        <div className="absolute flex -translate-y-[280px] w-fit rounded-tr-lg  bg-primary5 bg-opacity-5">
          <label className="text-lg my-1 mx-4 text-white">
            {props.jenisProperti}
          </label>
        </div>
        {/* Total Images */}
        <div className="absolute flex flex-col justify-between items-end translate-x-[395px] -translate-y-[70px]">
          {/* Total Images Content */}
          <div className="flex gap-2 text-white p-2 rounded-tr-lg bg-primary5 bg-opacity-80">
            <AiOutlineCamera size={"20px"} color={"white"} />
            <h5 className="m-0">{props.imageTotal}</h5>
          </div>
        </div>
      </div>
      {/* Mid Card */}
      <div className="w-[400px] flex justify-between border-solid border-primary5 border-[1px]">
        {/* Mid Card Info */}
        <div className="flex flex-col">
          <h2 className="text-xl m-0 ml-2 text-primary5 hover:underline hover:cursor-pointer">
            {props.judul}
          </h2>
          <p className="m-0 ml-2 flex hover:underline hover:cursor-pointer">
            {props.kecamatanValue}, {props.kabupatenValue},{" "}
            {props.provinsiValue}
          </p>
          {/* Card Info Tags */}
          <div className="flex justify-start gap-x-2 mt-2 ml-2">
            {/* Card Info Tags Content */}
            <div className="flex items-center bg-primary5 justify-center py-1 px-2 text-white rounded-3xl font-normal gap-1 ">
              <BiBed color={"white"} size={"60px"} />
              <h5 className="items-center m-0 justify-center flex ">
                {props.jumlahKamar}
              </h5>
            </div>
            <div className="flex items-center bg-primary5 justify-center py-1 px-2 text-white rounded-3xl font-normal gap-1 ">
              <BiBath color={"white"} size={"60px"} />
              <h5 className="items-center m-0 justify-center flex ">
                {props.jumlahWC}
              </h5>
            </div>
            <div className="flex items-center bg-primary5 justify-center py-1 px-2 text-white rounded-3xl font-normal gap-1 ">
              <BiCar color={"white"} size={"60px"} />
              <h5 className="items-center m-0 justify-center flex ">
                {props.jumlahParkir}
              </h5>
            </div>
            <div className="flex items-center bg-primary5 justify-center py-1 px-2 text-white rounded-3xl font-normal gap-1 ">
              <h5 className="items-center m-0 justify-center flex ">
                {props.jumlahLantai} lt
              </h5>
            </div>
          </div>
          {/* Card-LuasTanah-LuasBangunan */}
          <div className="flex gap-5 ml-4">
            <h5 className="m-0 font-extrabold text-primary5">
              LT: {props.luasTanah} m<sup>2</sup>
            </h5>
            <h5 className="m-0 font-extrabold text-primary5">
              LB: {props.luasBangunan} m<sup>2</sup>
            </h5>
          </div>
        </div>
        {/* Simulator KPR Btn */}
        <div className="flex flex-col justify-center items-center bg-primary5 h-full gap-1 px-2 hover:bg-primary4 hover:cursor-pointer">
          <AiOutlineCalculator size={"40px"} color={"white"} />
          <h5 className="text-white m-0">Kalkulator</h5>
          <h5 className="text-white m-0"> KPR</h5>
        </div>
      </div>
      {/* Bot Card */}
      <div className="w-[400px] flex rounded-b-[20px] border-[1px] border-solid border-primary5 justify-between">
        {/* Seller Img Info */}
        <div className="px-4 flex gap-4">
          {/* Seller Pics */}
          <div className="flex items-center justify-center">
            <img
              className="rounded-[50px] w-12 h-12"
              src={SellerPhotoSrc}
              alt="seller"
            />
          </div>
          {/* Seller Info */}
          <div className="flex flex-col items-start">
            <h5 className="text-primary5 m-0 mt-2 font-medium">
              {props.sellerName}
            </h5>
            {/* Agency img */}
            <img className="max-h-40px m-0" src={AgencyLogoSrc} alt="" />
          </div>
        </div>
        Seller Contact
        <div className="flex items-center justify-end">
          <BsWhatsapp
            className="w-12 h-12 px-2 hover:cursor-pointer"
            color={"white"}
            size={"60px"}
          />
          <BsTelephone
            className="w-12 h-12 px-2 hover:cursor-pointer"
            color={"white"}
            size={"60px"}
          />
        </div>
      </div>
    </div>
  );
}
