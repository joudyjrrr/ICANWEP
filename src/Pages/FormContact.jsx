import React from "react";
import img from "../assets/call-center.png";
const FormContact = () => {
  return (
    <div className="formContact">
      <div className="contetn">
        <form>
          <h3>Have Any Questions</h3>
          <div className="input">
            <input type="text" name="name" placeholder="Enter your name" />
          </div>
          <div className="input">
            <input type="text" name="name" placeholder="Enter your name" />
          </div>
          <div className="input">
            <input type="text" name="name" placeholder="Enter your name" />
          </div>
          <div>
            <input type="submit" value={`Submit`} className="submit"/>
          </div>
        </form>

        <div className="img">
          <img src={img} />
        </div>
      </div>
    </div>
  );
};

export default FormContact;
