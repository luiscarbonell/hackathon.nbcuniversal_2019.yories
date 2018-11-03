/**
* For displaying videos from Cloudinary see the following.
*
* CHECK: https://cloudinary.com/documentation/video_manipulation_and_delivery#generating_video_thumbnails
*/

/**
* For uploading videos to cloudinary, see the following.
*
* CHECK: https://codepen.io/luis-carbonell/pen/oQNjBR
*/

/**
* For recording videos, see the following.
*
* CHECK: https://mozdevs.github.io/MediaRecorder-examples/index.html
* CHECK: https://codepen.io/luis-carbonell/pen/bQGEwM
* CHECK: https://www.npmjs.com/package/react-multimedia-capture
* CHECK: https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder
*/

import React from "react";
import { Image, Video, Transformation, CloudinaryContext } from "cloudinary-react";


class VideoPlayer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      recording: false,
      recorder: undefined,
      liveStream: undefined
    }
    
    this.startRecording = this.startRecording.bind(this);
  }
  
  startRecording() {
    this.state.recorder = new MediaRecorder(liveStream);
    
    
  }
  
  render() {
    return (
      <div>
        <button id="record" className="btn btn-primary">Record</button>
        <button id="stop" className="btn">Stop</button>
        
        <div className="container">
          <p>Live Preview</p>
          <figure>
            <video id="live" width="320"></video>
          </figure>
          <p>Recorded Clip</p>
          <figure>
            <video id="recording" width="320" controls></video>
          </figure>
        </div>
        
        <Image cloudName="dcs3c9dvw" publicId="samples/bike.jpg" width="500">
        </Image>
        <Video cloudName="dcs3c9dvw" publicId="samples/sea-turtle" format="mp4" width="500" controls>
          <Transformation width="500" height="300" />
        </Video>
      </div>
    );
  }
}

export default VideoPlayer;