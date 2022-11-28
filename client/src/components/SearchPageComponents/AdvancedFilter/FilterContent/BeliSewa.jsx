import React, { useState } from "react";
import "./style.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function BeliSewa(props: any) {
  const [status, setStatus] = useState("beli");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setStatus(newValue);
  };
  return (
    <div className="flex flex-col relative w-[300px] h-[100px] bg-primary1 blur-[3px] mx-auto break-all border-none rounded-3xl">
      <Tabs value={status} onChange={handleChange}>
        <Tab value="beli" label="beli" />
        <Tab value="jual" label="jual" />
      </Tabs>
    </div>
  );
}
