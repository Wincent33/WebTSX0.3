import React from "react";
import { MdOutlineFastfood, MdOutlineShoppingBag } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RiMotorbikeLine, RiCarLine } from "react-icons/ri";
const Detail4 = () => {
  const Item = ({
    Icon = AiOutlineQuestionCircle,
    title = "title",
    durationBike = 1,
    durationCar = 1,
    range = 1,
  }: any) => {
    const truncate = (str: string) => {
      return str.length > 25 ? str.substring(0, 22) + "..." : str;
    };

    return (
      <div className="items-center flex h-fit flex-row border-white rounded-[20px] border-solid border-[1px] p-3 hover:scale-105 hover:cursor-pointer duration-200">
        <Icon size="25px" color="white" />
        <div className="border-white border-solid h-full border-[1px] mx-2" />

        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <h3 className="text-xl font-[500] text-ellipsis">
              {truncate(title)}
            </h3>
            <p>{range} km</p>
          </div>
          <div className="flex flex-col min-w-fit justify-around min-h-full  ">
            <div className="flex flex-row m-1">
              <RiMotorbikeLine size="20px" color="white" />
              <p>{durationBike} menit</p>
            </div>
            <div className="flex flex-row m-1">
              <RiCarLine size="20px" color="white" />
              <p>{durationCar} menit</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full h-[400px] ">
      <iframe
        className=""
        width="100%"
        height="100%"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26685.406165907054!2d106.95837095837521!3d-6.156281948143083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1668830762853!5m2!1sen!2sid"
        loading="lazy"
      />
      <div className="absolute left-[10%] top-[5%] bottom-[5%] h-[90%] w-[450px] flex flex-col rounded-[20px] text-white bg-gradient-to-br from-primary5 via-primary1 to-primary4">
        <header className="text-[24px] font-[600] rounded-[20px] mt-6 mx-6 mb-1 ">
          Di Sekitar:
        </header>
        <body className="flex flex-col gap-2 max-h-fit overflow-auto p-4 overflow-x-hidden" >
          <Item Icon={MdOutlineFastfood} title="McDonald's" />
          <Item
            Icon={MdOutlineShoppingBag}
            title="Summarecon Bekasi Mall (SMB)"
          />
          <Item />
          <Item />
          <Item />
          <Item />
        </body>
      </div>
    </div>
  );
};

export default Detail4;
