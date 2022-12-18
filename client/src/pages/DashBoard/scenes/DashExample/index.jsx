import React from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import StatBox from "../../components/StatBox";
import LineChart from "../../components/LineChart";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineRealEstateAgent } from "react-icons/md";
const DashExample = () => {
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
        <div className="flex flex-row gap-5">
          <div className="flex flex-col items-center min-h-fit min-w-fit w-[50%] max-w-[1200px] h-[250px] p-5 mx-auto rounded-3xl bg-primary5 gap-5 ">
            <div className="flex flex-row justify-center items-center gap-5">
              <AiOutlineMail size={50} color="white" />
              <h1 className="text-5xl"> Pesan</h1>
            </div>
            <div className="w-[70%] mx-5 h-2 bg-white" />
            <div className="flex flex-row gap-5">
              <Box className="bg-primary4 h-fit w-fit p-5 text-center rounded-xl">
                <h1 className="text-4xl font-bold">14</h1>
                <h5 className="text-3xl"> Pesan Baru</h5>
              </Box>
              <Box className="bg-primary4 h-fit w-fit p-5 text-center rounded-xl">
                <h1 className="text-4xl font-bold">14</h1>
                <h5 className="text-3xl"> Pesan Baru</h5>
              </Box>
              <Box className="bg-primary4 h-fit w-fit p-5 text-center rounded-xl">
                <h1 className="text-4xl font-bold">14</h1>
                <h5 className="text-3xl"> Pesan Baru</h5>
              </Box>
            </div>
          </div>
          <div className="flex flex-col items-center min-h-fit min-w-fit w-[50%] max-w-[1200px] h-[250px] p-5 mx-auto rounded-3xl bg-primary5 gap-5 ">
            <div className="flex flex-row justify-center items-center gap-5">
              <MdOutlineRealEstateAgent size={50} color="white" />
              <h1 className="text-5xl">Listing</h1>
            </div>
            <div className="w-[70%] mx-5 h-2 bg-white" />
            <div className="flex flex-row gap-5">
              <Box className="bg-primary4 h-fit w-fit p-5 text-center rounded-xl">
                <h1 className="text-4xl font-bold">14</h1>
                <h5 className="text-3xl"> Listing Aktif</h5>
              </Box>
              <Box className="bg-primary4 h-fit w-fit p-5 text-center rounded-xl">
                <h1 className="text-4xl font-bold">123</h1>
                <h5 className="text-3xl">Listing Lampau</h5>
              </Box>
              <Box className="bg-primary4 h-fit w-fit p-5 text-center rounded-xl">
                <h1 className="text-4xl font-bold">1321</h1>
                <h5 className="text-3xl">Draft Listing</h5>
              </Box>
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
                  sx={{ fontSize: "26px", color: "green" }}
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
