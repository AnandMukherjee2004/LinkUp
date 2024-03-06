import React, { useState } from "react";

const ApplierRegistrationForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic here to handle form submission (e.g., send data to backend)
    console.log("Form submitted:", {
      fullName,
      email,
      password,
      phoneNumber,
      location,
      education,
      workExperience,
      skills,
      jobInterests,
      resume,
      portfolio,
    });
    // Reset form fields after submission
    setFullName("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
    setLocation("");
    setEducation("");
    setWorkExperience("");
    setSkills("");
    setJobInterests("");
    setResume("");
    setPortfolio("");
  };

  const [applier, setApplier] = useState(null);
  const [skills, setSkills] = useState([]);
  const [jobInterests, setJobInterests] = useState([]);

  const handleInputs = (e) => {
    setApplier({ ...applier, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-100 p-4 sm:p-8">
      <h2 className="text-2xl font-bold text-center mb-4">
        Applier Registration Form
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
            name="fullName"
            value={fullName}
            onChange={handleInputs}
            required
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
            name="phoneNumber"
            // value={phoneNumber}
            onChange={handleInputs}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            id="location"
            name="location"
            // value={location}
            onChange={handleInputs}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="education"
          >
            Education
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            id="education"
            name="education"
            // value={education}
            onChange={handleInputs}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="workExperience"
          >
            Work Experience
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            id="workExperience"
            name="workExperience"
            // value={(e) => e.target.value}
            onChange={handleInputs}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="skills">
            Skills
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="list"
            id="skills"
            // value={skills.join(", ")}
            onChange={(e) => setSkills(e.target.value.split(", "))}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="jobInterests"
          >
            Job Interests
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            id="jobInterests"
            value={jobInterests.join(" , ")}
            onChange={(e) => setJobInterests(e.target.value.split(", "))}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="resume">
            Resume/CV
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white"
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx,.jpeg,.jpg"
            onChange={handleInputs}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="portfolio"
          >
            Portfolio
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="url"
            id="portfolio"
            name="portfolio"
            // value={portfolio}
            onChange={handleInputs}
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

export default ApplierRegistrationForm;
