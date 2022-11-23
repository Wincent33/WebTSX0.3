import React, { useState } from "react";
// import "./style.scss";
const ReadMore = ({ children }: any) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const Collapsed = () => {
    return (
      <div className="w-full h-full">
        <div className=" max-w-[1200px] h-[70%]  w-full absolute z-4 bg-gradient-to-t from-white via-white to-transparent "></div>
        <p className="text-base my-[10px] mx-0 duration-[2000]">
          {text.slice(0, 720)}
        </p>
        <div
          onClick={toggleReadMore}
          className="flex justify-center bg-primary4 rounded-b-[50px] w-full max-w-full relative z-5 py-[15px] px-0 text-white text-2xl font-[900] items-center hover:cursor-pointer hover:scale-105 duration-200"
        >
          V Read More V
        </div>
      </div>
    );
  };
  const NotCollapsed = () => {
    return (
      <div>
        <p className="text-base my-[10px] mx-0">{text}</p>
        <div
          onClick={toggleReadMore}
          className="flex justify-center bg-primary4 rounded-b-[50px] w-full max-w-full relative z-5 py-[15px] px-0 text-white text-2xl font-[900] items-center hover:cursor-pointer"
        >
          Show Less
        </div>
      </div>
    );
  };

  return (
    <div className="flex w-full">
      {isReadMore ? <Collapsed /> : <NotCollapsed />}
    </div>
  );
};

export default ReadMore;
