import React, { useState } from "react";
import { firestore, useFirebase } from "../../db/Firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import ChatOne from "../ChatOne/ChatOne";
import { Link } from "react-router-dom";

function SearchUserChats() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const firebase = useFirebase();

  const handleSearch = async () => {
    const q = query(
      collection(firestore, "Appliers"),
      where("Full_Name", "==", userName)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        setUser(doc.data());
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSearch();
      setUserName("");
    }
  };

  const handleSelect = async () => {
    const currUser = firebase.user;
    // console.log("current user : ", firebase.user);

    const combinedId = user.uid + currUser.uid;
    console.log(combinedId);

    try {
      const chatRef = doc(firestore, "chats", combinedId);
      const chatDoc = await getDoc(chatRef);

      if (!chatDoc.exists()) {
        console.log("Creating userChats document...");
        const userChatDocResult = await setDoc(chatRef, { messages: [] });

        // Assuming user and firebase.auth().currentUser are correctly defined
        const currUserChatRef = doc(firestore, "userChats", currUser.uid);
        const userChatDoc = await getDoc(currUserChatRef);

        if (!userChatDoc.exists()) {
          // Create the userChats document if it doesn't exist
          console.log("setting userChats document...");
          const userChatDocResult = await setDoc(currUserChatRef, {
            [combinedId]: {
              userInfo: {
                uid: user.uid,
                displayName: user.Full_Name,
                // Add other user info as needed
              },
              date: serverTimestamp(),
            },
          });
          console.log("setup successful:", userChatDocResult);
        } else {
          console.log("Updating userChats document...");
          const userChatDocResult = await updateDoc(currUserChatRef, {
            [combinedId]: {
              userInfo: {
                uid: user.uid,
                displayName: user.Full_Name,
                // Add other user info as needed
              },
              date: serverTimestamp(),
            },
          });

          console.log("Update successful:", userChatDocResult);
        }

        // Repeat the above logic for the other user involved in the chat
      }
    } catch (err) {
      console.error("Error handling chat selection:", err);
      // Consider adding more robust error handling here
    }

    // try {
    //   const res = await getDoc(doc(firestore, "chats", combinedId));

    //   if (!res.exists()) {
    //     //create a chat in chats collection
    //     await setDoc(doc(firestore, "chats", combinedId), { messages: [] });

    //     //create user chats
    //     await updateDoc(doc(firestore, "userChats", currUser.uid), {
    //       [combinedId + ".userInfo"]: {
    //         uid: user.uid,
    //         displayName: user.Full_Name,
    //         // photoURL: user.photoURL,
    //       },
    //       [combinedId + ".date"]: serverTimestamp(),
    //     });

    //     await updateDoc(doc(firestore, "userChats", user.uid), {
    //       [combinedId + ".userInfo"]: {
    //         uid: currUser.uid,
    //         // displayName: currUser.displayName,
    //         // photoURL: currUser.photoURL,
    //       },
    //       [combinedId + ".date"]: serverTimestamp(),
    //     });
    //   }
    // } catch (err) {}

    setUser(null);
    setUserName("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={handleKey}
        className="p-2 bg-white rounded m-2 w-[95%]"
        value={userName}
      />
      <div className=" m-3 text-white" onClick={handleSelect}>
        <Link to={"/chat-page"}>
          {user && (
            <div className=" flex items-center ">
              <div
                className=" h-12 w-12 rounded-full flex justify-center items-center bg-orange-200 object-cover"
                style={{
                  // backgroundImage: `url(${userInfo.photoUrl})`,
                  backgroundPosition: "center",
                }}
              ></div>
              <div className=" flex justify-between w-[80%] items-center mx-2">
                <div className=" ">
                  <p className=" font-bold ">{user?.Full_Name}</p>
                  <p className=" text-xs opacity-75 font-semibold">
                    {user?.lastMessage?.text}
                  </p>
                </div>

                <div className="right  flex-end text-xs opacity-60 ">
                  last message time
                </div>
              </div>
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}

export default SearchUserChats;
