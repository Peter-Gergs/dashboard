import React from "react";
import { IoStatsChartSharp } from "react-icons/io5";
import {
  BsFillCreditCard2FrontFill,
  BsFillDiagram3Fill,
  BsFillFileEarmarkFill,
  BsGearFill,
} from "react-icons/bs";
import { FaGraduationCap, FaUserAlt, FaUserFriends } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";
import { useEffect } from "react";

function Sidebar() {
  function handleTitle() {
    document.title = document.querySelector(
      ".sidebar > div ul .link.active span"
    ).innerHTML;
  }
  useEffect(() => {
    handleTitle();
    const links = document.querySelectorAll(".sidebar > div ul .link");
    links.forEach((link) => {
      link.onclick = () => {
        window.scrollTo(0 , 0)
        const timeout = setTimeout(() => {
          handleTitle();
          clearTimeout(timeout);
        });
      };
    });
  }, []);
  return (
    <aside className="sidebar">
      <div>
        <h3>John Doe</h3>
        <ul>
          <li>
            <NavLink className="link" to="/" end>
              <IoStatsChartSharp />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/settings">
              <BsGearFill />
              <span>Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/profile">
              <FaUserAlt />
              <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/projects">
              <BsFillDiagram3Fill />
              <span>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/courses">
              <FaGraduationCap />
              <span>Courses</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/friends">
              <FaUserFriends />
              <span>Friends</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/files">
              <BsFillFileEarmarkFill />
              <span>Files</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/plans">
              <BsFillCreditCard2FrontFill />
              <span>Plans</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
