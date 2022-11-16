import React, { useState } from "react";
import { GrGoogle } from "react-icons/gr";
import { BsFacebook, BsApple, BsKey } from "react-icons/bs";
import { AiOutlineMail, AiFillWarning } from "react-icons/ai";
// import "./style.scss";
import ReactTooltip from "react-tooltip";
import validateEmail from "../../utils/validateEmail";
// import { valueContainerCSS } from "react-select/dist/declarations/src/components/containers";

const LoginForm = ({ setDaftar }: any) => {
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });
  const [errEmailMsg, setErrEmailMsg] = useState(false);
  const [errPassMsg, setErrPassMsg] = useState(false);
  const handleLoginOnChange = (e: any) => {
    const { name, value } = e.target;
    setLoginValue({
      ...loginValue,
      [name]: value,
    });
  };
  const emailSetter = () => {
    if (!validateEmail(loginValue.email) || loginValue.email) {
      setErrEmailMsg(true);
      return false;
    } else return true;
  };
  const passSetter = () => {
    if (loginValue.password === "") {
      setErrPassMsg(true);
      return false;
    } else return true;
  };
  const ErrDesc = ({ errorValue, errState }: any) => {
    if (errState === true) {
      return (
        <div className="flex">
          <AiFillWarning
            data-tip={errorValue}
            data-for="error"
            className="static right-0 text-primary4 h-[40px] w-[40px]"
          />
          <ReactTooltip
            className="min-w-max flex justify-center text-center"
            id="error"
            type="error"
            effect="solid"
            place="top"
            getContent={(dataTip: any) => `${dataTip}`}
          />
        </div>
      );
    } else return <></>;
  };
  const passErr = () => {
    if (errPassMsg === true) {
      if (loginValue.password === "") {
        return "Password Tidak Dapat Kosong";
      } else return "";
    } else return "";
  };

  const emailErr = () => {
    if (errEmailMsg === true) {
      if (loginValue.email === "") {
        return "Harap Masukan Email Anda";
      }
      if (!validateEmail(loginValue.email)) {
        return "Email Format is Not Valid";
      } else return "";
    } else return "";
  };

  const handleLoginOnSubmit = () => {
    passSetter();
    emailSetter();
    if (passSetter() && emailSetter()) {
      console.log("test failed");
    } else {
      console.log("test passed");
    }
  };
  return (
    <div className="m-0 flex flex-col items-center">
      <h3 className="m-0 mb-[20px] font-[800] text-[36px] underline ">
        Log In ke Website
      </h3>
      <div className="flex w-[350px] translate-x-[20px] m-[5px]">
        <div className="w-[300px] flex items-center rounded-[20px] h-[40px] bg-primary1">
          <AiOutlineMail className="text-white ml-[15px]" size={25} />
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            onChange={handleLoginOnChange}
            value={loginValue.email}
            autoComplete="off"
            className="bg-transparent w-[80%] border-none pl-[10px] text-[16px] font-[600] text-white focus:outline-none placeholder:text-[white]/50 "
          />
        </div>
        <ErrDesc errorValue={emailErr()} errState={errEmailMsg} />
      </div>
      <div className="flex w-[350px] translate-x-[20px] m-[5px]">
        <div className="w-[300px] flex items-center rounded-[20px] h-[40px] bg-primary1">
          <BsKey className="text-white ml-[15px]" size={25} />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleLoginOnChange}
            value={loginValue.password}
            className="bg-transparent w-[80%] border-none pl-[10px] text-[16px] font-[600] text-white focus:outline-none placeholder:text-[white]/50 "
          />
        </div>
        <ErrDesc errorValue={passErr()} errState={errPassMsg} />
      </div>
      <div className="flex flex-row mx-0 my-[10px] w-[60%] justify-around">
        <div className="flex flex-row justify-center items-center">
          <input type="checkbox" className="h-[15px]" />
          <h5 className="m-0">Ingat Saya</h5>
        </div>
        <div className="text-primary5 underline h-fit w-fit hover:text-[rgb(20,55,95)/0.5] cursor-pointer">
          <h5 className="m-0">Lupa Password</h5>
        </div>
      </div>
      <div
        className="flex justify-center items-center bg-[gray] w-200px text-center roudned-[50px]"
        onClick={handleLoginOnSubmit}
      >
        <h3 className="text-white mx-[30px] my-[5px]">Masuk</h3>
      </div>
      <h4>---atau---</h4>
      <h4>Masuk Menggunakan Pihak Ketiga:</h4>
      <div className="flex flex-row items-center justify-around w-[80px] h-[50px] m-[5px] rounded-[30px]">
        <div className="flex flex-row gap-[20px]">
          <div className="px-[40px] py-[10px] bg-[#de5246] rounded-[50px] hover:cursor-pointer ">
            <GrGoogle className="text-white" size={25} />
          </div>
          <div className="px-[40px] py-[10px] bg-[#4267b2] rounded-[50px] hover:cursor-pointer">
            <BsFacebook className="text-white" size={25} />
          </div>
          <div className="px-[40px] py-[10px] bg-[#161618] rounded-[50px] hover:cursor-pointer">
            <BsApple className=" text-white" size={25} />
          </div>
        </div>
      </div>
      <div className="w-[80%] m-0">
        <h5>
          <input type="checkbox" />
          Saya telah setuju dengan <a href="persyaratan">
            Persyaratan Layanan
          </a>{" "}
          dan <a href="kebijakan">Kebijakan Privasi</a> termasuk pengumpulan,
          penggunaan, dan pengungkapan informasi pribadi saya.
        </h5>
      </div>
      <div className="outline-[gray] outline-[1px] outline w-[90%] my-[10px] mx-0" />
      <div className="flex flex-col justify-center items-center">
        <h5 className="m-[3px]">
          Belum punya akun?{" "}
          <span
            className="text-[14px] underline text-primary5 hover:text-primary1 hover:cursor-pointer"
            onClick={() => setDaftar(false)}
          >
            Daftar Sekarang
          </span>
        </h5>
      </div>
    </div>
  );
};

export default LoginForm;
