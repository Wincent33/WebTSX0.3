import React from "react";
// import HomeB1 from "../components/HomePageComponents/HomeB1.jsx";
import HomeB1 from "../components/HomePageComponents/Home1/HomeB1";
import HomeB2 from "../components/HomePageComponents/Home1/HomeB2";
const HomePage = () => {
  return (
    <div className="flex flex-col overflow-x-hidden mx-auto">
      <HomeB1 />
      <HomeB2 />
    </div>
  );
};

export default HomePage;
