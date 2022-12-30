import React, { useEffect } from "react";
import "./plans.scss";
import { FaCheck, FaDollarSign, FaInfoCircle, FaTimes } from "react-icons/fa";
import { elementAnimation } from "../dashboard/Dashboard";
function Plans() {
  function handleScrollAnimation() {
    const plans = document.querySelectorAll(".plans .plans-page .plan");
    const features = document.querySelectorAll(
      "section.plans .plans-page .plan ul li"
    );
    elementAnimation(plans);
    elementAnimation(features);
  }
  useEffect(() => {
    handleScrollAnimation();
    window.onscroll = handleScrollAnimation;
  });

  return (
    <section className="plans">
      <h1>plans</h1>
      <div className="plans-page">
        <div className="plan">
          <div className="top green-bg">
            <h2>Free</h2>
            <div className="price">
              <span>
                <FaDollarSign />
              </span>
              0.00
            </div>
          </div>
          <ul>
            <li>
              <span className="green">
                <FaCheck />
              </span>
              <span>Access All Text Lessons</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
            <li>
              <span className="green">
                <FaCheck />
              </span>
              <span>Access All Videos Lessons</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
            <li>
              <span className="green">
                <FaCheck />
              </span>
              <span>Appear On Leaderboard</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
            <li>
              <span className="red">
                <FaTimes />
              </span>
              <span>Browse Content Without Ads</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
            <li>
              <span className="red">
                <FaTimes />
              </span>
              <span>Access All Assignments</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
            <li>
              <span className="red">
                <FaTimes />
              </span>
              <span>Get Daily Prizes</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
            <li>
              <span className="red">
                <FaTimes />
              </span>
              <span>Earn Certificate</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
            <li>
              <span className="red">
                <FaTimes />
              </span>
              <span>1 GB Space For Hosting Files</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
            <li>
              <span className="red">
                <FaTimes />
              </span>
              <span>Access Badge System</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
          </ul>
          <button className="green-bg">Join</button>
        </div>
        <div className="plan">
          <div className="top blue-bg">
            <h2>Basic</h2>
            <div className="price">
              <span>
                <FaDollarSign />
              </span>
              9.99
            </div>
          </div>
          <ul>
            <li>
              <span className="green">
                <FaCheck />
              </span>
              <span>Access All Text Lessons</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
            <li>
              <span className="green">
                <FaCheck />
              </span>
              <span>Access All Videos Lessons</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
            <li>
              <span className="green">
                <FaCheck />
              </span>
              <span>Appear On Leaderboard</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
            <li>
              <span className="green">
                <FaCheck />
              </span>
              <span>Browse Content Without Ads</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
            <li>
              <span className="green">
                <FaCheck />
              </span>
              <span>Access All Assignments</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
            <li>
              <span className="green">
                <FaCheck />
              </span>
              <span>Get Daily Prizes</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
            <li>
              <span className="green">
                <FaCheck />
              </span>
              <span>Earn Certificate</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
            <li>
              <span className="red">
                <FaTimes />
              </span>
              <span>1 GB Space For Hosting Files</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
            <li>
              <span className="red">
                <FaTimes />
              </span>
              <span>Access Badge System</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
          </ul>
          <button className="blue-bg">Join</button>
        </div>
        <div className="plan">
          <div className="top orange-bg">
            <h2>Premium</h2>
            <div className="price">
              <span>
                <FaDollarSign />
              </span>
              19.99
            </div>
          </div>
          <ul>
            <li>
              <span className="green">
                <FaCheck />
              </span>
              <span>Access All Text Lessons</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
            <li>
              <span className="green">
                <FaCheck />
              </span>
              <span>Access All Videos Lessons</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
            <li>
              <span className="green">
                <FaCheck />
              </span>
              <span>Appear On Leaderboard</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
            <li>
              <span className="green">
                <FaCheck />
              </span>
              <span>Browse Content Without Ads</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
            <li>
              <span className="green">
                <FaCheck />
              </span>
              <span>Access All Assignments</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
            <li>
              <span className="green">
                <FaCheck />
              </span>
              <span>Get Daily Prizes</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
            <li>
              <span className="green">
                <FaCheck />
              </span>
              <span>Earn Certificate</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
            <li>
              <span className="green">
                <FaCheck />
              </span>
              <span>1 GB Space For Hosting Files</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
            <li>
              <span className="green">
                <FaCheck />
              </span>
              <span>Access Badge System</span>
              <span className="help">
                <FaInfoCircle />
              </span>
            </li>
          </ul>
          <button className="orange-bg">Join</button>
        </div>
      </div>
    </section>
  );
}

export default Plans;
