import React, { useEffect } from "react";
import "./friends.scss";
import {
  FaCodeBranch,
  FaPhoneAlt,
  FaRegEnvelope,
  FaRegSmile,
} from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";
import { Link } from "react-router-dom";
import { elementAnimation } from "../dashboard/Dashboard";
function Friends() {
  function handleScrollAnimation() {
    const friends = document.querySelectorAll(
      "section.friends .friends-container .friend"
    );
    elementAnimation(friends);
  }
  function handleClick(e) {
    console.log(e.target.parentElement.parentElement.parentElement.remove());
    handleScrollAnimation();
  }
  useEffect(() => {
    handleScrollAnimation();
    window.onscroll = handleScrollAnimation;
  }, []);
  return (
    <section className="friends">
      <h1>Friends</h1>
      <div className="friends-container">
        <div className="friend">
          <div className="contact">
            <span>
              <FaPhoneAlt />
            </span>
            <span>
              <FaRegEnvelope />
            </span>
          </div>
          <div className="title">
            <img
              src={require("../../assets/imgs/friend-01.jpg")}
              alt="friend"
            />
            <h4>John Doe</h4>
            <p>photoshop designer</p>
          </div>
          <div className="info">
            <div>
              <FaRegSmile />
              <span> 99 Friend</span>
            </div>
            <div>
              <FaCodeBranch />
              <span> 15 Projects</span>
            </div>
            <div>
              <BsNewspaper />
              <span> 25 Articles</span>
            </div>
          </div>
          <div className="control">
            <span>Joined 2/10/2021</span>
            <div>
              <Link to={"/profile"}>Profile</Link>
              <button onClick={handleClick}>Remove</button>
            </div>
          </div>
        </div>
        <div className="friend">
          <div className="contact">
            <span>
              <FaPhoneAlt />
            </span>
            <span>
              <FaRegEnvelope />
            </span>
          </div>
          <div className="title">
            <img
              src={require("../../assets/imgs/friend-02.jpg")}
              alt="friend"
            />
            <h4>John Doe</h4>
            <p>photoshop designer</p>
          </div>
          <div className="info">
            <div>
              <FaRegSmile />
              <span> 99 Friend</span>
            </div>
            <div>
              <FaCodeBranch />
              <span> 15 Projects</span>
            </div>
            <div>
              <BsNewspaper />
              <span> 25 Articles</span>
            </div>
            <span className="vip">VIP</span>
          </div>
          <div className="control">
            <span>Joined 2/10/2021</span>
            <div>
              <Link to={"/profile"}>Profile</Link>
              <button onClick={handleClick}>Remove</button>
            </div>
          </div>
        </div>
        <div className="friend">
          <div className="contact">
            <span>
              <FaPhoneAlt />
            </span>
            <span>
              <FaRegEnvelope />
            </span>
          </div>
          <div className="title">
            <img
              src={require("../../assets/imgs/friend-03.jpg")}
              alt="friend"
            />
            <h4>John Doe</h4>
            <p>photoshop designer</p>
          </div>
          <div className="info">
            <div>
              <FaRegSmile />
              <span> 99 Friend</span>
            </div>
            <div>
              <FaCodeBranch />
              <span> 15 Projects</span>
            </div>
            <div>
              <BsNewspaper />
              <span> 25 Articles</span>
            </div>
          </div>
          <div className="control">
            <span>Joined 2/10/2021</span>
            <div>
              <Link to={"/profile"}>Profile</Link>
              <button onClick={handleClick}>Remove</button>
            </div>
          </div>
        </div>
        <div className="friend">
          <div className="contact">
            <span>
              <FaPhoneAlt />
            </span>
            <span>
              <FaRegEnvelope />
            </span>
          </div>
          <div className="title">
            <img
              src={require("../../assets/imgs/friend-04.jpg")}
              alt="friend"
            />
            <h4>John Doe</h4>
            <p>photoshop designer</p>
          </div>
          <div className="info">
            <div>
              <FaRegSmile />
              <span> 99 Friend</span>
            </div>
            <div>
              <FaCodeBranch />
              <span> 15 Projects</span>
            </div>
            <div>
              <BsNewspaper />
              <span> 25 Articles</span>
            </div>
          </div>
          <div className="control">
            <span>Joined 2/10/2021</span>
            <div>
              <Link to={"/profile"}>Profile</Link>
              <button onClick={handleClick}>Remove</button>
            </div>
          </div>
        </div>
        <div className="friend">
          <div className="contact">
            <span>
              <FaPhoneAlt />
            </span>
            <span>
              <FaRegEnvelope />
            </span>
          </div>
          <div className="title">
            <img
              src={require("../../assets/imgs/friend-05.jpg")}
              alt="friend"
            />
            <h4>John Doe</h4>
            <p>photoshop designer</p>
          </div>
          <div className="info">
            <div>
              <FaRegSmile />
              <span> 99 Friend</span>
            </div>
            <div>
              <FaCodeBranch />
              <span> 15 Projects</span>
            </div>
            <div>
              <BsNewspaper />
              <span> 25 Articles</span>
            </div>
          </div>
          <div className="control">
            <span>Joined 2/10/2021</span>
            <div>
              <Link to={"/profile"}>Profile</Link>
              <button onClick={handleClick}>Remove</button>
            </div>
          </div>
        </div>
        <div className="friend">
          <div className="contact">
            <span>
              <FaPhoneAlt />
            </span>
            <span>
              <FaRegEnvelope />
            </span>
          </div>
          <div className="title">
            <img
              src={require("../../assets/imgs/friend-02.jpg")}
              alt="friend"
            />
            <h4>John Doe</h4>
            <p>photoshop designer</p>
          </div>
          <div className="info">
            <div>
              <FaRegSmile />
              <span> 99 Friend</span>
            </div>
            <div>
              <FaCodeBranch />
              <span> 15 Projects</span>
            </div>
            <div>
              <BsNewspaper />
              <span> 25 Articles</span>
            </div>
            <span className="vip">VIP</span>
          </div>
          <div className="control">
            <span>Joined 2/10/2021</span>
            <div>
              <Link to={"/profile"}>Profile</Link>
              <button onClick={handleClick}>Remove</button>
            </div>
          </div>
        </div>
        <div className="friend">
          <div className="contact">
            <span>
              <FaPhoneAlt />
            </span>
            <span>
              <FaRegEnvelope />
            </span>
          </div>
          <div className="title">
            <img
              src={require("../../assets/imgs/friend-04.jpg")}
              alt="friend"
            />
            <h4>John Doe</h4>
            <p>photoshop designer</p>
          </div>
          <div className="info">
            <div>
              <FaRegSmile />
              <span> 99 Friend</span>
            </div>
            <div>
              <FaCodeBranch />
              <span> 15 Projects</span>
            </div>
            <div>
              <BsNewspaper />
              <span> 25 Articles</span>
            </div>
            <span className="vip">VIP</span>
          </div>
          <div className="control">
            <span>Joined 2/10/2021</span>
            <div>
              <Link to={"/profile"}>Profile</Link>
              <button onClick={handleClick}>Remove</button>
            </div>
          </div>
        </div>
        <div className="friend">
          <div className="contact">
            <span>
              <FaPhoneAlt />
            </span>
            <span>
              <FaRegEnvelope />
            </span>
          </div>
          <div className="title">
            <img
              src={require("../../assets/imgs/friend-01.jpg")}
              alt="friend"
            />
            <h4>John Doe</h4>
            <p>photoshop designer</p>
          </div>
          <div className="info">
            <div>
              <FaRegSmile />
              <span> 99 Friend</span>
            </div>
            <div>
              <FaCodeBranch />
              <span> 15 Projects</span>
            </div>
            <div>
              <BsNewspaper />
              <span> 25 Articles</span>
            </div>
          </div>
          <div className="control">
            <span>Joined 2/10/2021</span>
            <div>
              <Link to={"/profile"}>Profile</Link>
              <button onClick={handleClick}>Remove</button>
            </div>
          </div>
        </div>
        <div className="friend">
          <div className="contact">
            <span>
              <FaPhoneAlt />
            </span>
            <span>
              <FaRegEnvelope />
            </span>
          </div>
          <div className="title">
            <img
              src={require("../../assets/imgs/friend-03.jpg")}
              alt="friend"
            />
            <h4>John Doe</h4>
            <p>photoshop designer</p>
          </div>
          <div className="info">
            <div>
              <FaRegSmile />
              <span> 99 Friend</span>
            </div>
            <div>
              <FaCodeBranch />
              <span> 15 Projects</span>
            </div>
            <div>
              <BsNewspaper />
              <span> 25 Articles</span>
            </div>
            <span className="vip">VIP</span>
          </div>
          <div className="control">
            <span>Joined 2/10/2021</span>
            <div>
              <Link to={"/profile"}>Profile</Link>
              <button onClick={handleClick}>Remove</button>
            </div>
          </div>
        </div>
        <div className="friend">
          <div className="contact">
            <span>
              <FaPhoneAlt />
            </span>
            <span>
              <FaRegEnvelope />
            </span>
          </div>
          <div className="title">
            <img
              src={require("../../assets/imgs/friend-05.jpg")}
              alt="friend"
            />
            <h4>John Doe</h4>
            <p>photoshop designer</p>
          </div>
          <div className="info">
            <div>
              <FaRegSmile />
              <span> 99 Friend</span>
            </div>
            <div>
              <FaCodeBranch />
              <span> 15 Projects</span>
            </div>
            <div>
              <BsNewspaper />
              <span> 25 Articles</span>
            </div>
          </div>
          <div className="control">
            <span>Joined 2/10/2021</span>
            <div>
              <Link to={"/profile"}>Profile</Link>
              <button onClick={handleClick}>Remove</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Friends;
