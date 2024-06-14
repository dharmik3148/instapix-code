import React from "react";
import { NavLink } from "react-router-dom";

const Content = () => {
  return (
    <>
      <div className="cat">
        <li>
          <i className="bi bi-camera-reels-fill"></i>
          <label>Video</label>
        </li>
        <li>
          <i className="bi bi-image"></i>
          <label>Photo</label>
        </li>
        <li>
          <i className="bi bi-person-circle"></i>
          <label>Dp</label>
        </li>
        <li>
          <i className="bi bi-film"></i>
          <label>Reel</label>
        </li>
        <li>
          <i className="bi bi-tv"></i>
          <label>IGTV</label>
        </li>
      </div>
      <h1 className="sec-txt-1">
        <NavLink to={`/`}>Instagram Downloader</NavLink>
      </h1>
      <span className="sec-txt-2">
        Download Instagram Photo, Reels, Profile-Pic, IGTV online
      </span>
    </>
  );
};

export default Content;
