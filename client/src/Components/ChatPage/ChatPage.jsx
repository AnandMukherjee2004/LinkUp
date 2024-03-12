import React, { useContext, useState } from "react";
import Messages from "../Messages/Messages";
import { ChatContext } from "../../context/ChatContext";
import AttachmentIcon from "@mui/icons-material/Attachment";
import {
  Timestamp,
  arrayUnion,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { firestore, storage, useFirebase } from "../../db/Firebase";
import { ref, uploadBytes, uploadBytesResumable } from "firebase/storage";

function ChatPage() {
  const { data } = useContext(ChatContext);

  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const firebase = useFirebase();

  const currUser = firebase.user;

  // console.log(data);

  const handleSend = async () => {
    if (img) {
      const imgRef = ref(storage, uuid());
      const uploadedImg = await uploadBytesResumable(imgRef, img);
      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadedImg.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(firestore, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      const chatDocRef = doc(firestore, "chats", data.chatId);

      // Check if the document exists
      const docSnap = await getDoc(chatDocRef);

      if (docSnap.exists()) {
        // Document exists, update it
        await updateDoc(chatDocRef, {
          messages: arrayUnion({
            id: uuid(),
            text, // Replace with your actual message text
            senderId: currUser.uid,
            date: Timestamp.now(),
          }),
        });
      } else {
        // Document does not exist, set it
        await setDoc(chatDocRef, {
          messages: [
            {
              id: uuid(),
              text, // Replace with your actual message text
              senderId: currUser.uid,
              date: Timestamp.now(),
            },
          ],
        });
      }
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSend();
      setText("");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col ">
      <nav className=" flex justify-between items-center bg-white py-5 px-4">
        <button> back</button>
        <div className=" flex flex-col">
          <h2 className="font-bold text-black text-lg">
            {data?.user?.displayName}
          </h2>
          <p className="text-sm text-center">Online</p>
        </div>
        <div className="dp">img</div>
      </nav>

      <Messages />

      <div className="chatting bg-white  rounded-lg w-full  flex h-16">
        <input
          type="text"
          placeholder="Type something..."
          onChange={(e) => setText(e.target.value)}
          value={text}
          className=" w-full px-2"
        />
        <div className="send flex justify-evenly items-center w-40">
          <img alt="" />
          <input
            type="file"
            style={{ display: "none" }}
            id="file"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label htmlFor="file">
            <AttachmentIcon />
          </label>
          <button onClick={handleSend} onKeyDown={handleKey} className="">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
