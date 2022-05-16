import React from "react";
import '../App.css';
import {AdvancedVideo, lazyload} from '@cloudinary/react';

import {getTransformingYourVideoVideo} from '../transformingYourVideo';
import {getExample1Video} from '../videoExample1';
import {getExample2Video} from '../videoExample2';
import {getVideoTransformationsWithReactVideo} from '../videoTransformationsWithReact';
import {getAdvancedVideoPropertiesVideo} from '../advancedVideoProperties';

import { videoCodec } from "@cloudinary/url-gen/actions/transcode";
import { auto, vp9 } from '@cloudinary/url-gen/qualifiers/videoCodec';

function playFunction() {
  // Dummy function
}

function Videos() {

  // This app has been structured to ensure that each example is self-contained, to show exactly what needs to be imported in each case. 
  
  // Therefore, whereas the docs may show the JavaScript in this location, and the AdvancedVideo component directly referencing the video, for example:

  // <AdvancedVideo cldVid={myVideo} />

  // in this app we call a function to return myVideo, for example:

  // <AdvancedVideo cldVid={getAdvancedVideoPropertiesVideo()} />

  const sources = [
    {
      type: 'mp4',
      codecs: ['avc1.4d002a'],
      transcode: videoCodec(auto())
    },
    {
      type: 'webm',
      codecs: ['vp8', 'vorbis'],
      transcode: videoCodec(vp9())
    }];

  return (
    <div className="App-body">
      <h1 className="font-weight-light">Video Transformations</h1>

      Focus on faces in a video, as shown in 
        <br/><a className="App-link" href="https://cloudinary.com/documentation/react_video_transformations#video_transformations_with_react" target="_blank" rel="noopener noreferrer">Video transformations with React</a>
        <div className="space"></div>
        <AdvancedVideo cldVid={getVideoTransformationsWithReactVideo()} id="zero" controls autoPlay loop muted/> 

        <br/>

        Use various properties, as shown in 
        <br/><a className="App-link" href="https://cloudinary.com/documentation/react_video_transformations#advancedvideo_properties" target="_blank" rel="noopener noreferrer">AdvancedVideo properties</a>
        <div className="space"></div>
        <AdvancedVideo cldVid={getAdvancedVideoPropertiesVideo()} id="one" controls sources={sources} playsInline muted onPlay={playFunction()} plugins={[lazyload()]}/> 

        <br/>

        Resize a video to a width of 400 pixels, as shown in 
        <br/><a className="App-link" href="https://cloudinary.com/documentation/react_video_transformations#transforming_your_video" target="_blank" rel="noopener noreferrer">Transforming your video</a>
        <div className="space"></div>
        <AdvancedVideo cldVid={getTransformingYourVideoVideo()} id="two" controls autoPlay loop muted/> 

        <br/>

        Apply several transformations to the elephant video, as shown in 

        <br/><a className="App-link" href="https://cloudinary.com/documentation/react_video_transformations#example_1" target="_blank" rel="noopener noreferrer">Example 1</a>
        <div className="space"></div>
        <AdvancedVideo cldVid={getExample1Video()} id="three" controls autoPlay loop muted/>    


        <br/>

        Apply several transformations to the snowboarding video, as shown in 

        <br/><a className="App-link" href="https://cloudinary.com/documentation/react_video_transformations#example_2" target="_blank" rel="noopener noreferrer">Example 2</a>
        <div className="space"></div>
        <AdvancedVideo cldVid={getExample2Video()} id="four" controls autoPlay loop muted/> 

        <br/>

    </div>
  );
}

export default Videos;