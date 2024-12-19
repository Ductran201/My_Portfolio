import React from "react";
import "./home.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import ButtonCustom from "../../components/button/ButtonCustom";
export default function Home() {
  return (
    <>
      <div className="slide"></div>
      <div className="section home">
        <div className="color-block"></div>

        <div className="home-img">
          <img src="/assests/portfolio.jpg" alt="" />
        </div>

        <div className="home-text">
          <div className="home-text-wrap">
            <h1>
              I'm Tran Trong Duc
              <span>Web Developer</span>
            </h1>
            <p>
              I specialize in creating modern, responsive, and user-friendly
              websites and applications. With expertise in HTML, CSS,
              JavaScript, ReactJS, and Spring Boot, I build scalable solutions
              that align with business goals and user needs. Passionate about
              clean code, I focus on delivering high-performance and visually
              appealing projects. Let's turn ideas into reality with creative
              design and efficient development!
            </p>
            <ButtonCustom className="portfolio-btn">
              <Link to="/about">
                <span className="btn-text">About</span>
                <span className="btn-icon">
                  <ArrowForwardIcon />
                </span>
              </Link>
            </ButtonCustom>
            <ButtonCustom className="about-btn ml-[48px]">
              <Link to="/project">
                <span className="btn-text">Project</span>
                <span className="btn-icon">
                  <ArrowForwardIcon />
                </span>
              </Link>
            </ButtonCustom>
          </div>
        </div>
      </div>
    </>
  );
}
