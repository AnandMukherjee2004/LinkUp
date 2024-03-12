import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { Outlet, Route, Router, Routes } from "react-router-dom";
import TinderCardComp from "./Components/TinderCardComp/TinderCardComp";
import { FireBaseProvider, useFirebase } from "./db/Firebase";
import { useLocation } from "react-router-dom";
import { ChatContextProvider } from "./context/ChatContext";

function Layout({ children }) {
  const location = useLocation();

  const isLoginPage =
    location.pathname === "/signup" ||
    location.pathname === "/signin" ||
    location.pathname === "/register" ||
    location.pathname === "/register/recruiter-reg" ||
    location.pathname === "/chats" ||
    location.pathname === "/chat-page" ||
    location.pathname === "/register/applier-reg";

  return (
    <>
      <FireBaseProvider>
        <ChatContextProvider>
          {!isLoginPage && <Header />}
          <Outlet />
        </ChatContextProvider>
      </FireBaseProvider>
    </>
  );
}

export default Layout;
