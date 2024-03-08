import React from "react";
import TinderCardComp from "../TinderCardComp/TinderCardComp";
import { useFirebase } from "../../db/Firebase";

function Home() {
  return (

    <div>
      <TinderCardComp />
    </div>
  );
}

export default Home;
