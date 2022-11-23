import React from "react";
import NavBar from "../../Common/NavBar/NavBar";
import AuthLoggedOut from "../../Common/AuthLoggedOut";
import BreadCrumbs from "./BreadCrumbs";
import FastDetail from "./FastDetail";
import ImageList from "./ImageList";
const Detail1 = () => {
  return (
    <div className="bg-white max-h-[500px]">
      <div className="mx-auto max-w-[1200px]">
        <BreadCrumbs />
        <div className="flex w-full max-w-[1200px]">
          <h2 className="text-2xl font-bold my-[15px]">Judul Detail</h2>
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
