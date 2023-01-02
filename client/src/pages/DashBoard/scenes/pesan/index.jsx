import React from "react";
import { Box, Button, Checkbox, IconButton, TextField } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { BiArchiveIn, BiTrash } from "react-icons/bi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsReply } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { GoPrimitiveDot } from "react-icons/go";
import Header from "../../components/Header";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import "./style.css";
import ChatBox from "./ChatBox";
import {
  Avatar,
  MainContainer,
  ConversationHeader,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  StarButton,
  InfoButton,
} from "@chatscope/chat-ui-kit-react";
const Pesan = () => {
  const color = {
    primary1: "#3d5a80",
    primary2: "#98c1d9",
    primary3: "#e0fbfc",
    primary4: "#ee6c4d",
    primary5: "#293241",
  };
  const Mail = () => {
    return (
      <Box className="relative px-5 w-full h-fit bg-[grey] flex flex-row items-center justify-between border-b-white border-b-4 ">
        <Box className="flex items-center gap-5">
          <Checkbox
            style={{
              transform: "scale(1)",
              width: "30px",
              height: "30px",
            }}
          />
          <Box className="flex flex-col">
            <IconButton>
              <BsReply size={20} color="white" />
            </IconButton>
            <IconButton>
              <BiArchiveIn size={20} color="white" />
            </IconButton>
          </Box>
          <Box className="p-3 gap-2">
            <h1 className="text-lg font-bold">Adit Setiabudi</h1>
            <p className="text-sm font-semibold">Lorem Ipsum</p>
            <p className="text-sm">abc 5 dasar</p>
          </Box>
        </Box>
        <Box className="absolute text-xs right-5 top-2">
        2 Minggu lalu
        </Box>
        <IconButton>
          <BiTrash size={25} />
        </IconButton>
      </Box>
    );
  };
  return (
    <Box className="mx-5 flex flex-col">
      {/* Title */}
      <Header title="KOTAK PESAN" />
      {/* Content */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box className="overflow-y-auto py-5 col-span-4 row-span-3 bg-primary5 flex flex-col items-center rounded-3xl scrollbar-hide">
          <Mail />
          <Mail />
          <Mail />
          <Mail />
          <Mail />
          <Mail />
          <Mail />
          <Mail />
        </Box>
        <ChatBox />
      </Box>
    </Box>
  );
};

export default Pesan;
