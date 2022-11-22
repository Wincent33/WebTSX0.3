import React from "react";
import NavBar from "../../Common/NavBar/NavBar";
import AuthLoggedOut from "../../Common/AuthLoggedOut";
import BreadCrumbs from "./BreadCrumbs";
import FastDetail from "./FastDetail";
import ImageList from "./ImageList";
const Detail1 = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1800px] w-[90vw] ">
        <BreadCrumbs />
        <div className="flex w-[80vw] ml-[100px]">
          <h2 className="text-[36px] font-[700] my-[15px]">Judul Detail</h2>
        </div>
        <div className="flex flex-row justify-between items-center w-[90vw] h-fit mx-auto max-w-[1300px]">
          <FastDetail />
          <ImageList />
        </div>
      </div>
    </div>
  );
};

export default Detail1;
