import React, { useContext, useEffect, useState } from "react";
import ChatOne from "../ChatOne/ChatOne";
import { Link } from "react-router-dom";
import SearchUserChats from "../SearchUserChats/SearchUserChats";
import { doc, onSnapshot } from "firebase/firestore";
import { firestore, useFirebase } from "../../db/Firebase";
import { ChatContext } from "../../context/ChatContext";

function Chats() {
  
  const firebase = useFirebase();

  const { dispatch } = useContext(ChatContext);

  const currUser = firebase.user;

  const [chats, setChats] = useState([]);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(
        doc(firestore, "userChats", currUser.uid),
        (doc) => {
          setChats(doc.data());
        }
      );

      return () => {
        unsub();
      };
    };
    currUser.uid && getChats();
  }, [currUser.uid]);

  // console.log("chats : ", Object.entries(chats));

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div>
      <div className="logo flex justify-center">
        <img src="logo.jpg" alt="" className="h-24 w-24" />
      </div>
      <div className="top bg-purple-500 h-[73.5vh] rounded-t-3xl">
        <h2 className=" text-2xl text-white font-bold ml-4 pt-10 pb-2">
          Chats
        </h2>
        <SearchUserChats />
        <div className=" p-2 py-4 flex flex-col gap-4 bg-white h-full">
          {chats && Object.entries(chats).map((chat) => (
            <Link to={"/chat-page"} key={chat[0]}>
              <div onClick={() => handleSelect(chat[1].userInfo)}>
                <ChatOne userInfo={chat[1].userInfo} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chats;
