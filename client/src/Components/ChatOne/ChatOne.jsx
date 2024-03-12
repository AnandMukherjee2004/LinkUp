import React from "react";

const db = [
  {
    name: "Richard Hendricks",
    url: "https://images.pexels.com/photos/19172555/pexels-photo-19172555/free-photo-of-woman-with-black-hair-sitting-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Erlich Bachman",
    url: "https://images.pexels.com/photos/20021272/pexels-photo-20021272/free-photo-of-woman-sitting-on-a-bucket.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  },
  {
    name: "Monica Hall",
    url: "https://images.pexels.com/photos/18076120/pexels-photo-18076120/free-photo-of-man-in-jeans-and-a-tank-top-sitting-in-grass.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  },
  {
    name: "Jared Dunn",
    url: "https://images.pexels.com/photos/19399844/pexels-photo-19399844/free-photo-of-young-woman-in-white-blouse-and-black-waistcoat.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  },
  {
    name: "Dinesh Chugtai",
    url: "https://images.pexels.com/photos/19807658/pexels-photo-19807658/free-photo-of-woman-in-a-stylish-coat-with-metal-buttons-standing-on-the-staircase.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  },
];

function ChatOne({ userInfo }) {
  return (
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
          <p className=" font-bold ">{userInfo?.displayName || "Unknown" }</p>
          <p className=" text-xs opacity-75 font-semibold">{userInfo?.lastMessage?.text}</p>
        </div>

        <div className="right  flex-end text-xs opacity-60 ">
          last message time
        </div>
      </div>
    </div>
  );
}

export default ChatOne;
