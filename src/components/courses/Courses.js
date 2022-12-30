import React, { useEffect } from "react";
import "./courses.scss";
import { FaDollarSign, FaUserAlt } from "react-icons/fa";
import { elementAnimation } from "../dashboard/Dashboard";

function Courses() {
  function handleScrollAnimation() {
    const course = document.querySelectorAll(
      "section.courses .courses-container .course"
    );
    elementAnimation(course);
  }
  useEffect(() => {
    handleScrollAnimation();
    window.onscroll = handleScrollAnimation;
  });
  return (
    <section className="courses">
      <h1>courses</h1>
      <div className="courses-container">
        <div className="course">
          <img
            className="cover"
            src={require("../../assets/imgs/course-01.jpg")}
            alt="course-photos"
          />
          <img
            className="instructor"
            src={require("../../assets/imgs/team-01.png")}
            alt="team-pic"
          />
          <div className="description">
            <h4>Mastering web Design</h4>
            <p>
              Master The Art Of Web Designing And Mocking, Prototyping And
              Creating Web Design Architecture
            </p>
          </div>
          <div className="info">
            <span className="title">Course Info</span>
            <span>
              <FaUserAlt />
              &nbsp; 950
            </span>
            <span>
              <FaDollarSign />
              165
            </span>
          </div>
        </div>
        <div className="course">
          <img
            className="cover"
            src={require("../../assets/imgs/course-02.jpg")}
            alt="course-photos"
          />
          <img
            className="instructor"
            src={require("../../assets/imgs/team-03.png")}
            alt="team-pic"
          />
          <div className="description">
            <h4>Data Structure And Algorithms</h4>
            <p>
              Master The Art Of Data Strcuture And Famous Algorithms Like
              Sorting, Dividing And Conquering
            </p>
          </div>
          <div className="info">
            <span className="title">Course Info</span>
            <span>
              <FaUserAlt />
              &nbsp; 1150
            </span>
            <span>
              <FaDollarSign />
              210
            </span>
          </div>
        </div>
        <div className="course">
          <img
            className="cover"
            src={require("../../assets/imgs/course-03.jpg")}
            alt="course-photos"
          />
          <img
            className="instructor"
            src={require("../../assets/imgs/team-05.png")}
            alt="team-pic"
          />
          <div className="description">
            <h4>Responsive Web Design</h4>
            <p>
              Mastering Responsive Web Design And Media Queries And Know
              Everything About Breakpoints
            </p>
          </div>
          <div className="info">
            <span className="title">Course Info</span>
            <span>
              <FaUserAlt />
              &nbsp; 650
            </span>
            <span>
              <FaDollarSign />
              90
            </span>
          </div>
        </div>
        <div className="course">
          <img
            className="cover"
            src={require("../../assets/imgs/course-04.jpg")}
            alt="course-photos"
          />
          <img
            className="instructor"
            src={require("../../assets/imgs/team-02.png")}
            alt="team-pic"
          />
          <div className="description">
            <h4>Mastering Python</h4>
            <p>
              Mastering Python To Prepare For Data Science And AI And Automating
              Things in Your Life
            </p>
          </div>
          <div className="info">
            <span className="title">Course Info</span>
            <span>
              <FaUserAlt />
              &nbsp; 950
            </span>
            <span>
              <FaDollarSign />
              250
            </span>
          </div>
        </div>
        <div className="course">
          <img
            className="cover"
            src={require("../../assets/imgs/course-05.jpg")}
            alt="course-photos"
          />
          <img
            className="instructor"
            src={require("../../assets/imgs/team-04.png")}
            alt="team-pic"
          />
          <div className="description">
            <h4>PHP Examples</h4>
            <p>
              PHP Tutorials And Examples And Practice On Web Application And
              Connecting With Databases
            </p>
          </div>
          <div className="info">
            <span className="title">Course Info</span>
            <span>
              <FaUserAlt />
              &nbsp; 850
            </span>
            <span>
              <FaDollarSign />
              150
            </span>
          </div>
        </div>
        <div className="course">
          <img
            className="cover"
            src={require("../../assets/imgs/course-01.jpg")}
            alt="course-photos"
          />
          <img
            className="instructor"
            src={require("../../assets/imgs/team-01.png")}
            alt="team-pic"
          />
          <div className="description">
            <h4>Mastering web Design</h4>
            <p>
              Master The Art Of Web Designing And Mocking, Prototyping And
              Creating Web Design Architecture
            </p>
          </div>
          <div className="info">
            <span className="title">Course Info</span>
            <span>
              <FaUserAlt />
              &nbsp; 950
            </span>
            <span>
              <FaDollarSign />
              165
            </span>
          </div>
        </div>
        <div className="course">
          <img
            className="cover"
            src={require("../../assets/imgs/course-02.jpg")}
            alt="course-photos"
          />
          <img
            className="instructor"
            src={require("../../assets/imgs/team-03.png")}
            alt="team-pic"
          />
          <div className="description">
            <h4>Data Structure And Algorithms</h4>
            <p>
              Master The Art Of Data Strcuture And Famous Algorithms Like
              Sorting, Dividing And Conquering
            </p>
          </div>
          <div className="info">
            <span className="title">Course Info</span>
            <span>
              <FaUserAlt />
              &nbsp; 1150
            </span>
            <span>
              <FaDollarSign />
              210
            </span>
          </div>
        </div>
        <div className="course">
          <img
            className="cover"
            src={require("../../assets/imgs/course-03.jpg")}
            alt="course-photos"
          />
          <img
            className="instructor"
            src={require("../../assets/imgs/team-05.png")}
            alt="team-pic"
          />
          <div className="description">
            <h4>Responsive Web Design</h4>
            <p>
              Mastering Responsive Web Design And Media Queries And Know
              Everything About Breakpoints
            </p>
          </div>
          <div className="info">
            <span className="title">Course Info</span>
            <span>
              <FaUserAlt />
              &nbsp; 650
            </span>
            <span>
              <FaDollarSign />
              90
            </span>
          </div>
        </div>
        <div className="course">
          <img
            className="cover"
            src={require("../../assets/imgs/course-04.jpg")}
            alt="course-photos"
          />
          <img
            className="instructor"
            src={require("../../assets/imgs/team-02.png")}
            alt="team-pic"
          />
          <div className="description">
            <h4>Mastering Python</h4>
            <p>
              Mastering Python To Prepare For Data Science And AI And Automating
              Things in Your Life
            </p>
          </div>
          <div className="info">
            <span className="title">Course Info</span>
            <span>
              <FaUserAlt />
              &nbsp; 950
            </span>
            <span>
              <FaDollarSign />
              250
            </span>
          </div>
        </div>
        <div className="course">
          <img
            className="cover"
            src={require("../../assets/imgs/course-05.jpg")}
            alt="course-photos"
          />
          <img
            className="instructor"
            src={require("../../assets/imgs/team-04.png")}
            alt="team-pic"
          />
          <div className="description">
            <h4>PHP Examples</h4>
            <p>
              PHP Tutorials And Examples And Practice On Web Application And
              Connecting With Databases
            </p>
          </div>
          <div className="info">
            <span className="title">Course Info</span>
            <span>
              <FaUserAlt />
              &nbsp; 850
            </span>
            <span>
              <FaDollarSign />
              150
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
