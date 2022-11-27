import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MenuItem from "@mui/material/MenuItem";
const BanyakKredit = require("./banyakKredit.json");
const LamaCicilan = require("./lamaCicilan.json");
const Pekerjaan = require("./pekerjaan.json");
const SurveyKPRT = () => {
  const [dpValue, setDpValue] = useState("tidak ada");
  const handleDpChange = (event: React.SyntheticEvent, newValue: string) => {
    setDpValue(newValue);
  };
  const DpForm = () => {
    if (dpValue === "ada") {
      return (
        <div className="flex flex-col gap-5">
          <div className="flex flex-row justify-between">
            <label className="flex items-center text-l">
              Nominal Uang Muka:
            </label>
            <TextField
              hiddenLabel
              helperText={"1,2 miliar"}
              variant="outlined"
              type={"number"}
              placeholder="0"
              size="small"
              InputProps={{
                startAdornment: <p className="text-[gray] mr-2">Rp</p>,
              }}
            />
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  };
  const [cclValue, setCclValue] = useState("tidak ada");
  const handleCclChange = (event: React.SyntheticEvent, newValue: string) => {
    setCclValue(newValue);
  };
  const CclForm = () => {
    if (cclValue === "ada") {
      return (
        <div className="flex flex-col gap-5">
          <div className="flex flex-row justify-between">
            <label className="flex items-center text-l">
              Nominal Total Cicilan Saat Ini:
            </label>
            <TextField
              hiddenLabel
              variant="outlined"
              type={"number"}
              placeholder="0"
              size="small"
            />
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  };

  return (
    //SurveyKPR Container
    <div className="flex flex-col justify-center mx-auto">
      {/* Judul */}
      <div className="flex flex-col w-[500px] m-auto">
        <h1 className="text-4xl">Ketahui Kemampuan Anda</h1>
        <p>
          coba isi formulir dibawah dengan data terkini dan seakurat mungkin
          <br />
          untuk mengetahui kemampuan pembiayaan properti (KPA/KPR/KPT).
        </p>
      </div>
      {/* KPR Form */}
      <form className="w-[500px] m-auto">
        {/* Harga Properti */}
        <div className="flex justify-between">
          <label>Harga Properti:</label>
          <TextField
            hiddenLabel
            variant="outlined"
            type={"number"}
            placeholder="0"
            size="small"
            InputProps={{
              startAdornment: <p className="text-[gray] mr-2">Rp</p>,
            }}
          />
        </div>
        <div className="w-96 my-3 border-solid border-[2px] border-primary4" />
        {/* Uang Muka */}
        <div className="flex justify-between">
          <label>Telah Menyediakan Uang Muka / DP:</label>
          <Tabs
            value={dpValue}
            onChange={handleDpChange}
            aria-label="wrapped label tabs example"
          >
            <Tab value="ada" label="ada" />
            <Tab value="tidak ada" label="tidak ada" />
          </Tabs>
        </div>
        <DpForm />
        <div className="w-96 my-3 border-solid border-[2px] border-primary4" />
        {/* Personal Questions */}
        <div className="flex justify-between">
          <label>Banyak Kredit Berjalan Saat Ini:</label>
          <TextField
            className="w-[42%]"
            hiddenLabel
            variant="outlined"
            select
            size="small"
          >
            {BanyakKredit.map((option: any) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="flex justify-between">
          <label>Penghasilan Bersih Bulanan:</label>
          <TextField
            InputProps={{
              startAdornment: <p className="text-[gray] mr-2">Rp</p>,
            }}
            hiddenLabel
            variant="outlined"
            type={"number"}
            placeholder="0"
            size="small"
          />
        </div>
        <div className="w-96 my-3 border-solid border-[2px] border-primary4" />
        {/* Cicilan Bulanan */}
        <div className="flex justify-between">
          <label>Memiliki Cicilan Bulanan yang Berlangsung:</label>
          <Tabs
            value={cclValue}
            onChange={handleCclChange}
            aria-label="wrapped label tabs example"
          >
            <Tab value="ada" label="ada" />
            <Tab value="tidak ada" label="tidak ada" />
          </Tabs>
        </div>
        <CclForm />
        <div className="w-96 my-3 border-solid border-[2px] border-primary4" />
        {/* Lama Cicilan */}
        <div className="flex justify-between">
          <label>Lama Cicilan/Angsuran yang ingin diajukan:</label>
          <TextField
            className="w-[50%]"
            hiddenLabel
            variant="outlined"
            select
            size="small"
          >
            {LamaCicilan.map((option: any) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="w-96 my-3 border-solid border-[2px] border-primary4" />
        {/* Pekerjaan */}
        <div className="flex justify-between">
          <label>Pekerjaan Saat Ini:</label>
          <TextField
            className="w-[50%]"
            hiddenLabel
            variant="outlined"
            select
            size="small"
          >
            {Pekerjaan.map((option: any) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row justify-between">
            <label className="flex items-center text-l">Usia Sekarang:</label>
            <TextField
              hiddenLabel
              helperText={"1,2 miliar"}
              variant="outlined"
              type={"number"}
              placeholder="21"
              required
              error
              size="small"
              InputProps={{
                endAdornment: <p className="text-[gray]">Tahun</p>,
              }}
            />
          </div>
        </div>
      </form>
      <div className="m-auto w-[500px]">
        <p className="text-[gray]">
          Dengan klik tombol di bawah ini, Anda menyetujui Syarat dan Ketentuan
          serta Kebijakan Privasi Pinhome yang berlaku. Data dan informasi Anda
          tidak akan disebarluaskan tanpa persetujuan Anda.
        </p>
        <button className="w-[500px] h-[50px]">Lihat Kemampuan Anda</button>
      </div>
    </div>
  );
};

export default SurveyKPRT;
