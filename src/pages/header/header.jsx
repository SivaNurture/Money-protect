import "./header.css";
import logo from "../../assets/images/header-logo.png";
import { Button } from "@mui/material";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GridBoxIcon, PlusBoxIcon, PagesIcon } from "../../assets/SVG";

export default function () {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div id="Header">
      <div className="Header">
        <div className="header_logo">
          <img src={logo} alt="" />
        </div>
        <nav className={`header_menu ${isToggled ? "active" : ""}`}>
          <ul>
            <li>
              <NavLink to={"/dashboard"}>
                <GridBoxIcon /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to={"/loan-details"}>
                <PlusBoxIcon /> Loan Details
              </NavLink>
            </li>
            <li>
              <NavLink to={"/my-applications"}>
                <PagesIcon /> My Applications
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header_btn">
          <div className="icon-btn">
            <Link>
              <svg
                width="56"
                height="40"
                viewBox="0 0 56 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 20.3594C26.1406 20.3594 24.625 18.7188 24.625 16.7109C24.625 14.7266 26.1484 13.125 28 13.125C29.8672 13.125 31.375 14.6953 31.375 16.6953C31.375 18.7109 29.8594 20.3594 28 20.3594ZM28 19.1797C29.1484 19.1797 30.1172 18.0781 30.1172 16.6953C30.1172 15.3281 29.1641 14.3047 28 14.3047C26.8438 14.3047 25.8828 15.3516 25.8828 16.7109C25.8828 18.0938 26.8594 19.1797 28 19.1797ZM23.0859 27.5938C21.7891 27.5938 21.1719 27.2031 21.1719 26.3438C21.1719 24.2969 23.7578 21.3359 28 21.3359C32.2344 21.3359 34.8203 24.2969 34.8203 26.3438C34.8203 27.2031 34.2031 27.5938 32.9062 27.5938H23.0859ZM22.7188 26.4141H33.2812C33.4844 26.4141 33.5625 26.3594 33.5625 26.1953C33.5625 24.9062 31.5781 22.5156 28 22.5156C24.4141 22.5156 22.4297 24.9062 22.4297 26.1953C22.4297 26.3594 22.5156 26.4141 22.7188 26.4141Z"
                  fill="white"
                />
              </svg>
            </Link>
            <Link>
              <svg
                width="56"
                height="40"
                viewBox="0 0 56 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8281 27.1016C20.1953 27.1016 19.375 26.2969 19.375 24.6797V16.0547C19.375 14.4453 20.1875 13.6406 21.5938 13.6406H34.1719C35.8047 13.6406 36.625 14.4531 36.625 16.0547V24.6797C36.625 26.2891 35.8125 27.1016 34.4062 27.1016H21.8281ZM27.0703 20.7656C27.3984 21.0938 27.7031 21.25 28.0156 21.25C28.3203 21.25 28.625 21.1016 28.9609 20.7656L34.8438 14.9531C34.6719 14.875 34.4609 14.8359 34.2188 14.8359H21.7812C21.5469 14.8359 21.3438 14.875 21.1719 14.9453L27.0703 20.7656ZM20.5703 24.6797C20.5703 24.7266 20.5703 24.7734 20.5781 24.8125L25.0625 20.3828L20.5703 15.9688C20.5703 16.0234 20.5703 15.9922 20.5703 16.0547V24.6797ZM35.4297 16.0625C35.4297 16.0625 35.4297 16.0625 35.4297 15.9922L30.9688 20.3828L35.4297 24.7891C35.4297 24.7578 35.4297 24.7188 35.4297 24.6875V16.0625ZM21.7812 25.9062H34.2188C34.4453 25.9062 34.6406 25.875 34.8125 25.7969L30.1484 21.1875L29.6406 21.6875C29.0938 22.2266 28.5625 22.4531 28.0156 22.4531C27.4609 22.4531 26.9375 22.2266 26.3906 21.6875L25.8828 21.1875L21.2109 25.8047C21.375 25.875 21.5625 25.9062 21.7812 25.9062Z"
                  fill="white"
                />
              </svg>
            </Link>
            <Link>
              <svg
                width="56"
                height="40"
                viewBox="0 0 56 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.2109 28.7109C26.6094 28.7109 26.1484 28.3438 26.0078 27.7656L25.6641 26.3047L25.4141 26.2188L24.1484 27C23.6406 27.3203 23.0469 27.2422 22.6172 26.8125L21.5312 25.7266C21.1016 25.2969 21.0156 24.7031 21.3438 24.2031L22.1328 22.9375L22.0469 22.7031L20.5859 22.3594C20.0156 22.2188 19.6406 21.75 19.6406 21.1562V19.6094C19.6406 19.0156 20.0078 18.5469 20.5859 18.4062L22.0312 18.0547L22.125 17.8047L21.3359 16.5391C21.0078 16.0391 21.0938 15.4531 21.5234 15.0156L22.6094 13.9219C23.0312 13.5 23.625 13.4219 24.1328 13.7344L25.3984 14.5156L25.6641 14.4141L26.0078 12.9531C26.1484 12.375 26.6094 12.0078 27.2109 12.0078H28.7891C29.3906 12.0078 29.8516 12.375 29.9922 12.9531L30.3281 14.4141L30.5938 14.5156L31.8672 13.7344C32.375 13.4219 32.9609 13.5 33.3828 13.9219L34.4766 15.0156C34.9062 15.4531 34.9844 16.0391 34.6641 16.5391L33.8672 17.8047L33.9688 18.0547L35.4141 18.4062C35.9922 18.5469 36.3594 19.0156 36.3594 19.6094V21.1562C36.3594 21.75 35.9844 22.2188 35.4141 22.3594L33.9531 22.7031L33.8594 22.9375L34.6562 24.2031C34.9766 24.7031 34.8984 25.2969 34.4688 25.7266L33.375 26.8125C32.9453 27.2422 32.3594 27.3203 31.8516 27L30.5781 26.2188L30.3281 26.3047L29.9922 27.7656C29.8516 28.3438 29.3906 28.7109 28.7891 28.7109H27.2109ZM27.3359 27.4922H28.6641C28.7969 27.4922 28.8672 27.4375 28.8828 27.3125L29.3594 25.375C29.8359 25.2578 30.2734 25.0703 30.6094 24.8594L32.3125 25.9062C32.4141 25.9766 32.5078 25.9609 32.6094 25.8672L33.5234 24.9453C33.6172 24.8594 33.6172 24.7656 33.5547 24.6562L32.5078 22.9688C32.6953 22.6406 32.8906 22.1953 33.0156 21.7188L34.9609 21.2578C35.0781 21.2344 35.1406 21.1641 35.1406 21.0312V19.7266C35.1406 19.5859 35.0859 19.5234 34.9609 19.5L33.0234 19.0312C32.8984 18.5234 32.6719 18.0625 32.5234 17.7734L33.5625 16.0859C33.6328 15.9688 33.6328 15.875 33.5391 15.7812L32.6172 14.875C32.5156 14.7812 32.4375 14.7656 32.3125 14.8359L30.6172 15.8672C30.2656 15.6797 29.8438 15.4844 29.3594 15.3594L28.8828 13.4062C28.8672 13.2812 28.7969 13.2266 28.6641 13.2266H27.3359C27.2031 13.2266 27.1328 13.2812 27.1094 13.4062L26.6484 15.3438C26.1797 15.4766 25.7031 15.6719 25.3672 15.8594L23.6797 14.8359C23.5625 14.7656 23.4766 14.7812 23.3828 14.875L22.4531 15.7812C22.3672 15.875 22.3594 15.9688 22.4297 16.0859L23.4688 17.7734C23.3281 18.0625 23.0938 18.5234 22.9688 19.0312L21.0391 19.5C20.9062 19.5234 20.8594 19.5859 20.8594 19.7266V21.0312C20.8594 21.1641 20.9141 21.2344 21.0391 21.2578L22.9766 21.7188C23.1016 22.1953 23.3047 22.6406 23.4844 22.9688L22.4375 24.6562C22.375 24.7656 22.3828 24.8594 22.4688 24.9453L23.3906 25.8672C23.4844 25.9609 23.5859 25.9766 23.6797 25.9062L25.3828 24.8594C25.7188 25.0703 26.1641 25.2578 26.6406 25.375L27.1094 27.3125C27.1328 27.4375 27.2031 27.4922 27.3359 27.4922ZM28 23.3438C26.3594 23.3438 25.0156 21.9922 25.0156 20.3594C25.0156 18.7344 26.3672 17.3906 28 17.3906C29.6328 17.3906 30.9766 18.7344 30.9766 20.3594C30.9766 22 29.6328 23.3438 28 23.3438ZM28 22.1328C28.9531 22.1328 29.75 21.3281 29.75 20.3594C29.75 19.3984 28.9531 18.6016 28 18.6016C27.0312 18.6016 26.2344 19.3984 26.2344 20.3594C26.2344 21.3359 27.0312 22.1328 28 22.1328Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
