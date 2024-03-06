import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useFirebase } from "../../db/Firebase";
import Loading from "../Loading/Loading";

function PrivateRoute() {
  const firebase = useFirebase();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the user is authenticated
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <Loading />;
  } else if (!firebase.isLoggedIn) {
    /* If not logged in, redirect to login page */

    return (
      <div>
        <p className=" text-xl text-black">Not Logged In! Please Login to view</p>
        <Navigate to={"/signin"} />
      </div>
    );
  } else {
    return <Outlet />;
  }
}

export default PrivateRoute;
