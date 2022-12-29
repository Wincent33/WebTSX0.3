import React from "react";
import { Box, Button, Checkbox, IconButton, TextField } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { BiArchiveIn, BiTrash } from "react-icons/bi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsReply } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import Header from "../../components/Header";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
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
  const actions = [
    { icon: <FileCopyIcon />, name: "Copy" },
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
  ];
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
        <Box className="overflow-y-auto py-5 col-span-4 row-span-5 bg-primary5 flex flex-col items-center rounded-3xl scrollbar-hide">
          <Mail />
          <Mail />
          <Mail />
          <Mail />
          <Mail />
          <Mail />
          <Mail />
          <Mail />
        </Box>
        <Box className=" justify-between overflow-y-auto col-span-8 row-span-5 bg-primary5 flex flex-col items-center rounded-3xl scrollbar-hide">
          <Box className="flex flex-row p-4 bg-white w-full h-fit">
            <Box className="flex h-fit my-auto w-[50%]">
              <img
                className="object-cover h-24 w-24 rounded-full"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="123"
              />
              <Box className="flex flex-col justify-center gap-4 mx-4">
                <h1 className="text-2xl text-primary5 font-bold">
                  Adit Setiabudi
                </h1>
                <h1 className="text-primary5 flex flex-row text-lg">
                  <GoPrimitiveDot color="gray" size="18px" />
                  Offline
                </h1>
              </Box>
            </Box>
            <Box className="flex justify-end h-fit my-auto w-[50%]">
              <IconButton>
                <AiOutlineStar color="black" size="3rem" />
              </IconButton>
            </Box>
          </Box>
          <Box>test</Box>
          <Box className="relative flex flex-row justify-center w-full h-28 bg-white">
            <SpeedDial
              ariaLabel="message-speeddial"
              className="absolute bottom-6 left-6"
              // sx={{ position: "absolute", bottom: 24, left: 24 }}
              icon={<SpeedDialIcon />}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                />
              ))}
            </SpeedDial>
            <TextField
              id="text-message"
              multiline
              rows={4}
              placeholder="ketik Pesan Anda"
              className="w-[60%] h-full bg-primary4"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Pesan;
