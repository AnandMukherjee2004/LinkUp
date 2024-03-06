import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Resgister() {
  const navigate = useNavigate();

  return (
    <div className=" p-4 py-7">
      <h1 className="text-3xl font-bold text-center mb-4 text-purple-600">
        Welcome to Our Platform!
      </h1>

      <div className=" flex justify-center items-center my-4">
        <img src="logo.jpg" className=" w-32 " alt="" />
      </div>

      <h2 className="text-2xl font-semibold text-center mb-4 text-[#cbaae9]">
        Register as a Recruiter or an Applicant
      </h2>

      <p className="text-lg text-center mb-8">
        Join our platform to unlock exciting opportunities and connect with top
        talent.
      </p>

      <button
        className="mx-auto flex items-center gap-2 bg-purple-600 py-2 px-4 rounded-lg mb-4 hover:bg-purple-700 focus:outline-none text-white"
        onClick={() => {
          navigate("recruiter-reg");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 18"
          fill="currentColor"
          className="w-5 h-5 opacity-70"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        Register as Recruiter
      </button>

      <button
        className="flex items-center gap-2 mx-auto bg-purple-600 py-2 px-4 rounded-lg mb-8 hover:bg-purple-700 focus:outline-none text-white "
        onClick={() => {
          navigate("applier-reg");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 18"
          fill="currentColor"
          className="w-5 h-5 opacity-70"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        Register as Applicant
      </button>

      <h3 className="text-2xl font-semibold mb-4 text-[#7481aa]">
        Why Choose Us?
      </h3>

      <ul className="list-disc pl-8 mb-8">
        <li className="mb-2">
          Access to a vast network of job seekers and employers
        </li>
        <li className="mb-2">Advanced search and filtering options</li>
        <li className="mb-2">Personalized job recommendations</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-4 text-[#7481aa]">
        Privacy Policy and Terms of Service
      </h3>

      <h3 className="text-base font-semibold mb-4 text-purple-600">
        Join Our Community Today!
      </h3>

      <p className="text-lg mb-4">
        Connect with us on social media and stay updated on the latest news and
        opportunities.
      </p>

      {/* Add your social media icons and links here */}

      <footer className="text-center text-gray-500 text-sm">
        &copy; 2024 LinkUP. All rights reserved.
      </footer>
    </div>
  );
}

export default Resgister;
