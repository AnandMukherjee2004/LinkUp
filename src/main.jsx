import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Layout.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import TinderCardComp from "./Components/TinderCardComp/TinderCardComp.jsx";
import Chat from "./Components/ChatOne/ChatOne.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Chats from "./Components/Chats/Chats.jsx";
import ChatPage from "./Components/ChatPage/ChatPage.jsx";
import CertificationForm from "./Components/CertificationForm/CertificationForm.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import SignIn from "./Components/SignIn/Signin.jsx";
import { FireBaseProvider } from "./db/Firebase.jsx";
import Resgister from "./Components/RegisterPage/Resgister.jsx";
import RecruiterRegistrationForm from "./Components/RecruiterRegForm/RecruiterRegForm.jsx";
import ApplierRegistrationForm from "./Components/ApplierRegForm/ApplierRegForm.jsx";
import Home from "./Components/Home/Home.jsx";
import { useFirebase } from "./db/Firebase.jsx";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="profile" element={<Profile />} />
        <Route path="chats" element={<Chats />} />
        <Route
          path="profile/certifications-form"
          element={<CertificationForm />}
        />
        <Route
          path="register/recruiter-reg"
          element={<RecruiterRegistrationForm />}
        />
        <Route path="register" element={<Resgister />} />

        <Route
          path="register/applier-reg"
          element={<ApplierRegistrationForm />}
        />
        <Route path="" element={<Home />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
