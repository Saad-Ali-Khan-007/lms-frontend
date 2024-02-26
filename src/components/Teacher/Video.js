import React from "react";

const Video = ({ chapterList }) => {
  return (
    <video width="320" height="240" controls>
      <source src={chapterList.video.url} type="video/mp4" />
      <source src={chapterList.video.url} type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
