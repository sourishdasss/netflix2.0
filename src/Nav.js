import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
//import { NavigationContainer } from "@react-navigation/native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "./Nav.css";

function Nav() {
//  const histiry = useHistory();
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      {/* "nav nav_black" */}
      {/* `nav ${show && "nav_black"}` */}

      <div className="nav_contents">
        <Link to="/home">
          <img
            onClick={() => Navigate("/homescreen")} // fix this
            className="nav_logo"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflix"
          />
        </Link>

        <Link to="/profile">
          <img
            //onPress={() => navigator.push("homescreen")}
            className="nav_avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
