import React, { useEffect } from "react";
import "./projects.scss";
import { FaDollarSign } from "react-icons/fa";
import { elementAnimation } from "../dashboard/Dashboard";
function Projects() {
  function handleScrollAnimation() {
    const projects = document.querySelectorAll(
      "section.projects .projects-container .project"
    );
    elementAnimation(projects);
  }
  function handleBarScroll() {
    document
      .querySelectorAll(
        "section.projects .projects-container .project .info .prog span"
      )
      .forEach((bar) => {
        const positon =
          bar.offsetParent.offsetParent.offsetTop + bar.offsetParent.offsetTop;
        if (window.scrollY + window.innerHeight > positon) {
          bar.style.setProperty("width", bar.style.width, "important");
        } else {
          bar.style.setProperty("width", bar.style.width);
        }
      });
  }
  useEffect(() => {
    window.onscroll = function () {
      handleScrollAnimation();
      handleBarScroll();
    };
    handleScrollAnimation();
    handleBarScroll();
  });
  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        <div className="project">
          <span className="date">15/10/2022</span>
          <h4>Dashboard</h4>
          <p>Dashboard Project Design And Programming And Hosting</p>
          <div className="team">
            <span className="image">
              <img
                src={require("../../assets/imgs/team-01.png")}
                alt="team-member"
              />
            </span>
            <span className="image">
              <img
                src={require("../../assets/imgs/team-02.png")}
                alt="team-member"
              />
            </span>
            <span className="image">
              <img
                src={require("../../assets/imgs/team-03.png")}
                alt="team-member"
              />
            </span>
            <span className="image">
              <img
                src={require("../../assets/imgs/team-04.png")}
                alt="team-member"
              />
            </span>
            <span className="image">
              <img
                src={require("../../assets/imgs/team-05.png")}
                alt="team-member"
              />
            </span>
          </div>
          <div className="techniques">
            <span>Programming</span>
            <span>Design</span>
            <span>Hosting</span>
            <span>Marketing</span>
          </div>
          <div className="info">
            <div className="prog">
              <span className="red" style={{ width: "50%" }}></span>
            </div>
            <div>
              <FaDollarSign />
              2500
            </div>
          </div>
        </div>
        <div className="project">
          <span className="date">15/6/2022</span>
          <h4>Academy Portal</h4>
          <p>Academy Portal Project Design And Programming</p>
          <div className="team">
            <span className="image">
              <img
                src={require("../../assets/imgs/team-02.png")}
                alt="team-member"
              />
            </span>
            <span className="image">
              <img
                src={require("../../assets/imgs/team-03.png")}
                alt="team-member"
              />
            </span>
            <span className="image">
              <img
                src={require("../../assets/imgs/team-05.png")}
                alt="team-member"
              />
            </span>
          </div>
          <div className="techniques">
            <span>Programming</span>
            <span>Design</span>
          </div>
          <div className="info">
            <div className="prog">
              <span className="green" style={{ width: "70%" }}></span>
            </div>
            <div>
              <FaDollarSign />
              1800
            </div>
          </div>
        </div>
        <div className="project">
          <span className="date">18/1/2022</span>
          <h4>Chatting Application</h4>
          <p>Chatting Application Project Design</p>
          <div className="team">
            <span className="image">
              <img
                src={require("../../assets/imgs/team-01.png")}
                alt="team-member"
              />
            </span>
            <span className="image">
              <img
                src={require("../../assets/imgs/team-02.png")}
                alt="team-member"
              />
            </span>
            <span className="image">
              <img
                src={require("../../assets/imgs/team-03.png")}
                alt="team-member"
              />
            </span>
          </div>
          <div className="techniques">
            <span>Design</span>
          </div>
          <div className="info">
            <div className="prog">
              <span className="blue" style={{ width: "100%" }}></span>
            </div>
            <div>
              <FaDollarSign />
              950
            </div>
          </div>
        </div>
        <div className="project">
          <span className="date">12/3/2021</span>
          <h4>company Dashboard</h4>
          <p>company Dashboard Project Design And Programming And Hosting</p>
          <div className="team">
            <span className="image">
              <img
                src={require("../../assets/imgs/team-01.png")}
                alt="team-member"
              />
            </span>
            <span className="image">
              <img
                src={require("../../assets/imgs/team-02.png")}
                alt="team-member"
              />
            </span>
            <span className="image">
              <img
                src={require("../../assets/imgs/team-03.png")}
                alt="team-member"
              />
            </span>
            <span className="image">
              <img
                src={require("../../assets/imgs/team-04.png")}
                alt="team-member"
              />
            </span>
          </div>
          <div className="techniques">
            <span>Programming</span>
            <span>Design</span>
            <span>Hosting</span>
            <span>Marketing</span>
          </div>
          <div className="info">
            <div className="prog">
              <span className="green" style={{ width: "60%" }}></span>
            </div>
            <div>
              <FaDollarSign />
              1700
            </div>
          </div>
        </div>
        <div className="project">
          <span className="date">1/5/2012</span>
          <h4>Portal</h4>
          <p>Ahmed Portal Project Design And Programming</p>
          <div className="team">
            <span className="image">
              <img
                src={require("../../assets/imgs/team-02.png")}
                alt="team-member"
              />
            </span>
            <span className="image">
              <img
                src={require("../../assets/imgs/team-04.png")}
                alt="team-member"
              />
            </span>
            <span className="image">
              <img
                src={require("../../assets/imgs/team-05.png")}
                alt="team-member"
              />
            </span>
          </div>
          <div className="techniques">
            <span>Programming</span>
            <span>Design</span>
          </div>
          <div className="info">
            <div className="prog">
              <span className="green" style={{ width: "70%" }}></span>
            </div>
            <div>
              <FaDollarSign />
              850
            </div>
          </div>
        </div>
        <div className="project">
          <span className="date">6/11/2020</span>
          <h4>Chat Application</h4>
          <p>Chat Application Project Design And Programming And Hosting</p>
          <div className="team">
            <span className="image">
              <img
                src={require("../../assets/imgs/team-01.png")}
                alt="team-member"
              />
            </span>
            <span className="image">
              <img
                src={require("../../assets/imgs/team-02.png")}
                alt="team-member"
              />
            </span>
            <span className="image">
              <img
                src={require("../../assets/imgs/team-05.png")}
                alt="team-member"
              />
            </span>
          </div>
          <div className="techniques">
            <span>Hosting</span>
            <span>Marketing</span>
          </div>
          <div className="info">
            <div className="prog">
              <span className="orange" style={{ width: "90%" }}></span>
            </div>
            <div>
              <FaDollarSign />
              620
            </div>
          </div>
        </div>
        <div className="project">
          <span className="date">25/9/2015</span>
          <h4>E-Commerce Shop</h4>
          <p>E-Commerce Shop Project Design And Programming And Hosting</p>
          <div className="team">
            <span className="image">
              <img
                src={require("../../assets/imgs/team-01.png")}
                alt="team-member"
              />
            </span>
            <span className="image">
              <img
                src={require("../../assets/imgs/team-03.png")}
                alt="team-member"
              />
            </span>
            <span className="image">
              <img
                src={require("../../assets/imgs/team-04.png")}
                alt="team-member"
              />
            </span>
          </div>
          <div className="techniques">
            <span>Programming</span>
            <span>Design</span>
            <span>Marketing</span>
          </div>
          <div className="info">
            <div className="prog">
              <span className="blue" style={{ width: "40%" }}></span>
            </div>
            <div>
              <FaDollarSign />
              570
            </div>
          </div>
        </div>
        <div className="project">
          <span className="date">5/11/2021</span>
          <h4>hardware site</h4>
          <p> hardware site Design And Programming And Hosting</p>
          <div className="team">
            <span className="image">
              <img
                src={require("../../assets/imgs/team-01.png")}
                alt="team-member"
              />
            </span>
            <span className="image">
              <img
                src={require("../../assets/imgs/team-02.png")}
                alt="team-member"
              />
            </span>
            <span className="image">
              <img
                src={require("../../assets/imgs/team-03.png")}
                alt="team-member"
              />
            </span>
            <span className="image">
              <img
                src={require("../../assets/imgs/team-05.png")}
                alt="team-member"
              />
            </span>
          </div>
          <div className="techniques">
            <span>Programming</span>
            <span>Design</span>
            <span>Hosting</span>
            <span>Marketing</span>
          </div>
          <div className="info">
            <div className="prog">
              <span className="red" style={{ width: "65%" }}></span>
            </div>
            <div>
              <FaDollarSign />
              320
            </div>
          </div>
        </div>
        <div className="project">
          <span className="date">1/5/2005</span>
          <h4>portfolio project</h4>
          <p>portfolio Project Design And Programming And Hosting</p>
          <div className="team">
            <span className="image">
              <img
                src={require("../../assets/imgs/team-01.png")}
                alt="team-member"
              />
            </span>
            <span className="image">
              <img
                src={require("../../assets/imgs/team-02.png")}
                alt="team-member"
              />
            </span>
            <span className="image">
              <img
                src={require("../../assets/imgs/team-03.png")}
                alt="team-member"
              />
            </span>
            <span className="image">
              <img
                src={require("../../assets/imgs/team-04.png")}
                alt="team-member"
              />
            </span>
          </div>
          <div className="techniques">
            <span>Programming</span>
            <span>Design</span>
            <span>Hosting</span>
            <span>Marketing</span>
          </div>
          <div className="info">
            <div className="prog">
              <span className="green" style={{ width: "80%" }}></span>
            </div>
            <div>
              <FaDollarSign />
              720
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
