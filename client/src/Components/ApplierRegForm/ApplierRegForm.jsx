import React, { useState } from "react";
import { useFirebase } from "../../db/Firebase";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const ApplierRegistrationForm = () => {
  const [applier, setApplier] = useState(null);
  const [skills, setSkills] = useState([]);
  const [jobInterests, setJobInterests] = useState([]);
  const [resume, setResume] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const firebase = useFirebase();
  const navigate = useNavigate();

  const handleInputs = (e) => {
    setApplier({ ...applier, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await firebase.registerNewApplier(
      applier.fullName,
      applier.education,
      applier.phoneNumber,
      resume,
      applier.portfolio,
      skills,
      jobInterests,
      applier.workExperience,
      applier.about,
      applier.gender
    );
    setIsLoading(false);
    navigate("/");
  };

  return (
    <div>
      {isLoading ? (
        <div className=" flex justify-center items-center h-screen flex-col gap-4 p-5">
          <img src="/logo.jpg" alt="" className=" h-32 w-32"/>
          <h2 className=" text-center text-lg mx-2 my-4">
            Please wait while we process your registration. This may take a
            moment...
          </h2>
          <Loading />
        </div>
      ) : (
        <div className="bg-gray-100 p-4 sm:p-8">
          <h2 className="text-2xl font-bold text-center mb-4">
            Applier Registration Form
          </h2>

          <form onSubmit={onSubmitHandler}>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white"
                type="text"
                placeholder="John Doe"
                // value={applier.fullName}
                id="fullName"
                name="fullName"
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
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white"
                type="tel"
                placeholder="+91-9876543210"
                id="phoneNumber"
                name="phoneNumber"
                // value={phoneNumber}
                onChange={handleInputs}
                required
              />
            </div>

            <div className="mb-4 flex items-center gap-3 bg-white p-2 rounded-md">
              <label className="text-base font-semibold" htmlFor="gender">
                Male
              </label>
              <input
                className="radio"
                type="radio"
                id="gender"
                name="gender"
                value={"male"}
                onChange={handleInputs}
                required
              />
              <label className="text-base font-semibold" htmlFor="genderFe">
                Female
              </label>
              <input
                className="radio"
                type="radio"
                id="genderFe"
                name="gender"
                value={"female"}
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
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white"
                type="text"
                id="education"
                name="education"
                placeholder="Degree"
                // value={applier.education}
                onChange={handleInputs}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="about"
              >
                About
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white"
                type="text"
                id="about"
                name="about"
                placeholder="About yourself in 100 words"
                // value={applier.education}
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
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white"
                type="text"
                id="workExperience"
                name="workExperience"
                placeholder="Years of Experience"
                // value={applier.workExperience}
                onChange={handleInputs}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="skills"
              >
                Skills
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white"
                type="list"
                id="skills"
                value={skills.join(", ")}
                placeholder="React, Next.js, GraphQL"
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
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white"
                type="text"
                placeholder="DevOps, Blockchain Development"
                id="jobInterests"
                value={jobInterests.join(" , ")}
                onChange={(e) => setJobInterests(e.target.value.split(", "))}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="flex text-sm font-semibold mb-2"
                htmlFor="resume"
              >
                Resume/CV
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white"
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx,.jpeg,.jpg"
                onChange={(e) => setResume(e.target.files[0])}
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
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white"
                type="url"
                id="portfolio"
                placeholder="https://github.com/kumar-singh"
                name="portfolio"
                // value={applier.portfolio}
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
      )}
    </div>
  );
};

export default ApplierRegistrationForm;
