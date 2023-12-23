import React, { useEffect, useState } from "react";
import CountUp from 'react-countup';
const Features = () => {
  const [startCount, setStartCount] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const { top } = document
        .getElementById("feature")
        .getBoundingClientRect();
      if (top <= window.innerHeight && !startCount) {
        console.log("Reached Statistics!");
        setStartCount(true);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startCount]);

  return (
    <div className="feature" id="feature">
      <div className="main-title-white">Features</div>
      <div className="featur-content">
        <div className="box">
          <i class="fa-solid fa-calendar-plus"></i>
          <p className="stat-num ">
            <span>
              <CountUp start={0} end={startCount ? 28 : 0} duration={5} />
            </span>
            <span className="sign">+</span>
          </p>
          <h5 className="stat-desc">Created jobs</h5>
        </div>
        <div className="box">
          <i class="fa-solid fa-calendar-plus"></i>
          <p className="stat-num ">
            <span>
              <CountUp start={0} end={startCount ? 28 : 0} duration={5} />
            </span>
            <span className="sign">+</span>
          </p>
          <h5 className="stat-desc">Created jobs</h5>
        </div>
        <div className="box">
          <i class="fa-solid fa-calendar-plus"></i>
          <p className="stat-num ">
            <span>
              <CountUp start={0} end={startCount ? 28 : 0} duration={5} />
            </span>
            <span className="sign">+</span>
          </p>
          <h5 className="stat-desc">Created jobs</h5>
        </div>
        <div className="box">
          <i class="fa-solid fa-calendar-plus"></i>
          <p className="stat-num ">
            <span>
              <CountUp start={0} end={startCount ? 28 : 0} duration={5} />
            </span>
            <span className="sign">+</span>
          </p>
          <h5 className="stat-desc">Created jobs</h5>
        </div>
      </div>
    </div>
  );
};

export default Features;
