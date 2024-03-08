import React from "react";

function ChatPage() {
  return (
    <div className="h-screen w-screen flex flex-col ">
      <nav className=" flex justify-between items-center bg-white py-5 px-4">
        <button> back</button>
        <div className=" flex flex-col">
          <h2 className="font-bold text-black text-lg">User Name</h2>
          <p className="text-sm text-center">Online</p>
        </div>
        <div className="dp">img</div>
      </nav>
      <div className="chatting bg-white h-full rounded-lg w-full ">
        <input type="text" placeholder="Type a message..." className="w-[92%] p-2 rounded-lg m-3 fixed bottom-2 bg-white border-gray-300 border-2" />
      </div>
    </div>
  );
}

export default ChatPage;
