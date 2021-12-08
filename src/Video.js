import React, { Component } from "react";
import video1 from "./components/imgs/videoplayback.mp4";

class Video extends Component {
  render() {
    return (
      <div>
          
        <video src={video1}  controls="controls" />
      </div>
    );
  }
}

export default Video;