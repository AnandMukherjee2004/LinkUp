import React, { useContext, useEffect, useState } from "react";
import Message from "../Message/Message";
import { ChatContext } from "../../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { firestore } from "../../db/Firebase";

function Messages() {
  const [messages, setMessages] = useState([]);

  const { data } = useContext(ChatContext);

  console.log("data : ", data);

  useEffect(() => {
    const unSub = onSnapshot(doc(firestore, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log("messages: ", messages);

  return (
    <div className=" p-3 overflow-scroll h-full">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
}

export default Messages;
