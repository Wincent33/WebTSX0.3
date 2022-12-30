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
          <Box className="w-full h-full">
            <MainContainer>
              <ChatContainer>
                <ConversationHeader className="h-24">
                  <ConversationHeader.Content />
                  <Avatar
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    name="Adit"
                    size="lg"
                    status="invisible"
                  />
                  <ConversationHeader.Content
                    className="ml-6"
                    userName="Adit"
                    info="Active 10 mins ago"
                  />
                  <ConversationHeader.Actions>
                    <StarButton title="Add to favourites" />
                    <InfoButton title="Show info" />
                  </ConversationHeader.Actions>
                </ConversationHeader>
                <MessageList className="p-4">
                  <Message
                    model={{
                      message: "Hello my friend",
                      sentTime: "just now",
                      direction: "incoming",
                      sender: "Adit",
                    }}
                  />
                  <Message
                    model={{
                      message: "Care to chat with me?",
                      sentTime: "just now",
                      direction: "incoming",
                      sender: "Adit",
                    }}
                  />
                  <Message
                    model={{
                      message: "Go Fuck Yourself, Adit!",
                      sentTime: "just now",
                      direction: "outgoing",
                      sender: "me",
                    }}
                  />
                  <Message
                    model={{
                      message: "How rude :((... i would if i could you bitch.",
                      sentTime: "just now",
                      direction: "ingoing",
                      sender: "Adit",
                    }}
                  />
                </MessageList>
                <MessageInput
                  className="mx-8"
                  placeholder="Type message here"
                />
              </ChatContainer>
            </MainContainer>
          </Box>
          {/* <Box className="border-t-2 border-t-white border-t-solid relative flex flex-row justify-end w-full h-32 p-4 ">
            <SpeedDial
              ariaLabel="message-speeddial"
              className="absolute bottom-[15%] left-[2.5%]"
              // sx={{ position: "absolute", bottom: 24, left: 24 }}
              sx={{
                "& .MuiFab-primary": {
                  width: 90,
                  height: 90,
                  // flex: true,
                  paddingBottom: 3,
                  // textAlign: "center",
                  "& .MuiSpeedDialIcon-icon": {
                    fontSize: 50,
                  },
                },
              }}
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
              className="w-[65%] h-full bg-primary5 rounded-t-3xl"
              variant="standard"
            />
            <Box className="flex flex-row gap-4 text-xl w-[20%] border-solid border-[1px] border-white justify-center items-center text-white rounded-3xl m-4 duration-300 cursor-pointer hover:bg-primary4">
              <FiSend size={40} color="white" />
              Send
            </Box>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Pesan;
