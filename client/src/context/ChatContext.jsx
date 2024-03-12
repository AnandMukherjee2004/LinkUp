import { createContext, useReducer } from "react";
import { useFirebase } from "../db/Firebase";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const firebase = useFirebase();

  const currUser = firebase.user;

  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            currUser.uid > action.payload.uid
              ? currUser.uid + action.payload.uid
              : action.payload.uid + currUser.uid,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  // console.log("Current state in ChatContextProvider:", state);
  // console.log("Dispatch function in ChatContextProvider:", dispatch);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
