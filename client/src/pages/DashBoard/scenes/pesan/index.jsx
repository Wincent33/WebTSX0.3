import React from "react";
import { Box, Button, Checkbox, IconButton } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { BiArchiveIn, BiTrash } from "react-icons/bi";
import { BsReply } from "react-icons/bs";
import Header from "../../components/Header";
const Pesan = () => {
  const Mail = () => {
    return (
      <Box className="relative px-5 py-2 w-full h-fit bg-[grey] flex flex-row items-center justify-between border-b-white border-b-4 ">
        <Box className="flex items-center gap-5">
          <Checkbox
            style={{
              transform: "scale(1.5)",
              width: "30px",
              height: "30px",
            }}
          />
          <Box className="flex flex-col">
            <IconButton>
              <BsReply size={30} color="white" />
            </IconButton>
            <IconButton>
              <BiArchiveIn size={30} color="white" />
            </IconButton>
          </Box>
          <Box className="p-3 gap-2">
            <h1 className="text-xl font-bold">Adit Setiabudi</h1>
            <p className="text-base font-semibold">Lorem Ipsum</p>
            <p className="text-base">abc 5 dasar</p>
          </Box>
        </Box>
        <Box className="absolute right-5 top-2">
          <p>2 Minggu lalu</p>
        </Box>
        <IconButton>
          <BiTrash size={40} />
        </IconButton>
      </Box>
    );
  };
  return (
    <Box className="m-5 flex flex-col">
      {/* Title */}
      <Header title="KOTAK PESAN" />
      {/* Content */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
          <Box className="overflow-y-auto py-5 col-span-5 row-span-4 bg-primary5 flex flex-col items-center rounded-3xl scrollbar-hide">
            <Mail />
            <Mail />
            <Mail />
            <Mail />
            <Mail />
            <Mail />
            <Mail />
            <Mail />
          </Box>
          <Box className="overflow-y-auto py-5 col-span-5 row-span-4 bg-primary5 flex flex-col items-center rounded-3xl scrollbar-hide">
            dsadas
          </Box>
        </Box>
        </Box>
  );
};

export default Pesan;
