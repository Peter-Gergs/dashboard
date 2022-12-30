import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import "./header.scss";
import avatar from "../../assets/imgs/avatar.png";
import { IconContext } from "react-icons";

function Header() {
  return (
    <header className="header">
      <div className="search">
        <GoSearch />
        <input type="search" name="" id="" placeholder="Type A Keyword" />
      </div>
      <div className="icons">
        <span className="notification">
          <IconContext.Provider
            value={{ size: "2em", style: { display: "flex" } }}
          >
            <AiOutlineBell />
          </IconContext.Provider>
        </span>
        <img src={avatar} alt="" />
      </div>
    </header>
  );
}

export default Header;
