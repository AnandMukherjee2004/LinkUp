import React, { useEffect, useState } from "react";
import { useFirebase } from "../../db/Firebase";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const firebase = useFirebase();

  const navigate = useNavigate();

  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate("/register");
    }
  }, [navigate, firebase]);

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log("user details", user)
  };

  return (
    <div className=" bg-purple-100 h-screen py-7">
      <div className="  px-5 mt-5">
        <div className="logo flex justify-center">
          <img src="logo.jpg" alt="" className=" h-20 w-20" />
        </div>
        <div className=" flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-purple-600 text-center mt-2">
            Sign Up
            <p className="text-base text-[#95a1c8] font-semibold text-center mt-1">
              Make the most of the professional life by joining us!
            </p>
          </h2>

          <form
            action=""
            className=" bg-gray-200 flex flex-col p-5 py-8  gap-4 rounded-lg"
          >
            <div className=" flex flex-col gap-2">
              <label
                htmlFor="email"
                className=" input input-bordered flex items-center gap-2 bg-white "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleInputs}
                  className=" grow"
                  placeholder="Email"
                />
              </label>
            </div>

            <div className=" flex flex-col gap-2">
              <label
                htmlFor="password"
                className=" input input-bordered flex items-center gap-2 bg-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleInputs}
                  className=" grow"
                  placeholder="Password"
                />
              </label>
            </div>
            <button
              variant="contained"
              onClick={(e) => {
                e.preventDefault();
                firebase.signUpUserWithEmailAndPassword(
                  user.email,
                  user.password
                );
              }}
              className="mx-auto mt-6 text-center w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded"
            >
              SignUp
            </button>
            <button
              className="bg-white p-2 rounded hover:shadow-lg flex justify-center items-center gap-3"
              onClick={(e) => {
                e.preventDefault();
                firebase.signInWithGoogle();
              }}
            >
              <img src="google-logo.png" alt="" className="h-7 w-7" />
              Sign Up with google
            </button>
            <Link to={"/signin"}>
              <p className=" text-center font-semibold text-gray-400">
                Already on LinkUP,{" "}
                <span className=" text-purple-500">Sign In </span>
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
