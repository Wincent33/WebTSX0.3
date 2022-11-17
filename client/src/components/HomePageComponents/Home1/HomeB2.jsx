import Slider from "react-slick";
// import "./HomeB2.scss";
import HomeCards from "../../Common/HomeCards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="absolute right-[-4%] top-[50%] bg-[rgba(238,108,77,0.8)] w-[50px] h-[50px] rounded-[20px] z-1 transition-[500] hover:bg-primary4 hover:text-[black] hover:cursor-pointer hover:scale-105  "
      style={{ ...style }}
      // style={{ ...style, display: "flex", position:"absolute",right:"0", top:"45%", justifyContent:"center",alignItems:"center", height:"30px", width:"30px", background: "red", borderRadius:"20px" }}
      onClick={onClick}
    >
      <GrLinkNext className="flex p-0 text-[50px] invert" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="absolute left-[-4%] top-[50%] bg-[rgba(238,108,77,0.8)] w-[50px] h-[50px] rounded-[20px] z-1 transition-[500] hover:bg-primary4 hover:text-[black] hover:cursor-pointer hover:scale-105"
      style={{ ...style }}
      // style={{ ...style, display: "flex", position:"absolute",right:"0", top:"45%", justifyContent:"center",alignItems:"center", height:"30px", width:"30px", background: "red", borderRadius:"20px" }}
      onClick={onClick}
    >
      <GrLinkPrevious className="flex p-0 text-[50px] invert" />
    </div>
  );
}

function HomeB2() {
  var settings = {
    className: "w-[1200px] flex",
    infinite: false,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: false,
    // autoplaySPeed: 10000,
    // centerMode: true,
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-[36px] font-bold">Newly Listed Property</h2>
      <Slider {...settings}>
        <div className="m-[10px] flex w-[max-content_!important] h-max justify-center items-center translate-x-[15px]">
          <HomeCards />
        </div>
        <div className="m-[10px] flex w-[max-content_!important] h-max justify-center items-center translate-x-[15px]">
          <HomeCards />
        </div>
        <div className="m-[10px] flex w-[max-content_!important] h-max justify-center items-center translate-x-[15px]">
          <HomeCards />
        </div>
        <div className="m-[10px] flex w-[max-content_!important] h-max justify-center items-center translate-x-[15px]">
          <HomeCards />
        </div>
        <div className="m-[10px] flex w-[max-content_!important] h-max justify-center items-center translate-x-[15px]">
          <HomeCards />
        </div>
        <div className="m-[10px] flex w-[max-content_!important] h-max justify-center items-center translate-x-[15px]">
          <HomeCards />
        </div>
      </Slider>
    </div>
  );
}

export default HomeB2;
