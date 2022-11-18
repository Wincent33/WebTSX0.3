import React from "react";
import MovingBackground from "../components/Common/MovingBackground";
// import "./style.scss";
import NavBar from "../components/Common/NavBar/NavBar";
import AuthLoggedOut from "../components/Common/AuthLoggedOut";
import BreadCrumbs from "../components/DetailPageComponents/Detail1/BreadCrumbs.tsx";
import ImageList from "../components/DetailPageComponents/Detail1/ImageList";
import FastDetail from "../components/DetailPageComponents/Detail1/FastDetail.tsx";
import Detail2 from "../components/DetailPageComponents/Detail2";
import Detail3 from "../components/DetailPageComponents/Detail3";
function DetailPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <MovingBackground />
      <div className="flex justify-between items-center py-0 px-[50px] max-w-[1500]">
        <img className="w-[200px] h-[100px] z-2" src="" alt="logo" />
        <NavBar />
        <AuthLoggedOut className="ml-[30px]" />
      </div>
      <div className="bg-white">
        <BreadCrumbs />
        <div className="flex w-[80vw] ml-[100px]">
          <h2 className="text-[36px] font-[700] my-[15px]">Judul Detail</h2>
        </div>
        <div className="flex flex-row justify-center items-center w-fit h-fit ml-[80px] max-w-[1300px]">
          <FastDetail />
          <ImageList />
        </div>
      </div>
      <Detail2 />
      <Detail3 />
    </div>
  );
}

export default DetailPage;
