import React from "react";
import {MdOutlineFastfood, MdOutlineShoppingBag} from "react-icons/md"


const Detail4 = () => {

  const Niga = ({Icon,title, time, range}:any) =>{
    return(
      <div className="items-center flex h-fit flex-row border-white rounded-[20px] border-solid border-[1px] p-3">
        <Icon size="25px" color="white"/>
        <div className="border-white border-solid h-full border-[1px] mx-2"/>
        <div className="flex flex-col">
        <h3 className="text-xl font-[500] truncate">{title}</h3>
        <p>sfdfsa</p>
        </div>
        <div className="flex flex-col">
          
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-[400px] " >
      <iframe className="" width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26685.406165907054!2d106.95837095837521!3d-6.156281948143083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1668830762853!5m2!1sen!2sid" loading="lazy"/>
      <div className="absolute p-6 left-[10%] top-[5%] bottom-[5%] h-[90%] w-[450px] flex flex-col rounded-[20px] text-white bg-gradient-to-br from-primary5 via-primary1 to-primary4">
        <header className="text-[24px] font-[600] rounded-[20px] ">Di Sekitar:</header>
        <body className="flex flex-col gap-2 outline-dashed max-h-fit overflow-auto">
        <Niga Icon={MdOutlineFastfood} title="McDonald's"/>
        <Niga Icon={MdOutlineShoppingBag} title="Summarecon Bekasi Mall (SMB)"/>
        <Niga Icon={MdOutlineFastfood}/>
        <Niga Icon={MdOutlineFastfood}/>
        <Niga Icon={MdOutlineFastfood}/>
        <Niga Icon={MdOutlineFastfood}/>
        <Niga Icon={MdOutlineFastfood}/>
        <Niga Icon={MdOutlineFastfood}/>
        </body>
      </div>
    </div>
  );
};

export default Detail4;
