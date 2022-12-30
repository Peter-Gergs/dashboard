import React, { useRef, useEffect } from "react";
import "./dashboard.scss";
import { Link } from "react-router-dom";
import { TbCurrencyDollar } from "react-icons/tb";
import { HiCode } from "react-icons/hi";
import { RiTeamFill } from "react-icons/ri";
import {
  FaComments,
  FaFacebookF,
  FaHeart,
  FaLinkedinIn,
  FaRegCheckCircle,
  FaRegHeart,
  FaRegListAlt,
  FaRegWindowClose,
  FaSpinner,
  FaTrashRestore,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BsTrash } from "react-icons/bs";

function elementAnimation(boxs) {
  boxs.forEach((box) => {
    if (box.offsetTop - window.innerHeight <= window.scrollY) {
      box.style.opacity = "1";
    } else {
      box.style.opacity = "0";
    }
  });
}
function Dashboard() {
  const inputName = useRef();
  const inputText = useRef();
  localStorage.setItem(
    "targetsProgress",
    JSON.stringify({ money: "80%", projects: "55%", team: "75%" })
  );
  const handleScrollAnimation = () => {
    const position = window.scrollY;
    const targets = document.querySelectorAll(
      "#targets .target .details .progress"
    );
    const statistics = document.querySelectorAll(
      ".tickets-statistics .statistics .box"
    );
    const news = document.querySelectorAll(
      "section.dashboard .wrapper .latest-news .new"
    );
    const tasks = document.querySelectorAll(".latest-tasks .task");
    const items = document.querySelectorAll(".top-search-items .item");
    const uploads = document.querySelectorAll(".latest-uploads ul li");
    const progress = document.querySelectorAll(
      ".current-project-progress ul li"
    );
    const reminders = document.querySelectorAll(".reminders ul li");
    const socialIcons = document.querySelectorAll(".social-media-stats .box");
    const tablesRows = document.querySelectorAll(
      ".responsive-table table tbody tr"
    );
    const postContent = document.querySelectorAll(".latest-post div");
    targets.forEach((target) => {
      if (target.offsetTop - window.innerHeight <= position) {
        target.children[0].style = `width: ${target.children[0].children[0].innerHTML}`;
      } else {
        target.children[0].style = "width: 0%";
      }
    });
    statistics.forEach((statistic, key) => {
      statistic.style.transitionDelay = `${key / 5}s`;
      if (statistic.offsetTop - window.innerHeight <= position) {
        statistic.style.opacity = "1";
      } else {
        statistic.style.transitionDelay = `0s`;
        statistic.style.opacity = "0";
      }
    });
    elementAnimation(postContent);
    elementAnimation(news);
    elementAnimation(tasks);
    elementAnimation(items);
    elementAnimation(uploads);
    elementAnimation(reminders);
    elementAnimation(socialIcons);
    if (tablesRows[0].offsetParent) {
      tablesRows.forEach((row) => {
        if (
          row.offsetParent.offsetTop - window.innerHeight + row.offsetTop <=
          position
        ) {
          row.style.opacity = "1";
        } else {
          row.style.opacity = "0";
        }
      });
    }
    if (progress[0].offsetParent) {
      progress.forEach((box) => {
        if (
          box.offsetParent.offsetParent.offsetTop -
            window.innerHeight +
            box.offsetTop <=
          position
        ) {
          box.style.opacity = "1";
        } else {
          box.style.opacity = "0";
        }
      });
    }
    tasks.forEach((task) => {
      const icon = task.children[1];
      const resicon = task.children[2];
      icon.onclick = () => {
        task.classList.add("done");
        icon.style.opacity = "0";
        const timemout = setTimeout(() => {
          icon.style.display = "none";
          resicon.style.display = "block";
          resicon.style.opacity = "1";
          clearTimeout(timemout);
        }, 400);
      };
      resicon.onclick = () => {
        task.classList.remove("done");
        resicon.style.opacity = "0";
        const timemout = setTimeout(() => {
          resicon.style.display = "none";
          icon.style.display = "block";
          icon.style.opacity = "1";
          clearTimeout(timemout);
        }, 400);
      };
    });
  };
  let likeIcon;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    likeIcon = document.getElementById("like");
    for (const widgitName in JSON.parse(localStorage.getItem("dataWidgits"))) {
      document.querySelector(
        `.${widgitName
          .split(/(?=[A-Z])/)
          .slice(0, -1)
          .join("-")
          .toLowerCase()}`
      ).style = `display : ${
        JSON.parse(localStorage.getItem("dataWidgits"))[widgitName]
          ? "block"
          : "none"
      }`;
    }
    handleScrollAnimation();
    window.addEventListener("scroll", handleScrollAnimation, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);
  const handleLike = () => {
    console.log(likeIcon);
    likeIcon.style.animationName = "like";
  };
  const handleUnlike = () => {
    likeIcon.style.animationName = "unlike";
    const timeout = setTimeout(() => {
      likeIcon.style.animationName = "";
      clearTimeout(timeout);
    }, 800);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputName.current.value);
    console.log(inputText.current.value);
    localStorage.setItem(
      "draft",
      JSON.stringify([
        {
          title: inputName.current.value,
          thought: inputText.current.value,
        },
      ])
    );
  };
  const handleChangeTargets = (e) => {
    
  };
  return (
    <section className="dashboard">
      <h1>Dashboard</h1>
      <div className="wrapper">
        <div className="welcome bg-white rad-10">
          <div className="intro">
            <div>
              <h2>Welcome</h2>
              <p>John Doe</p>
            </div>
            <img src={require("../../assets/imgs/welcome.png")} alt="welcome" />
          </div>
          <img
            src={require("../../assets/imgs/avatar.png")}
            alt="avatar"
            className="avatar"
          />
          <div className="body">
            <div>
              John Doe <span className="body-span">Developer</span>
            </div>
            <div>
              74 <span className="body-span">Projects</span>
            </div>
            <div>
              $5600 <span className="body-span">Earned</span>
            </div>
          </div>
          <Link to={"profile"} className={"visit"}>
            Profile
          </Link>
        </div>
        <div className="quick-draft">
          <h2>quick draft</h2>
          <p>write a draft for your ideas</p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" placeholder="Title" ref={inputName} />
            <textarea placeholder="Your Thought" ref={inputText}></textarea>
            <input type="submit" value="Save" />
          </form>
        </div>
        <div className="yearly-targets" id="targets">
          <h2>Yearly Targets</h2>
          <p>Targets Of The Year</p>
          <div className="target">
            <div className="icon-box blue">
              <TbCurrencyDollar className="icon" />
            </div>
            <div className="details">
              <span>Money</span>
              <span>$20,000</span>
              <div className="progress blue">
                <span>
                  <span>
                    {JSON.parse(localStorage.getItem("targetsProgress")).money}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="target">
            <div className="icon-box orange">
              <HiCode className="icon" />
            </div>
            <div className="details">
              <span>Projects</span>
              <span>24</span>
              <div className="progress orange">
                <span>
                  <span>
                    {
                      JSON.parse(localStorage.getItem("targetsProgress"))
                        .projects
                    }
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="target">
            <div className="icon-box green">
              <RiTeamFill className="icon" />
            </div>
            <div className="details">
              <span>Team</span>
              <span>12</span>
              <div className="progress green">
                <span>
                  <span>
                    {JSON.parse(localStorage.getItem("targetsProgress")).team}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <button onClick={handleChangeTargets}>Change</button>
        </div>
        <div className="tickets-statistics">
          <h2 className="mt-0 mb-10"> Tickets Statistics</h2>
          <p>Everything about support tickets</p>
          <div className="statistics">
            <div className="box">
              <FaRegListAlt className="icon orange" />
              <span>2500</span>
              Total
            </div>
            <div className="box">
              <FaSpinner className="icon blue" />
              <span>500</span>
              Pending
            </div>
            <div className="box">
              <FaRegCheckCircle className="icon green" />
              <span>1900</span>
              closed
            </div>
            <div className="box">
              <FaRegWindowClose className="icon red" />
              <span>100</span>
              deleted
            </div>
          </div>
        </div>
        <div className="latest-news">
          <h2>latest news</h2>
          <div className="new">
            <img src={require("../../assets/imgs/news-01.png")} alt="news" />
            <div className="info">
              <h3>Created SASS Section</h3>
              <p>New SASS Examples and tutorials</p>
            </div>
            <span className="date">3 Days Ago</span>
          </div>
          <div className="new">
            <img src={require("../../assets/imgs/news-02.png")} alt="news" />
            <div className="info">
              <h3>Changed The Design</h3>
              <p>A Brand New Website Design</p>
            </div>
            <span className="date">5 Days Ago</span>
          </div>
          <div className="new">
            <img src={require("../../assets/imgs/news-03.png")} alt="news" />
            <div className="info">
              <h3>Team Increased</h3>
              <p>3 Developers Joined The Team</p>
            </div>
            <span className="date">7 Days Ago</span>
          </div>
          <div className="new">
            <img src={require("../../assets/imgs/news-04.png")} alt="news" />
            <div className="info">
              <h3>Added Payment Gateway</h3>
              <p>Many New Payment Gateways Added</p>
            </div>
            <span className="date">8 Days Ago</span>
          </div>
        </div>
        <div className="latest-tasks">
          <h2>Latest Tasks</h2>
          <div className="task">
            <div className="info">
              <h3>Record One New Video</h3>
              <p>Record Python Create Exe Project</p>
            </div>
            <BsTrash className={"delete"} />
            <FaTrashRestore className="restore" style={{ display: "none" }} />
          </div>
          <div className="task">
            <div className="info">
              <h3>Write Article</h3>
              <p>Write Low Level vs High Level Languages</p>
            </div>
            <BsTrash className={"delete"} />
            <FaTrashRestore className="restore" style={{ display: "none" }} />
          </div>
          <div className="task">
            <div className="info">
              <h3>Finish Project</h3>
              <p>Publish Academy Programming Project</p>
            </div>
            <BsTrash className={"delete"} />
            <FaTrashRestore className="restore" style={{ display: "none" }} />
          </div>
          <div className="task">
            <div className="info">
              <h3>Attend The Meeting</h3>
              <p>Attend The Project Business Analysis Meeting</p>
            </div>
            <BsTrash className={"delete"} />
            <FaTrashRestore className="restore" style={{ display: "none" }} />
          </div>
          <div className="task">
            <div className="info">
              <h3>Finish Lesson</h3>
              <p>Finish Teaching Flex Box</p>
            </div>
            <BsTrash className={"delete"} />
            <FaTrashRestore className="restore" style={{ display: "none" }} />
          </div>
        </div>
        <div className="top-search-items">
          <h2>Top search items</h2>
          <div className="items-head">
            <div>Keyword</div>
            <div>Search Count</div>
          </div>
          <div className="item">
            <span>Programming</span>
            <span>220</span>
          </div>
          <div className="item">
            <span>JavaScript</span>
            <span>180</span>
          </div>
          <div className="item">
            <span>PHP</span>
            <span>160</span>
          </div>
          <div className="item">
            <span>Code</span>
            <span>145</span>
          </div>
          <div className="item">
            <span>Design</span>
            <span>110</span>
          </div>
          <div className="item">
            <span>Logic</span>
            <span>95</span>
          </div>
        </div>
        <div className="latest-uploads">
          <h2>Latest Upload</h2>
          <ul>
            <li>
              <div>
                <img
                  src={require("../../assets/imgs/pdf.svg").default}
                  alt="pdf"
                />
                <div>
                  <span>plan.pdf</span>
                  <span>John Doe</span>
                </div>
              </div>
              <div>2.9MB</div>
            </li>
            <li>
              <div>
                <img
                  src={require("../../assets/imgs/avi.svg").default}
                  alt="avi"
                />
                <div>
                  <span>advertisement.avi</span>
                  <span>markter</span>
                </div>
              </div>
              <div>5.1MB</div>
            </li>
            <li>
              <div>
                <img
                  src={require("../../assets/imgs/psd.svg").default}
                  alt="psd"
                />
                <div>
                  <span>design.pdf</span>
                  <span>designer</span>
                </div>
              </div>
              <div>7.6MB</div>
            </li>
            <li>
              <div>
                <img
                  src={require("../../assets/imgs/zip.svg").default}
                  alt="files"
                />
                <div>
                  <span>project-files.zip</span>
                  <span>manager</span>
                </div>
              </div>
              <div>6.1MB</div>
            </li>
            <li>
              <div>
                <img
                  src={require("../../assets/imgs/dll.svg").default}
                  alt="dll"
                />
                <div>
                  <span>configration.dll</span>
                  <span>Developer</span>
                </div>
              </div>
              <div>19KB</div>
            </li>
            <li>
              <div>
                <img
                  src={require("../../assets/imgs/eps.svg").default}
                  alt="eps"
                />
                <div>
                  <span>illustration.eps</span>
                  <span>designer</span>
                </div>
              </div>
              <div>3.2MB</div>
            </li>
          </ul>
        </div>
        <div className="current-project-progress">
          <h2>Current Project progress</h2>
          <ul>
            <li className="done">Got the Project</li>
            <li className="done">Started the Project</li>
            <li className="done">The Project About To Finish</li>
            <li className="current">Test The Project</li>
            <li>Finish the project and get money</li>
          </ul>
          <img
            src={require("../../assets/imgs/project.png")}
            alt="project"
            className="launch-icon"
          />
        </div>
        <div className="reminders">
          <h2>reminders</h2>
          <ul>
            <li className="blue">
              <span></span>
              <div>
                <p>Check My Tasks List</p>
                <span>21/04/2022 - 12:00am</span>
              </div>
            </li>
            <li className="green">
              <span></span>
              <div>
                <p>Check My Projects</p>
                <span>1/05/2022 - 12:00am</span>
              </div>
            </li>
            <li className="orange">
              <span></span>
              <div>
                <p>Call All My Clients</p>
                <span>1/11/2022 - 12:00am</span>
              </div>
            </li>
            <li className="red">
              <span></span>
              <div>
                <p>Finish The Development Workshop</p>
                <span>20/12/2022 - 12:00am</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="latest-post">
          <h2>Latest Post</h2>
          <div className="top">
            <img src={require("../../assets/imgs/avatar.png")} alt="avatar" />
            <div className="info">
              <span>John Doe </span>
              <span>3 Hours Ago</span>
            </div>
          </div>
          <div className="post-content">
            You Can Fool All Of The People Some Of The Time, And Some Of The
            People All Of The Time, But You Can't Fool All Of The People All Of
            The Time.
          </div>
          <div className="post-states">
            <div>
              <FaHeart
                id="like"
                onClick={() => {
                  handleUnlike();
                }}
              />
              <FaRegHeart
                className="icon"
                onClick={() => {
                  handleLike();
                }}
              />
              <span> 1.8K</span>
            </div>
            <div>
              <FaComments className="icon" />
              <span> 500 Comment</span>
            </div>
          </div>
        </div>
        <div className="social-media-stats">
          <h2>Social Media stats</h2>
          <div className="box twitter">
            <div className="icon-box">
              <FaTwitter className="icon" />
            </div>
            <span>90K Followers</span>
            <a href="https://www.twitter.com">Follow</a>
          </div>
          <div className="box facebook">
            <div className="icon-box">
              <FaFacebookF className="icon" />
            </div>
            <span>760K Like</span>
            <a href="https://www.facebook.com">Follow</a>
          </div>
          <div className="box youtube">
            <div className="icon-box">
              <FaYoutube className="icon" />
            </div>
            <span>1.2M Subs</span>
            <a href="https://www.youtube.com">Follow</a>
          </div>
          <div className="box linkedin">
            <div className="icon-box">
              <FaLinkedinIn className="icon" />
            </div>
            <span>74K Followers</span>
            <a href="https://www.linkedin.com">Follow</a>
          </div>
        </div>
      </div>
      <div className="projects">
        <h2>Projects</h2>
        <div className="responsive-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Finish Date</th>
                <th>Client</th>
                <th>Price</th>
                <th>Team</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ministry Wikipedia </td>
                <td>10 May 2022 </td>
                <td>Ministry</td>
                <td>$5300 </td>
                <td>
                  <img
                    src={require("../../assets/imgs/team-01.png")}
                    alt="team"
                  />
                  <img
                    src={require("../../assets/imgs/team-02.png")}
                    alt="team"
                  />
                  <img
                    src={require("../../assets/imgs/team-03.png")}
                    alt="team"
                  />
                  <img
                    src={require("../../assets/imgs/team-05.png")}
                    alt="team"
                  />
                </td>
                <td>
                  <span className="project-status">Pending</span>
                </td>
              </tr>
              <tr>
                <td>Dashboard </td>
                <td>05 Sep 2021 </td>
                <td>Company</td>
                <td>$1500 </td>
                <td>
                  <img
                    src={require("../../assets/imgs/team-01.png")}
                    alt="team"
                  />
                  <img
                    src={require("../../assets/imgs/team-02.png")}
                    alt="team"
                  />
                  <img
                    src={require("../../assets/imgs/team-05.png")}
                    alt="team"
                  />
                </td>
                <td>
                  <span className="project-status">Completed</span>
                </td>
              </tr>
              <tr>
                <td>Portfolio Website</td>
                <td>12 Oct 2021 </td>
                <td>Designer</td>
                <td>$800 </td>
                <td>
                  <img
                    src={require("../../assets/imgs/team-01.png")}
                    alt="team"
                  />
                  <img
                    src={require("../../assets/imgs/team-04.png")}
                    alt="team"
                  />
                  <img
                    src={require("../../assets/imgs/team-03.png")}
                    alt="team"
                  />
                </td>
                <td>
                  <span className="project-status">In Progress</span>
                </td>
              </tr>
              <tr>
                <td>Book Ticket Website</td>
                <td>22 May 2021</td>
                <td>Airways</td>
                <td>$600 </td>
                <td>
                  <img
                    src={require("../../assets/imgs/team-02.png")}
                    alt="team"
                  />
                  <img
                    src={require("../../assets/imgs/team-04.png")}
                    alt="team"
                  />
                  <img
                    src={require("../../assets/imgs/team-05.png")}
                    alt="team"
                  />
                </td>
                <td>
                  <span className="project-status">Completed</span>
                </td>
              </tr>
              <tr>
                <td>selling System</td>
                <td>21 jun 2021 </td>
                <td>Hyper Market</td>
                <td>$300 </td>
                <td>
                  <img
                    src={require("../../assets/imgs/team-03.png")}
                    alt="team"
                  />
                  <img
                    src={require("../../assets/imgs/team-05.png")}
                    alt="team"
                  />
                </td>
                <td>
                  <span className="project-status">Rejected</span>
                </td>
              </tr>
              <tr>
                <td>Car rent Website</td>
                <td>12 feb 2022 </td>
                <td>drivers</td>
                <td>$2600 </td>
                <td>
                  <img
                    src={require("../../assets/imgs/team-01.png")}
                    alt="team"
                  />
                  <img
                    src={require("../../assets/imgs/team-02.png")}
                    alt="team"
                  />
                  <img
                    src={require("../../assets/imgs/team-03.png")}
                    alt="team"
                  />
                  <img
                    src={require("../../assets/imgs/team-04.png")}
                    alt="team"
                  />
                </td>
                <td>
                  <span className="project-status">Completed</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export { elementAnimation };
export default Dashboard;
