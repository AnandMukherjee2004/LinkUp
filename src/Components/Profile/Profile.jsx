import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { useFirebase } from "../../db/Firebase";

function Profile() {
  const [data, setData] = useState(null);
  const firebase = useFirebase();

  useEffect(() => {
    firebase.getCurrentApplierById(firebase.user.uid).then((value) => {
      console.log(value);
      setData(value);
    });
  }, []);

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

  let { userid } = useParams();

  const person = db.find((user) => user.id === parseInt(userid));

  return (
    <div className=" flex justify-center mx-6 flex-col">
      <div className=" flex justify-center items-center ">
        <div
          style={
            data && {
              background: `URL(/${
                data.gender === "male" ? "male.jpg" : "female.jpg"
              }) no-repeat`,
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
            }
          }
          className="card relative bg-white w-[100vw] max-w-[90vw] h-[65vh] rounded-lg bg-cover  shadow-2xl"
        >
          {data && (
            <h3 className="absolute bottom-0 m-3 text-white text-lg font-semibold">
              {data.Full_Name} <br />
              Work ex: {data.Work_Experience} Years
            </h3>
          )}
        </div>
      </div>
      <div className="tech-stacks my-3 text-sm">
        {data && (
          <h2>
            {data.Education} ||{" "}
            {data.Skills.map((skill, index) => (
              <span key={index}>{skill} || </span>
            ))}
          </h2>
        )}
        <Link to={"/signin"}>
          <button
            variant=""
            onClick={() => {
              signOut(firebase.auth);
            }}
            className=" text-purple-600 hover:text-purple-700 hover:underline font-semibold"
          >
            Log Out
          </button>
        </Link>
      </div>
      <hr />
      {data && (
        <div className="bio text-sm my-2">
          <h2 className=" font-bold text-base text-purple-600">About:</h2>
          {data.about}
        </div>
      )}
      <hr />
      <div className="projects my-2">
        <h2 className=" font-bold text-base mb-2 text-purple-600">Projects:</h2>
        <hr />
        <ul>
          <li>
            <h2 className=" project-title font-bold my-2">
              Wanderlust Website{" "}
              <span>
                <a
                  href="https://wanderlust-x3t2.onrender.com/listings"
                  className=" text-blue-600 font-semibold"
                >
                  Project Link
                </a>
              </span>
            </h2>

            <p className=" project-desc text-sm ">
              Tech stacks used: CSS, JavaScript, Node.js, and Express.js for a
              seamless experience. Database on MongoDB Atlas: Secure online
              storage for reliable data access. Image Management with
              Cloudinary: Efficient storage and display of high-quality listing
              images.
            </p>
          </li>
        </ul>
      </div>
      <hr />
      <div className="certifications my-2 ">
        <div className="head flex justify-between items-center">
          <h2 className=" font-bold my-2 text-purple-600">
            {" "}
            Licenses & certifications
          </h2>
          <span>
            <IconButton>
              <Link to={"/profile/certifications-form"}>
                <AddIcon />
              </Link>
            </IconButton>
          </span>
        </div>

        <form action=""></form>
      </div>
      <div className="education"></div>
    </div>
  );
}

export default Profile;
