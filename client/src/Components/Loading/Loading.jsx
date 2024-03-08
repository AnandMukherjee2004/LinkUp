import React, { useEffect, useState } from "react";
import { useFirebase } from "../../db/Firebase";

function Loading() {
  return (
    // <div className="w-10 h-10 rounded-full border-4 border-pink-200 animate-spin mx-auto"></div>
    <div
      className=" flex justify-center items-center mt-52"
    >
      <span className="loading loading-infinity text-purple-600 h-10 w-16"></span>
    </div>
  );
}

export default Loading;
