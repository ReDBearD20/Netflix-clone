import React, { useEffect, useState } from "react";
import "./Nav.css";
import netflixlogo from "../images/netflixlogo.png";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const transitionNavBar = () => {
    if (window.scrollY > 100) setShow(true);
    else setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => {
            navigate("/");
          }}
          className="nav__logo"
          src={netflixlogo}
          alt="baka"
        />
        <img
          onClick={() => {
            navigate("/profile");
          }}
          className="nav__avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
          alt=" "
        />
      </div>
    </div>
  );
}

export default Nav;
