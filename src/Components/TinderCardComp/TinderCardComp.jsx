import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import IconButton from "@mui/material/IconButton";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import { useFirebase } from "../../db/Firebase";

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

function TinderCardComp() {
  // const characters = db;
  const [lastDirection, setLastDirection] = useState();
  const [appliers, setAppliers] = useState([]);

  // const [data, setData] = useState(null);
  const firebase = useFirebase();

  // console.log(firebase.user);

  useEffect(() => {
    firebase.getAppliers().then((appliers) => {
      const limitedAppliers = appliers.docs.slice(0, 20);
      setAppliers(limitedAppliers);
    });
  }, []);

  // console.log(appliers);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className=" flex justify-center flex-col items-center mt-5">
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />

      <div className="cardContainer w-[100vw] max-w-[100vw] h-[65vh] flex justify-center ">
        {appliers.map((applier, index) => {
          // console.log(applier);
          return (
            <TinderCard
              className="swipe absolute"
              key={index}
              onSwipe={(dir) => swiped(dir, applier.data().Full_Name)}
              onCardLeftScreen={() => outOfFrame(applier.data().Full_Name)}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{
                  backgroundImage: `url(${
                    applier.data().gender === "male" ? "male.jpg" : "female.jpg"
                  })`,
                }}
                className="card relative bg-white w-[100vw] max-w-[90vw] h-[65vh] rounded-lg bg-cover shadow-2xl"
              >
                <h3 className=" absolute bottom-0 m-3 text-white text-lg font-semibold">
                  {applier.data().Full_Name}
                </h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
      {lastDirection ? (
        <h2 className="infoText w-full justify-center flex text-black ">
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className="infoText w-full justify-center flex text-black " />
      )}

      <div className=" flex absolute bottom-5 justify-evenly  w-full ">
        <IconButton>
          <div className=" w-12 h-12 bg-[#d8b6e7] rounded-full flex justify-center p-7 items-center shadow-2xl text-purple-600">
            <ReplayIcon />
          </div>
        </IconButton>

        <IconButton>
          <div className=" w-12 h-12 bg-[#d8b6e7] rounded-full flex justify-center p-7 items-center shadow-2xl text-purple-600">
            <CloseIcon />
          </div>
        </IconButton>

        <IconButton>
          <div className=" w-12 h-12 bg-[#d8b6e7] rounded-full flex justify-center p-7 items-center shadow-2xl text-purple-600">
            <FavoriteIcon />
          </div>
        </IconButton>

        <IconButton>
          <div className=" w-12 h-12 bg-[#d8b6e7] rounded-full flex justify-center p-7  items-center shadow-2xl text-purple-600 ">
            <PersonalVideoIcon />
          </div>
        </IconButton>
      </div>
    </div>
  );
}

export default TinderCardComp;
