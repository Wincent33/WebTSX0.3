import React from "react";
import { Box, IconButton } from "@mui/material";
import { AiOutlineStar, AiFillInfoCircle } from "react-icons/ai";
const ChatBox = () => {
  const ChatIncoming = () => {
    return (
      <div className="my-4 flex justify-start w-full">
        <div className="p-3 h-full w-fit rounded-xl rounded-tl-none bg-primary5">
          Yolo will Never Die
        </div>
      </div>
    );
  };

  const ChatOutgoing = () => {
    return (
      <div className="my-4 flex justify-end w-full">
        <div className="p-3 h-full w-fit rounded-xl rounded-br-none bg-primary4">
          Yolo will Never Die
        </div>
      </div>
    );
  };

  return (
    <Box className="justify-between overflow-y-auto col-span-8 row-span-4 bg-primary5 flex flex-col rounded-3xl scrollbar-hide">
      {/*Header / Top*/}
      <div className="p-5 flex flex-row justify-between h-20 w-full bg-primary5 text-white">
        {/* Avatar and Top Info*/}
        <div className="flex flex-row items-center">
          <img
            className="rounded-full w-16 h-16"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="userPic"
          />
          <div className="flex flex-col m-4">
            <h1 className="text-xl font-bold">Adit Setiabudi</h1>
            <h2 className="text-lg">Last online 1 hour ago</h2>
          </div>
        </div>
        {/* Top Info */}

        {/* Actions */}
        <div className="flex flex-row">
          <AiOutlineStar color="white" size={50} />
          <AiFillInfoCircle color="white" size={50} />
        </div>
      </div>
      {/* Chat Content */}
      <div className=" px-4 h-full bg-primary1">
        <ChatIncoming />
        <ChatIncoming />
        <ChatOutgoing />
        <ChatIncoming />
        <ChatOutgoing />
      </div>
      <div className="w-36 bg-primary5">test</div>
    </Box>
  );
};

export default ChatBox;
