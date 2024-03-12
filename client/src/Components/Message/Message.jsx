import React, { useContext } from "react";
import "./message.css";
import { useFirebase } from "../../db/Firebase";
import { ChatContext } from "../../context/ChatContext";

function Message({ message }) {
  const firebase = useFirebase();
  const { data } = useContext(ChatContext);

  const currUser = firebase.user;

  console.log(message);

  return (
    <div className={`message flex gap-5 overflow-scroll ${message.senderId === currUser.uid ? "owner" : ""}`}>
      <div className="messageInfo flex flex-col mb-4 justify-center items-center">
        <img
          src="/male.jpg"
          alt=""
          className=" w-10 h-10 rounded-full object-cover"
        />
        <span>just now</span>
      </div>
      <div className="messageContent max-w-[60%] flex flex-col gap-10">
        <p className=" bg-purple-600 text-white p-2 rounded-r-xl rounded-t-xl">
          {message.text}
        </p>
      </div>
    </div>
  );
}

export default Message;
