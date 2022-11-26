import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { GoInfo } from "react-icons/go";
import { TextField } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import { RiMailSendLine } from "react-icons/ri";
import { ImWhatsapp, ImPhone } from "react-icons/im";
const Detail5 = () => {
  const percentage = [
    {
      value: 0,
      label: "0%",
    },
    {
      value: 50,
      label: "50%",
    },
  ];
  const [persen, setPersen] = useState(20);
  const hargaProperti = 2000000000;
  const handleOnChange = (event: any, newValue: any) => {
    setPersen(newValue);
  };
  const uangMuka = (persen / 100) * hargaProperti;
  const SubmitBtn = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText("#3d5a80"),
    backgroundColor: "#3d5a80",
    borderRadius: "12px",
    "&:hover": {
      backgroundColor: "#293241",
    },
  }));
  return (
    <div className="flex flex-row justify-between gap-4 w-[90vw] mx-auto max-w-[1200px] h-fit">
      <div className="flex flex-col w-full bg-transparent border-solid border-2 border-primary4 rounded-3xl  p-5">
        <text className="text-2xl font-bold">Simulasi KPR</text>
        <p className="text-xl font-bold">
          Harga Properti: Rp {hargaProperti.toLocaleString()}
        </p>
        <p>Persentase Uang Muka: </p>
        <div className="w-full mx-auto my-10">
          <Slider
            min={0}
            max={50}
            defaultValue={persen}
            value={persen}
            aria-label="Default"
            marks={percentage}
            valueLabelDisplay="on"
            onChange={handleOnChange}
            valueLabelFormat={(value) => (
              <div className="text-base">{value}%</div>
            )}
          />
          <div className="flex flex-row">
            <GoInfo size={20} color={"black"} />
            <label className="text-sm text-black">
              Direkomendasikan Uang Muka Minimal 20% dari harga properti
            </label>
          </div>
          <p className="text-lg">
            Uang Muka(DP): Rp {uangMuka.toLocaleString()}
          </p>
        </div>
      </div>
      {/* Hubungi Agen Section */}
      <div className="flex flex-col relative p-4 w-full gap-4 rounded-3xl bg-transparent border-solid border-2 h-fit border-primary1">
        {/* Judul */}
        <div className="text-3xl font-bold">Hubungi Agen</div>
        {/* Foto Agensi */}
        <img
          className="max-h-16 w-fit absolute right-4 top-4"
          src="https://seeklogo.com/images/E/era-real-estate-logo-848C513165-seeklogo.com.png"
          alt="agency"
        />
        {/* Hubungi Agen Content */}
        <div className="w-full h-fit flex flex-col gap-4">
          {/* Hubungi Agen Top */}
          <div className="flex flex-row gap-4">
            {/* Hubungi Agen Top Left */}
            <div className="flex flex-col w-[50%] justify-center items-center">
              <img
                className="w-20 h-20 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1669178082499-341906b2ab28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80"
                alt="dew"
              />
              <p className="text-xl font-bold">Nama Agen</p>
              <p className="">nama agency/properti</p>
            </div>
            {/* Hubungi Agen Top Right */}
            <div className="flex flex-col w-[50%] justify-around">
              <p className="flex flex-row gap-1 text-white text-lg font-bold items-center bg-[#25D366] p-2 rounded-xl w-fit">
                <ImWhatsapp className="" size={"25px"} color={"white"} />
                +62 120321421
              </p>
              <p className="flex flex-row gap-1 text-white text-lg font-bold items-center  bg-primary5 p-2 rounded-xl w-fit">
                <ImPhone className="" size={"25px"} color={"white"} />
                +62 120321421
              </p>
            </div>
          </div>
          {/* Hubungi Agen Input Fields */}
          <div className="flex flex-col gap-4 w-full h-fit">
            {/* Input Top */}
            <div className="flex flex-row gap-4 justify-between">
              <TextField className="w-full" label="Nama" variant="filled" />
              <TextField className="w-full" label="Email" variant="filled" />
            </div>
            {/* Input Bot */}
            <TextField
              className="w-full h-full"
              multiline
              label="Pesan"
              variant="filled"
              rows={4}
            />
          </div>
          {/* Submit Button */}
          <div className="w-full flex justify-center">
            <SubmitBtn
              className="w-[80%] h-14"
              size="large"
              variant="contained"
            >
              Kirim Pesan
              <RiMailSendLine className="mx-4" size={"20px"} color={"white"} />
            </SubmitBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail5;
