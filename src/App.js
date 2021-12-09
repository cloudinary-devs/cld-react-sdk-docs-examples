
import './App.css';
import React from 'react'
import {AdvancedImage, lazyload, accessibility, responsive, placeholder, AdvancedVideo} from '@cloudinary/react';
import {getQuickstartImage} from './quickstart';
import {getFullExampleImage} from './fullExample';
import {getAssetInstanceImage} from './assetInstance';
import {getTransformationsImage} from './transformations';
import {getSyntaxOverviewImage} from './syntaxOverview';
import {getFetchImage} from './deliveryType';
import {getTransformingYourImageImage} from './transformingYourImage';
import {getChainingTransformationsImage} from './chainingTransformations';
import {getResizingAndCroppingImage} from './resizingAndCropping';
import {getConvertingFormatExtensionImage} from './convertingFormatExtension';
import {getConvertingFormatDeliveryImage} from './convertingFormatDelivery';
import {getAutoFormatImage} from './autoFormat';
import {getEffectsImage} from './effects';
import {getOverlaysImage} from './overlays';
import {getOptimizationsImage} from './imageOptimizations';
import {getPluginsImage} from './plugins';
import {getLazyloadImage} from './lazyload';
import {getResponsiveImage} from './responsive';
import {getAccessibilityImage} from './accessibility';
import {getPlaceholderImage} from './placeholder';
import {getLazyloadPlaceholderImage} from './lazyloadPlaceholder';
import {getTransformingYourVideoVideo} from './transformingYourVideo';
import {getExample1Video} from './videoExample1';
import {getExample2Video} from './videoExample2';
import {getVideoTransformationsWithReactVideo} from './videoTransformationsWithReact';
import {getAdvancedVideoPropertiesVideo} from './advancedVideoProperties';

import { videoCodec } from "@cloudinary/url-gen/actions/transcode";
import { auto, vp9 } from '@cloudinary/url-gen/qualifiers/videoCodec';

function playFunction() {
  // Dummy function
}

function App() {

  // This app has been structured to ensure that each example is self-contained, to show exactly what needs to be imported in each case. 
  
  // Therefore, whereas the docs may show the JavaScript in this location, and the AdvancedImage component directly referencing the image, for example:

  // <AdvancedImage cldImg={myImage} />

  // in this app we call a function to return myImage, for example:

  // <AdvancedImage cldImg={getQuickstartImage()} />

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
    <div className="App">
      <header className="App-header"> 
        Crop an image to a square, as shown in the <a className="App-link" href="https://cloudinary.com/documentation/react2_quick_start#2_add_cloudinary_to_your_code" target="_blank" rel="noopener noreferrer">Quickstart guide</a>
        <div className="space"></div>
        <AdvancedImage cldImg={getQuickstartImage()} />

        <br/>

        Apply a range of transformations, as shown in the <a className="App-link" href="https://cloudinary.com/documentation/react2_integration#full_example" target="_blank" rel="noopener noreferrer">Full example</a>
        <div className="space"></div>
        <AdvancedImage cldImg={getFullExampleImage()} />

        <br/>

        Apply a thumbnail crop with rounded corners, as shown in <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#image_transformations_with_react" target="_blank" rel="noopener noreferrer">Image transformations with React</a>
        <div className="space"></div>
        <AdvancedImage cldImg={getTransformationsImage()} />  

        <br/>

        Specify the Cloudinary configuration when instantiating an asset, as shown in <a className="App-link" href="https://cloudinary.com/documentation/react2_integration#asset_instance_configuration" target="_blank" rel="noopener noreferrer">Asset instance configuration</a>
        <div className="space"></div>
        <AdvancedImage cldImg={getAssetInstanceImage()} />    

        <br/>

        Use all the plugins (lazyload, responsive, accessibility, placeholder), as shown in 
        <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#plugins" target="_blank" rel="noopener noreferrer">Plugins</a>
        <div className="space"></div>
        <AdvancedImage cldImg={getPluginsImage()} plugins={[lazyload(), responsive(), accessibility(), placeholder()]} />

        <br/>

        Use the lazyload plugin to delay loading the image until it reaches the viewport, as shown in
        <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#lazy_loading" target="_blank" rel="noopener noreferrer">Lazy loading</a>
        <div className="space"></div>
        <AdvancedImage cldImg={getLazyloadImage()} plugins={[lazyload('10px 20px 10px 30px', 0.25)]}/>

        <br/>

        Use the responsive plugin to request the best size of image for the viewport, as shown in 
        <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#responsive_images" target="_blank" rel="noopener noreferrer">Responsive images</a>
        <div className="space"></div>
        <AdvancedImage cldImg={getResponsiveImage()} plugins={[responsive([800, 1000, 1400])]} />

        <br/>

        Use the accessibility plugin to help color blind viewers, as shown in 
        <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#image_accessibility" target="_blank" rel="noopener noreferrer">Image accessibility</a>
        <div className="space"></div>
        <AdvancedImage cldImg={getAccessibilityImage()} plugins={[accessibility('colorblind')]}/>

        <br/>

        Use the placeholder plugin to show a blurred image while the image loads, as shown in 
        <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#image_placeholders" target="_blank" rel="noopener noreferrer">Image placeholders</a>
        <div className="space"></div>
        <AdvancedImage cldImg={getPlaceholderImage()} plugins={[placeholder('blur')]}/>

        <br/>

        Combine the lazyload and placeholder plugins, as shown in 
        <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#example_2_combine_lazy_loading_with_a_placeholder" target="_blank" rel="noopener noreferrer">Lazy load and placeholder</a>
        <div className="space"></div>
        <AdvancedImage cldImg={getLazyloadPlaceholderImage()} plugins={[lazyload(), placeholder('predominant-color')]}/>

        <br/>

        Replace the most prominent color with light blue, as shown in 
        <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#syntax_overview" target="_blank" rel="noopener noreferrer">Syntax overview</a>
        <div className="space"></div>
        <AdvancedImage cldImg={getSyntaxOverviewImage()} />  

        <br/>

        Use the fetch delivery type to deliver an image, as shown in 
        <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#specifying_the_delivery_type" target="_blank" rel="noopener noreferrer">Specifying the delivery type</a>
        <div className="space"></div>
        <AdvancedImage cldImg={getFetchImage()} />  

        <br/>

        Scale an image to a width of 400 pixels, as shown in 
        <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#transforming_your_image" target="_blank" rel="noopener noreferrer">Transforming your image</a>
        <div className="space"></div>
        <AdvancedImage cldImg={getTransformingYourImageImage()} />  

        <br/>

        Chain several transformations together, as shown in 
        <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#chaining_transformations" target="_blank" rel="noopener noreferrer">Chaining transformations</a>
        <div className="space"></div>
        <AdvancedImage cldImg={getChainingTransformationsImage()} />  

        <br/>

        Crop an image to keep the faces, as shown in 
        <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#resizing_and_cropping" target="_blank" rel="noopener noreferrer">Resizing and cropping</a>
        <div className="space"></div>
        <AdvancedImage cldImg={getResizingAndCroppingImage()} />  

        <br/>

        Deliver a .jpg file in .gif format by changing the extension, as shown in 
        <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#converting_format_example1a" target="_blank" rel="noopener noreferrer">Converting to another image format</a>
        <div className="space"></div>
        <AdvancedImage cldImg={getConvertingFormatExtensionImage()} />  

        <br/>

        Deliver a .jpg file in .gif format by setting the delivery format, as shown in 
        <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#converting_format_example1b" target="_blank" rel="noopener noreferrer">Converting to another image format</a>
        <div className="space"></div>
        <AdvancedImage cldImg={getConvertingFormatDeliveryImage()} />  

        <br/>

        Use auto format to deliver a file in the best format for the end device, as shown in 
        <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#converting_format_example2" target="_blank" rel="noopener noreferrer">Converting to another image format</a>
        <div className="space"></div>
        <AdvancedImage cldImg={getAutoFormatImage()} />  

        <br/>

        Apply various transformations, as shown in 
        <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#applying_image_effects_and_filters" target="_blank" rel="noopener noreferrer">Applying image effects and filters</a>
        <div className="space"></div>
        <AdvancedImage cldImg={getEffectsImage()} /> 

        <br/>

        Add text and image overlays to an image, as shown in 
        <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#adding_text_and_image_overlays" target="_blank" rel="noopener noreferrer">Adding text and image overlays</a>
        <div className="space"></div>
        <AdvancedImage cldImg={getOverlaysImage()} /> 

        <br/>

        Apply automatic format and quality, as shown in 
        <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#image_optimizations" target="_blank" rel="noopener noreferrer">Image optimizations</a>
        <div className="space"></div>
        <AdvancedImage cldImg={getOptimizationsImage()} /> 

        <br/>

        Focus on faces in a video, as shown in 
        <a className="App-link" href="https://cloudinary.com/documentation/react2_video_transformations#video_transformations_with_react" target="_blank" rel="noopener noreferrer">Video transformations with React</a>
        <div className="space"></div>
        <AdvancedVideo cldVid={getVideoTransformationsWithReactVideo()} id="zero" controls autoPlay loop/> 

        <br/>

        Use various properties, as shown in 
        <a className="App-link" href="https://cloudinary.com/documentation/react2_video_transformations#advancedvideo_properties" target="_blank" rel="noopener noreferrer">AdvancedVideo properties</a>
        <div className="space"></div>
        <AdvancedVideo cldVid={getAdvancedVideoPropertiesVideo()} id="one" controls sources={sources} playsInline muted onPlay={playFunction()} plugins={[lazyload()]}/> 

        <br/>

        Resize a video to a width of 400 pixels, as shown in 
        <a className="App-link" href="https://cloudinary.com/documentation/react2_video_transformations#transforming_your_video" target="_blank" rel="noopener noreferrer">Transforming your video</a>
        <div className="space"></div>
        <AdvancedVideo cldVid={getTransformingYourVideoVideo()} id="two" controls autoPlay loop /> 

        <br/>

        Apply several transformations to the elephant video, as shown in 

        <a className="App-link" href="https://cloudinary.com/documentation/react2_video_transformations#example_1" target="_blank" rel="noopener noreferrer">Example 1</a>
        <div className="space"></div>
        <AdvancedVideo cldVid={getExample1Video()} id="three" controls autoPlay loop />    


        <br/>

        Apply several transformations to the skiing video, as shown in 

        <a className="App-link" href="https://cloudinary.com/documentation/react2_video_transformations#example_2" target="_blank" rel="noopener noreferrer">Example 2</a>
        <div className="space"></div>
        <AdvancedVideo cldVid={getExample2Video()} id="four" controls autoPlay loop muted/>  

      </header>
    </div>
  );
}

export default App;
