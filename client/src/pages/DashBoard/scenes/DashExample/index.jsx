import React from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import StatBox from "../../components/StatBox";
import LineChart from "../../components/LineChart";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineRealEstateAgent } from "react-icons/md";
const DashExample = () => {
  const TopStats = ({number, title}) => {
    return (
      <Box className="bg-primary4 h-fit w-fit p-2 text-center rounded-xl">
        <h1 className="text-2xl font-bold">{number}</h1>
        <h5 className="text-xl">{title}</h5>
      </Box>
    );
  };
  return (
    <Box className="m-5">
      {/* Title dan Report */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD UTAMA" subtitle="Selamat Datang, Joko" />
        <Box>
          <Button
            sx={{
              backgroundColor: "#ee6c4d",
              color: "white",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      {/* Content */}
      <div className="flex flex-col gap-5">
        {/* Stats */}
        <div className="flex flex-row gap-5 justify-start">
          <div className="flex flex-col items-center h-fit w-fit p-5 rounded-3xl bg-primary5 gap-3">
            <div className="flex flex-row justify-center items-center gap-2">
              <AiOutlineMail size={40} color="white" />
              <h1 className="text-3xl">Pesan</h1>
            </div>
            <div className="w-[70%] mx-5 h-1 bg-white" />
            <div className="flex flex-row gap-5">
              <TopStats number={14} title="Pesan Baru"/>
              <TopStats number={14} title="Kotak Pesan"/>
              <TopStats number={14} title="Arsip Pesan"/>
            </div>
          </div>
          <div className="flex flex-col items-center h-fit w-fit p-5 rounded-3xl bg-primary5 gap-3">
            <div className="flex flex-row justify-center items-center gap-2">
              <MdOutlineRealEstateAgent size={40} color="white" />
              <h1 className="text-3xl">Listing</h1>
            </div>
            <div className="w-[70%] mx-5 h-1 bg-white" />
            <div className="flex flex-row gap-5">
              <TopStats number={0} title="Listing Aktif"/>
              <TopStats number={0} title="Listing Lampau"/>
              <TopStats number={0} title="Draft Listing"/>
            </div>
          </div>
        </div>
        {/* Chart */}
        <Box className="bg-primary5 h-fit py-5 rounded-3xl">
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h5" fontWeight="600" color={"white"}>
                Jumlah Traffic
              </Typography>
              <Typography variant="h3" fontWeight="bold" color={"white"}>
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: "white" }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
      </div>
    </Box>
    // </Box>
  );
};

export default DashExample;
