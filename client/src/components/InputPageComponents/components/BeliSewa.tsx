import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function BeliSewa(props: any) {
  const [status, setStatus] = useState("dijual");
  const handleChange = (event: any, newValue: any) => {
    setStatus(newValue);
  };
  return (
    <div className="flex flex-col items-center justify-center relative w-fit h-[100px] bg-transparent  mx-auto break-all border-none rounded-3xl">
      <Tabs
        value={status}
        onChange={handleChange}
        TabIndicatorProps={{
          sx: { backgroundColor: "#ee6c4d", height: 5 },
        }}
        sx={{
          "& button": { fontSize: 40, borderRadius: 2, fontWeight: 900 },
          "& button:active": { color: "#3d5a80" },
          "& button.Mui-selected": { color: "#ee6c4d" },
        }}
      >
        <Tab value="dijual" label="dijual" />
        <Tab value="disewa" label="disewa" />
      </Tabs>
    </div>
  );
}
