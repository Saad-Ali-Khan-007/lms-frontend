import React from "react";
import ReactPlayer from "react-player";

import "./style.scss";

const VideoPopup = ({ show, setShow, videoLink, setVideoLink }) => {
  const hidePopup = () => {
    setShow(false);
    setVideoLink(null);
  };

  return (
    <div className={`videoPopup ${show ? "visible" : ""}`}>
      <div className="opacityLayer" onClick={hidePopup}></div>
      <div className="videoPlayer">
        <span className="closeBtn" onClick={hidePopup}>
          Close
        </span>
        <ReactPlayer
          url={videoLink ?? ""}
          controls={true}
          width="100%"
          height="100%"
          playing={true}
        />
      </div>
    </div>
  );
};

export default VideoPopup;
