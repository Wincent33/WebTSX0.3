import React from "react";
import NavBar from "../components/Common/NavBar/NavBar";
import MovingBackground from "../components/Common/MovingBackground";
import AuthLoggedOut from "../components/Common/AuthLoggedOut";
import Search1 from "../components/SearchPageComponents/Search1";
const SearchPage = () => {
  return (
    <div className="flex flex-col">
      {/* Top NavBar */}
      <div>
        <MovingBackground />
        <div className="flex justify-between items-center px-[100px] max-w-[2000px]">
          <img className="w-[200px] h-[100px] z-2" src="" alt="logo" />
          <NavBar />
          <AuthLoggedOut className="ml-30px" />
        </div>
      </div>
      <Search1 />
      <div className="bg-white">
        <></>
      </div>
    </div>
  );
};

export default SearchPage;
