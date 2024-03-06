import React, { useState } from "react";

const RecruiterRegistrationForm = () => {
  // State variables to store form field values
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic here to handle form submission (e.g., send data to backend)
    console.log("Form submitted:", { fullName, email, password });
    // Reset form fields after submission
    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="bg-gray-100 p-4 sm:p-8">
      <h2 className="text-2xl font-bold text-center mb-4">
        Recruiter Registration Form
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            id="fullName"
            // value={fullName}
            // onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="email"
            id="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="password"
            id="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="companyName"
          >
            Company/Organization Name
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            id="companyName"
            // value={companyName}
            // onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="website">
            Company Website
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            id="website"
            // value={website}
            // onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="jobTitle"
          >
            Job Title
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            id="jobTitle"
            // value={jobTitle}
            // onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="jobDesc"
          >
            Job Description
          </label>
          <textarea
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            id="jonDesc"
            rows={5}
            // value={jobTitle}
            // onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="tel"
            id="phoneNumber"
            // value={phoneNumber}
            // onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="industry"
          >
            Industry
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            id="industry"
            // value={industry}
            // onChange={(e) => setIndustry(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="companySize"
          >
            Company Size
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            id="companySize"
            // value={companySize}
            // onChange={(e) => setCompanySize(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="country">
            Country/Region
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            id="country"
            // value={country}
            // onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RecruiterRegistrationForm;
