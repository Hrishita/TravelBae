import React from "react";
import { RiFileCopyLine } from "react-icons/ri";

import { AiOutlinePieChart, AiOutlineFlag } from "react-icons/ai";

import { MdOutlineFlight } from "react-icons/md";

import ProfileImage from "./../../assets/profile.jpg";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-container" style={{}}>
      <div className="sidebar-userprofileContainer">
        <img
          className="sidebar-userphoto"
          alt="ProfileImage"
          src={ProfileImage}
        />
        <h1 className="sidebar-username">Jenner Joe</h1>
      </div>
      <div className="sidebar-option-container" style={{}}>
        <u1 className="sidebar-links">
          <li
            className="sidebar-link-to-pages"
            href="/userdashboard"
            style={{}}
          >
            <MdOutlineFlight />
            <h3 style={{ margin: "0", padding: "0" }}>
              <a href="/userdashboard-trips">Trips</a>
            </h3>
          </li>
          <li className="sidebar-link-to-pages" href="/blogs" style={{}}>
            <RiFileCopyLine />
            <h3 style={{ margin: "0", padding: "0" }}>
              <a href="/userdashboard-blogs">Blogs</a>
            </h3>
          </li>
          <li className="sidebar-link-to-pages" href="/flags">
            <AiOutlineFlag />
            <h3 style={{ margin: "0", padding: "0" }}>
              <a href="/userdashboard-flags">Flags</a>
            </h3>
          </li>
          <li className="sidebar-link-to-pages">
            <AiOutlinePieChart />
            <h3 style={{ margin: "0", padding: "0" }}>
              <a href="/userdashboard-plans">Plans</a>
            </h3>
          </li>
        </u1>
        <div className="sidebar-contact-container" style={{}}>
          <span>Reach us at</span>
          <a href="/">help@travelbae.com</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
