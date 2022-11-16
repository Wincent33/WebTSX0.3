import React, { useState } from "react";
// import "./style.scss";
import LoginForm from "./components/LoginForm";
import DaftarForm from "./components/DaftarForm";

function LoginDaftarPopUp(props: any) {
  if (props.trigger) {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-[black]/50 flex justify-center items-center z-50 text-black">
        <div className=" relative bg-white p-[32px] max-w-[550px] max-h-[700px]  overflow-x-hidden overflow-y-hidden rounded-[50px]">
          <button
            className="absolute top-[16px] right-[16px]"
            onClick={() => {
              props.setTrigger(false);
            }}
          >
            Close
          </button>
          <LoginContent />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
export default LoginDaftarPopUp;

const LoginContent = () => {
  const [daftar, setDaftar] = useState(true);
  if (daftar) {
    return <LoginForm setDaftar={setDaftar} />;
  } else {
    return <DaftarForm setDaftar={setDaftar} />;
  }
};
