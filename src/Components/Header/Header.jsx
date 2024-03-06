import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import { Link, NavLink } from "react-router-dom";
import { useFirebase } from "../../db/Firebase";

function Header() {
  const firebase = useFirebase();

  return (
    <header>
      <div className="container flex h-10 items-center justify-between px-5 py-10 my-2">
        <div>
          <NavLink to="/profile/1" className={({ isActive }) => {}}>
            <IconButton>
              <PersonIcon
                style={{ width: "30px", height: "40px", opacity: "0.65" }}
                className=" text-purple-600"
              />
            </IconButton>
          </NavLink>
        </div>

        <Link to="/">
          <img src="logo.jpg" alt="Home" className=" h-20 w-20" />
        </Link>

        <div>
          <Link to={"/chats"}>
            <IconButton>
              <TelegramIcon
                style={{ width: "30px", height: "40px", opacity: "0.65" }}
                className=" text-purple-600"
              />
            </IconButton>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
