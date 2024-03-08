import React from "react";
import ChatOne from "../ChatOne/ChatOne";
import { Link } from "react-router-dom";

function Chats() {
  const db = [
    {
      name: "Richard Hendricks",
      url: "https://images.pexels.com/photos/19172555/pexels-photo-19172555/free-photo-of-woman-with-black-hair-sitting-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      id: 1,
    },
    {
      name: "Erlich Bachman",
      url: "https://images.pexels.com/photos/20021272/pexels-photo-20021272/free-photo-of-woman-sitting-on-a-bucket.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      id: 2,
    },
    {
      name: "Monica Hall",
      url: "https://images.pexels.com/photos/18076120/pexels-photo-18076120/free-photo-of-man-in-jeans-and-a-tank-top-sitting-in-grass.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      id: 3,
    },
    {
      name: "Jared Dunn",
      url: "https://images.pexels.com/photos/19399844/pexels-photo-19399844/free-photo-of-young-woman-in-white-blouse-and-black-waistcoat.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      id: 4,
    },
    {
      name: "Dinesh Chugtai",
      url: "https://images.pexels.com/photos/19807658/pexels-photo-19807658/free-photo-of-woman-in-a-stylish-coat-with-metal-buttons-standing-on-the-staircase.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      id: 5,
    },
  ];

  return (
    <div>
      <div className="logo flex justify-center"><img src="logo.jpg" alt="" className="h-24 w-24"/></div>
      <div className="top bg-purple-500 h-[73.5vh] rounded-t-3xl">
        <h2 className=" text-2xl text-white font-bold ml-4 pt-10 pb-2">
          Chats
        </h2>

        <div className=" rounded-t-3xl p-2 py-4 flex flex-col gap-4 bg-white h-full">
          {db.map((user, index) => (
            <Link to={"/chat-page"} key={index}>
              <ChatOne name={user.name} img={user.url} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chats;
