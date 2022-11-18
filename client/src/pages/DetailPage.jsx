import React from "react";
import MovingBackground from "../components/Common/MovingBackground";
import "./style.scss";
import NavBar from "../components/Common/NavBar/NavBar";
import AuthLoggedOut from "../components/Common/AuthLoggedOut";
import BreadCrumbs from "../components/DetailPageComponents/Detail1/BreadCrumbs";
import ImageList from "../components/DetailPageComponents/Detail1/ImageList";
import FastDetail from "../components/DetailPageComponents/Detail1/FastDetail";
// import Detail2 from "../../Components/DetailPageComponents/Detail2";
// import Detail3 from "../../Components/DetailPageComponents/Detail3";
function DetailPage() {
  return (
    <div className="detail-page">
      <MovingBackground />
      <div className="navbar">
        <img className="company-logo" src="" alt="logo" />
        <NavBar />
        <AuthLoggedOut />
      </div>
      <BreadCrumbs />
      <div className="detail-judul">
        <h2>Judul Detail</h2>
      </div>
      <div className="detail-top">
        <FastDetail />
        <ImageList />
      </div>
      {/* <Detail2 />
      <Detail3 /> */}
    </div>
  );
}

export default DetailPage;
