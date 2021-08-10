import React, { Component } from "react";
import audio1 from "./components/imgs/drumsolo.mp3";

class Voice extends Component {
  render() {
    return (
      <div>
          
        <audio src={audio1}  controls  loop autoplay />
      </div>
    );
  }
}

export default Voice;