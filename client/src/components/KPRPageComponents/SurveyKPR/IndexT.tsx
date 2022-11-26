import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MenuItem from "@mui/material/MenuItem";

const SurveyKPRT = () => {
  const [dpValue, setDpValue] = useState("tidak ada");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
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
  const BanyakCicilan = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 5,
      label: "5",
    },
    {
      value: 6,
      label: "5+",
    },
  ];
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
          />
        </div>
        <div className="w-96 my-3 border-solid border-[2px] border-primary4" />
        {/* Uang Muka */}
        <div className="flex justify-between">
          <label>Telah Menyediakan Uang Muka / DP:</label>
          <Tabs
            value={dpValue}
            onChange={handleChange}
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
            {BanyakCicilan.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="flex justify-between">
          <label>Penghasilan Bersih Bulanan:</label>
          <TextField
            hiddenLabel
            variant="outlined"
            type={"number"}
            placeholder="0"
            size="small"
          />
        </div>
      </form>
    </div>
  );
};

export default SurveyKPRT;
