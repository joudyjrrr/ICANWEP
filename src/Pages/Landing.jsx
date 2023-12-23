import React from "react";
import { TypeAnimation } from "react-type-animation";
import img from "../assets/undraw_Engineering_team_a7n2-removebg-preview.png";
const Landing = () => {
  return (
    <div className="hero">
      <div className="container">
        <div class="heroAreaText">
          <div class="iconsSoial">
            <ul>
              <li>
                <a href="https://www.facebook.com/ulutechsy">
                  <i class="fab fa-facebook-f sc-icon"></i>
                </a>
              </li>
              <li>
                <a href='<i class="fab fa-instagram sc-icon"></i>'>
                  <i class="fab fa-instagram sc-icon"></i>
                </a>
              </li>
              <li>
                {" "}
                <a href="https://www.linkedin.com/company/ulutechsy/">
                  <i class="fab fa-linkedin sc-icon"></i>
                </a>
              </li>
              <li>
                {" "}
                <a href="https://wa.me/message/H72N52B7GGMZH1">
                  <i class="fa-brands fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="titleHome">
            <span> IT TECHINICAL solutions</span>
          </div>
          <h1>
            <TypeAnimation
              sequence={["ICAN", 1000, "SoftwearCompany", 1000]}
              wrapper="h1"
              speed={40}
              repeat={Infinity}
            />
          </h1>
          <p>In order to achieve your future vision...we are the best</p>
          <a href="" class="btn">
            {" "}
            See More
          </a>
        </div>

        <div class="heroImg">
          <img src={img} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
