import React, { useState } from "react";
import { GrGoogle } from "react-icons/gr";
import { BsFacebook, BsApple, BsKey } from "react-icons/bs";
import { AiOutlineUser, AiOutlineMail, AiFillWarning } from "react-icons/ai";
import { submitDaftar } from "../../api/submitAPI";
import ReactTooltip from "react-tooltip";
import validateEmail from "../../utils/validateEmail";
// import "./style.scss";
const DaftarForm = ({ setDaftar }: any) => {
  const [daftarValue, setDaftarValue] = useState({
    email: "",
    user_name: "",
    password: "",
    repassword: "",
  });
  const [errUserMsg, setErrUserMsg] = useState(false);
  const [errPassMsg, setErrPassMsg] = useState(false);
  const [errEmailMsg, setErrEmailMsg] = useState(false);
  const handleDaftarOnChange = (e: any) => {
    const { name, value } = e.target;
    setDaftarValue({
      ...daftarValue,
      [name]: value,
    });
    setErrUserMsg(false);
    setErrPassMsg(false);
    setErrEmailMsg(false);
  };
  const handleDaftarOnSubmit = submitDaftar(daftarValue);

  const userSetter = () => {
    if (daftarValue.user_name === "") {
      setErrUserMsg(true);
      return false;
    } else return true;
  };
  const emailErrSetter = () => {
    if (!validateEmail(daftarValue.email) || daftarValue.email === "") {
      setErrEmailMsg(true);
      return false;
    } else return true;
  };
  const passwordErrSetter = () => {
    if (
      daftarValue.password !== daftarValue.repassword ||
      daftarValue.password === ""
    ) {
      setErrPassMsg(true);
      return false;
    } else return true;
  };

  const daftarFormDiscipline = () => {
    passwordErrSetter();
    emailErrSetter();
    userSetter();
    if (passwordErrSetter() && emailErrSetter() && userSetter()) {
      console.log("test failed");
    } else {
      handleDaftarOnSubmit();
      console.log("test passed");
    }
  };

  const ErrDesc = ({ errorValue, errState }: any) => {
    if (errState === true) {
      return (
        <div className="flex ">
          <AiFillWarning
            data-tip={errorValue}
            data-for="error"
            className="static right-0 text-[#de5246] h-[40px] w-[40px]"
          />
          <ReactTooltip
            className="flex justify-center text-center min-w-max"
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

  const UserErr = () => {
    if (errUserMsg === true) {
      if (daftarValue.user_name === "") {
        return "Username tidak dapat kosong";
      }
      if (!validateEmail(daftarValue.email)) {
        return "Email is not Valid";
      } else return "";
    } else return "";
  };
  const EmailErr = () => {
    if (errEmailMsg === true) {
      if (daftarValue.email === "") {
        return "Harap Masukan Email Anda";
      }
      if (!validateEmail(daftarValue.email)) {
        return "Email is not Valid";
      } else return "";
    } else return "";
  };
  const PassErr = () => {
    if (errPassMsg === true) {
      if (daftarValue.password !== daftarValue.repassword) {
        return "Password Tidak Sama";
      }
      if (daftarValue.password === "") {
        return "Password Tidak Dapat Kosong";
      } else return "";
    } else return "";
  };
  return (
    <div className="m-0 flex flex-col items-center">
      <h3 className="m-0 mb-[20px] text-[36px] font-[800] underline">
        Daftar ke website
      </h3>
      <div className="flex w-[350px] translate-x-[20px] m-[5px]">
        <div className="w-[300px] flex items-center rounded-[20px] h-[40px] bg-primary1">
          <AiOutlineUser className="text-white ml-[15px]" size={25} />
          <input
            type="text"
            name="user_name"
            onChange={handleDaftarOnChange}
            placeholder="Username"
            value={daftarValue.user_name}
            autoComplete="off"
            className="bg-transparent w-[80%] text-white border-none px-[20px] text-16px font-[600] focus:outline-none placeholder:text-[rgba(255, 255, 255, 0.5)]"
          />
        </div>
        <ErrDesc errorValue={UserErr()} errState={errUserMsg} />
      </div>
      <div className="flex w-[350px] translate-x-[20px] m-[5px]">
        <div className="w-[300px] flex items-center rounded-[20px] h-[40px] bg-primary1">
          <AiOutlineMail className="text-white ml-[15px]" size={25} />
          <input
            type="email"
            name="email"
            onChange={handleDaftarOnChange}
            placeholder="E-mail"
            value={daftarValue.email}
            autoComplete="off"
            className="bg-transparent w-[80%] text-white border-none px-[20px] text-16px font-[600] focus:outline-none placeholder:text-[rgb(255,255,255)/0.5]"
          />
        </div>
        <ErrDesc errorValue={EmailErr()} errState={errEmailMsg} />
      </div>
      <div className="flex w-[350px] translate-x-[20px] m-[5px]">
        <div className="w-[300px] flex items-center rounded-[20px] h-[40px] bg-primary1">
          <BsKey className="text-white ml-[15px]" size={25} />
          <input
            type="password"
            name="password"
            onChange={handleDaftarOnChange}
            placeholder="Password"
            value={daftarValue.password}
            className="bg-transparent w-[80%] text-white border-none px-[20px] text-16px font-[600] focus:outline-none placeholder:text-[rgb(255,255,255)/0.5]"
          />
        </div>
      </div>

      <div className="flex w-[350px] translate-x-[20px] m-[5px]">
        <div className="w-[300px] flex items-center rounded-[20px] h-[40px] bg-primary1">
          <BsKey className="text-white ml-[15px]" size={25} />
          <input
            type="password"
            name="repassword"
            onChange={handleDaftarOnChange}
            placeholder="Re-enter Password"
            value={daftarValue.repassword}
            className="bg-transparent w-[80%] text-white border-none px-[20px] text-16px font-[600] focus:outline-none placeholder:text-[rgb(255,255,255)/0.5]"
          />
        </div>
        <ErrDesc errorValue={PassErr()} errState={errPassMsg} />
      </div>
      <div
        className="flex justify-center items-center bg-[gray] w-[200px] text-center  rounded-[50px] mt-[10px] hover:cursor-pointer"
        onClick={daftarFormDiscipline}
      >
        <h3 className="text-white mx-[30px] my-[5px]">Daftar</h3>
      </div>
      <h4 className="my-[10px] mx-0">---atau---</h4>
      <h4>Daftar Menggunakan Pihak Ketiga:</h4>
      <div className="flex flex-row items-center justify-around w-[80px] h-[50px] m-[5px] rounded-[30px]">
        <div className="flex flex-row gap-[20px]">
          <div className="py-[10px] px-[40px] bg-[#de5246] rounded-[50px] hover:cursor-pointer">
            <GrGoogle className="text-white" size={25} />
          </div>
          <div className="py-[10px] px-[40px] bg-[#4267b2] rounded-[50px] hover:cursor-pointer">
            <BsFacebook className="text-white" size={25} />
          </div>
          <div className="py-[10px] px-[40px] bg-[#161618] rounded-[50px] hover:cursor-pointer">
            <BsApple className="text-white" size={25} />
          </div>
        </div>
      </div>
      <div className="w-[80%] m-0">
        <h5 className="m-[5px] text-[14px]">
          <input type="checkbox" />
          Saya telah setuju dengan <a href="persyaratan">
            Persyaratan Layanan
          </a>{" "}
          dan <a href="kebijakan">Kebijakan Privasi</a> termasuk pengumpulan,
          penggunaan, dan pengungkapan informasi pribadi saya.
        </h5>
        <h5 className="m-[5px] text-[14px]">
          <input type="checkbox" />
          Kirimkan saya berita listing rumah, data properti, dan penawaran baru.
        </h5>
      </div>
      <div className="outline outline-[gray] outline-[1px] w-[90%] mx-0 my-[10px]" />
      <div className="flex flex-col justify-center items-center">
        <h5 className="m-[3px]">
          Sudah punya akun?{" "}
          <span
            className="text-[14px] underline text-primary5 hover:text-primary1 hover:cursor-pointer"
            onClick={() => setDaftar(true)}
          >
            Log In Sekarang
          </span>
        </h5>
        <h5 className="m-[3px]">
          Ingin daftar sebagai agen properti?{" "}
          <span className="text-[14px] underline text-primary5 hover:text-primary1 hover:cursor-pointer">
            Daftar Sebagai Agen
          </span>
        </h5>
      </div>
    </div>
  );
};

export default DaftarForm;
