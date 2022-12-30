import React, { useEffect } from "react";
import "./profile.scss";
import { FaStar } from "react-icons/fa";
import Checkbox from "../modules/Checkbox";
import { elementAnimation } from "../dashboard/Dashboard";

function Profile() {
  function handleScrollAnimation() {
    const activities = document.querySelectorAll(
      "section.profile .profile-widgits .other-data .activities .activity"
    );
    const skills = document.querySelectorAll(
      "section.profile .profile-widgits .other-data .skills-card ul li"
    );
    const infoBoxs = document.querySelectorAll(
      "section.profile .profile-widgits .overview .info-box .box"
    );
    elementAnimation(skills);
    elementAnimation(activities);
    if (window.matchMedia("(max-width: 767px)").matches) {
      elementAnimation(infoBoxs);
    }
  }
  useEffect(() => {
    handleScrollAnimation();
    window.onscroll = handleScrollAnimation;
    return () => {};
  }, []);

  return (
    <section className="profile">
      <h1>Profile</h1>
      <div className="profile-widgits">
        <div className="overview">
          <div className="avatar-box">
            <img src={require("../../assets/imgs/avatar.png")} alt="" />
            <h3>John Doe </h3>
            <p className="level-count">Level 101</p>
            <div className="level">
              <span></span>
            </div>
            <div className="rating">
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
            </div>
            <p className="rating-count">478 Ratings</p>
          </div>
          <div className="info-box">
            <div className="box">
              <h4>General Information</h4>
              <div>
                <span>Full name: </span>
                <span>John Doe </span>
              </div>
              <div>
                <span>Gender: </span>
                <span>Male</span>
              </div>
              <div>
                <span>Country: </span>
                <span>Egypt</span>
              </div>
              <div>
                <Checkbox
                  checkedStatus={true}
                  id={"general-information-checkbox"}
                />
              </div>
            </div>
            <div className="box">
              <h4>Personal Information</h4>
              <div>
                <span>Email: </span>
                <span>JohnDoe@JohnDoe.Com</span>
              </div>
              <div>
                <span>Phone: </span>
                <span> 019123456789</span>
              </div>
              <div>
                <span>Date Of Birth: </span>
                <span> 1/5/2005</span>
              </div>
              <div>
                <Checkbox
                  checkedStatus={false}
                  id={"personal-information-checkbox"}
                />
              </div>
            </div>
            <div className="box">
              <h4>Job Information </h4>
              <div>
                <span>Title: </span>
                <span> Front End Developer</span>
              </div>
              <div>
                <span>Framework: </span>
                <span>reactJS</span>
              </div>
              <div>
                <span>Years Of Experience:</span>
                <span> 2+</span>
              </div>
              <div>
                <Checkbox
                  checkedStatus={true}
                  id={"job-information-checkbox"}
                />
              </div>
            </div>
            <div className="box">
              <h4>Billing Information</h4>
              <div>
                <span>Payment Method: </span>
                <span> Paypal</span>
              </div>
              <div>
                <span>Email: </span>
                <span>email@website.com</span>
              </div>
              <div>
                <span>Subscription: </span>
                <span> Monthly</span>
              </div>
              <div>
                <Checkbox
                  checkedStatus={false}
                  id={"billing-information-checkbox"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="other-data">
          <div className="skills-card">
            <h2>My Skills</h2>
            <p>Complete Skills list</p>
            <ul>
              <li>
                <span>HTML</span>
                <span>Pugjs</span>
                <span>HAML</span>
              </li>
              <li>
                <span>CSS</span>
                <span>SASS</span>
                <span>Stylus</span>
              </li>
              <li>
                <span>JavaScript</span>
                <span>TypeScript</span>
              </li>
              <li>
                <span>Vuejs</span>
                <span>Reactjs</span>
              </li>
              <li>
                <span>Jest</span>
                <span>Jasmine</span>
              </li>
              <li>
                <span>PHP</span>
                <span>Laravel</span>
              </li>
              <li>
                <span>Python</span>
                <span>Django</span>
              </li>
            </ul>
          </div>
          <div className="activities">
            <h2>Latest Activities</h2>
            <p>Latest Activities Done By The User</p>
            <div className="activity">
              <img src={require("../../assets/imgs/activity-01.png")} alt="" />
              <div className="info">
                <span>Store</span>
                <span>Bought The React JS Course</span>
              </div>
              <div className="date">
                <span>15:06</span>
                <span>3 Days Ago</span>
              </div>
            </div>
            <div className="activity">
              <img src={require("../../assets/imgs/activity-02.png")} alt="" />
              <div className="info">
                <span>Academy</span>
                <span>Got The PHP Certificate</span>
              </div>
              <div className="date">
                <span>17:04</span>
                <span>Yesterday</span>
              </div>
            </div>
            <div className="activity">
              <img src={require("../../assets/imgs/activity-03.png")} alt="" />
              <div className="info">
                <span>Badges</span>
                <span>Unlocked The 10 Skills Badge</span>
              </div>
              <div className="date">
                <span>18:05</span>
                <span>1 Week ago</span>
              </div>
            </div>
            <div className="activity">
              <img src={require("../../assets/imgs/activity-01.png")} alt="" />
              <div className="info">
                <span>Store</span>
                <span>Bought The javascript Course</span>
              </div>
              <div className="date">
                <span>12:25</span>
                <span>15 Days Ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
