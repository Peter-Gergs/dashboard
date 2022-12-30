import React, { useEffect, useState } from "react";
import "./settings.scss";
import {
  FaFacebookF,
  FaLinkedin,
  FaServer,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { elementAnimation } from "../dashboard/Dashboard";
import WidgitCheckbox from "../modules/WidgitCheckbox";
import Radio from "../modules/Radio";
import Checkbox from "../modules/Checkbox";
function Settings() {
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState("JohnDoe@JohnDoe.com");
  const handleScrollAnimation = () => {
    const secBoxs = document.querySelectorAll(".settings-page > div .sec-box");
    const infoBoxs = document.querySelectorAll(
      ".settings-page > div .info-input"
    );
    const socialBoxs = document.querySelectorAll(
      ".settings-page > div .social-box"
    );
    const checkboxs = document.querySelectorAll(
      ".settings-page > div .control-checkbox"
    );
    const radios = document.querySelectorAll(".settings-page > div .radio");
    elementAnimation(secBoxs);
    elementAnimation(infoBoxs);
    elementAnimation(socialBoxs);
    elementAnimation(radios);
    elementAnimation(checkboxs);
  };
  useEffect(() => {
    handleScrollAnimation();
    window.addEventListener("scroll", handleScrollAnimation, { passive: true });
    if (!localStorage.getItem("serverName")) {
      document.getElementById("plus").setAttribute("checked", "");
    } else {
      document
        .getElementById(localStorage.getItem("serverName"))
        .setAttribute("checked", "");
    }
    if (!localStorage.getItem("backupTime")) {
      document.getElementById("daily").setAttribute("checked", "");
    } else {
      document
        .getElementById(localStorage.getItem("backupTime").toLowerCase())
        .setAttribute("checked", "");
    }
    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);
  const handleChangeStaus = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
    const emailInput = document.getElementById("email");
    if (emailInput.hasAttribute("disabled")) {
      emailInput.removeAttribute("disabled");
      emailInput.focus();
      console.log();
    } else {
      emailInput.setAttribute("disabled", "");
    }
  };
  return (
    <section className="settings">
      <h1>Settings</h1>
      <div className="settings-page">
        <div>
          <h2>Site Control</h2>
          <p>Control The Website If There Is Maintenance</p>
          <div className="website-control">
            <div>
              <span>Website control</span>
              <p>Open/Close Website And Type The Reason</p>
            </div>
            <Checkbox id={"control-checkbox"} />
          </div>
          <textarea placeholder="Close Message Here"></textarea>
        </div>
        <div>
          <h2>General info</h2>
          <p>General information about your account</p>
          <form>
            <div className="info-input">
              <label htmlFor="first">First Name</label>
              <input type="text" placeholder="First Name" id="first" />
            </div>
            <div className="info-input">
              <label htmlFor="last">Last Name</label>
              <input type="text" placeholder="Last Name" id="last" />
            </div>
            <div className="info-input">
              <label htmlFor="email">email</label>
              <input
                type="email"
                value={email}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                disabled
              />
              <button
                id="changebtn"
                onClick={(e) => {
                  handleChangeStaus(e);
                }}
              >
                {isEditing ? "done" : "Change"}
              </button>
            </div>
          </form>
        </div>
        <div>
          <h2>Security Info</h2>
          <p>Security Information About Your Account</p>
          <div className="sec-box">
            <div>
              <span>Password</span>
              <p>Last Change on 25/10/2021</p>
            </div>
            <button>Change</button>
          </div>
          <div className="sec-box">
            <div>
              <span>Two-Factor Authentication</span>
              <p>Enable/Disable The Feature</p>
            </div>
            <Checkbox checkedStatus={true} id={"authentication-checkbox"} />
          </div>
          <div className="sec-box devices">
            <div>
              <span>Devices</span>
              <p>Check The Login Devices List</p>
            </div>
            <button>Devices</button>
          </div>
        </div>
        <div>
          <h2>Social Info</h2>
          <p>Social Media Information</p>
          <div className="social-box">
            <div className="icon">
              <FaTwitter />
            </div>
            <input type="text" placeholder="Twitter Username" />
          </div>
          <div className="social-box">
            <div className="icon">
              <FaFacebookF />
            </div>
            <input type="text" placeholder="Facebook Username" />
          </div>
          <div className="social-box">
            <div className="icon">
              <FaLinkedin />
            </div>
            <input type="text" placeholder="Linkedin Username" />
          </div>
          <div className="social-box">
            <div className="icon">
              <FaYoutube />
            </div>
            <input type="text" placeholder="YouTube Username" />
          </div>
        </div>
        <div>
          <h2>Widgets Control</h2>
          <p>Show/Hide Widgets</p>
          <WidgitCheckbox
            checkedStatus={
              localStorage.getItem("dataWidgits")
                ? JSON.parse(localStorage.getItem("dataWidgits"))
                    .quickDraftCheckbox
                : true
            }
          >
            Quick Draft
          </WidgitCheckbox>
          <WidgitCheckbox
            checkedStatus={
              localStorage.getItem("dataWidgits")
                ? JSON.parse(localStorage.getItem("dataWidgits"))
                    .yearlyTargetsCheckbox
                : true
            }
          >
            Yearly Targets
          </WidgitCheckbox>
          <WidgitCheckbox
            checkedStatus={
              localStorage.getItem("dataWidgits")
                ? JSON.parse(localStorage.getItem("dataWidgits"))
                    .ticketsStatisticsCheckbox
                : true
            }
          >
            Tickets Statistics
          </WidgitCheckbox>
          <WidgitCheckbox
            checkedStatus={
              localStorage.getItem("dataWidgits")
                ? JSON.parse(localStorage.getItem("dataWidgits"))
                    .latestNewsCheckbox
                : true
            }
          >
            Latest News
          </WidgitCheckbox>
          <WidgitCheckbox
            checkedStatus={
              localStorage.getItem("dataWidgits")
                ? JSON.parse(localStorage.getItem("dataWidgits"))
                    .latestTasksCheckbox
                : true
            }
          >
            Latest Tasks
          </WidgitCheckbox>
          <WidgitCheckbox
            checkedStatus={
              localStorage.getItem("dataWidgits")
                ? JSON.parse(localStorage.getItem("dataWidgits"))
                    .topSearchItemsCheckbox
                : false
            }
          >
            Top Search Items
          </WidgitCheckbox>
          <WidgitCheckbox
            checkedStatus={
              localStorage.getItem("dataWidgits")
                ? JSON.parse(localStorage.getItem("dataWidgits"))
                    .latestUploadsCheckbox
                : true
            }
          >
            Latest Uploads
          </WidgitCheckbox>
          <WidgitCheckbox
            checkedStatus={
              localStorage.getItem("dataWidgits")
                ? JSON.parse(localStorage.getItem("dataWidgits"))
                    .currentProjectProgressCheckbox
                : true
            }
          >
            current Project Progress
          </WidgitCheckbox>
          <WidgitCheckbox
            checkedStatus={
              localStorage.getItem("dataWidgits")
                ? JSON.parse(localStorage.getItem("dataWidgits"))
                    .remindersCheckbox
                : true
            }
          >
            Reminders
          </WidgitCheckbox>
          <WidgitCheckbox
            checkedStatus={
              localStorage.getItem("dataWidgits")
                ? JSON.parse(localStorage.getItem("dataWidgits"))
                    .latestPostCheckbox
                : false
            }
          >
            Latest Post
          </WidgitCheckbox>
          <WidgitCheckbox
            checkedStatus={
              localStorage.getItem("dataWidgits")
                ? JSON.parse(localStorage.getItem("dataWidgits"))
                    .socialMediaStatsCheckbox
                : true
            }
          >
            Social Media Stats
          </WidgitCheckbox>
          <WidgitCheckbox
            checkedStatus={
              localStorage.getItem("dataWidgits")
                ? JSON.parse(localStorage.getItem("dataWidgits"))
                    .projectsCheckbox
                : true
            }
          >
            Projects
          </WidgitCheckbox>
        </div>
        <div>
          <h2>Backup Manager</h2>
          <p>Control Backup Time And Location</p>
          <Radio>Daily</Radio>
          <Radio>Weekly</Radio>
          <Radio>Monthly</Radio>
          <div className="servers">
            <input
              type="radio"
              name="servers"
              id="mediafire"
              onChange={(e) => {
                localStorage.setItem("serverName", e.target.id);
              }}
            />
            <div className="server">
              <label htmlFor="mediafire">
                <i>
                  <FaServer />
                </i>
                Mediafire
              </label>
            </div>
            <input
              type="radio"
              name="servers"
              id="plus"
              onChange={(e) => {
                localStorage.setItem("serverName", e.target.id);
              }}
            />
            <div className="server">
              <label htmlFor="plus">
                <i>
                  <FaServer />
                </i>
                Plus
              </label>
            </div>
            <input
              type="radio"
              name="servers"
              id="mega"
              onChange={(e) => {
                localStorage.setItem("serverName", e.target.id);
              }}
            />
            <div className="server">
              <label htmlFor="mega">
                <i>
                  <FaServer />
                </i>
                Mega
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Settings;
