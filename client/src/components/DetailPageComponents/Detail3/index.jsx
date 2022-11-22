import React from "react";
import FiturDetail from "../Detail3/FasilitasDetail";
import ImageList from "../Detail3/ImageList";
const Detail3 = () => {
  return (
    <div className="flex flex-col w-fit h-fit mx-auto max-w-[1800px]">
      <h1 className="text-[36px] font-[700]">Fitur</h1>
      <div className="flex flex-row justify-center items-center">
        <ImageList />
        <FiturDetail />
      </div>
    </div>
  );
};

export default Detail3;
