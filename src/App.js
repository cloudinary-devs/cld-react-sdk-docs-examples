
import './App.css';
import React from 'react'
import {AdvancedImage, lazyload, accessibility, responsive, placeholder} from '@cloudinary/react';
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

function App() {

  return (
    <div className="App">
      <header className="App-header">
 
        <a className="App-link" href="https://cloudinary.com/documentation/react2_quick_start#2_add_cloudinary_to_your_code" target="_blank" rel="noopener noreferrer">Quickstart</a>
        <AdvancedImage cldImg={getQuickstartImage()} />

        <a className="App-link" href="https://cloudinary.com/documentation/react2_integration#full_example" target="_blank" rel="noopener noreferrer">Full example</a>
        <AdvancedImage cldImg={getFullExampleImage()} />

        <a className="App-link" href="https://cloudinary.com/documentation/react2_integration#asset_instance_configuration" target="_blank" rel="noopener noreferrer">Asset instance</a>
        <AdvancedImage cldImg={getAssetInstanceImage()} />    

        <a className="App-link" href="https://cloudinary.com/documentation/react2_integration#transformations" target="_blank" rel="noopener noreferrer">Transformations</a>
        <AdvancedImage cldImg={getTransformationsImage()} />  

        <a className="App-link" href="https://cloudinary.com/documentation/react2_integration#plugins" target="_blank" rel="noopener noreferrer">Plugins</a>
        <AdvancedImage cldImg={getAssetInstanceImage()} plugins={[lazyload(), responsive(), accessibility(), placeholder()]} />

        <a className="App-link" href="https://cloudinary.com/documentation/react2_integration#lazy_loading" target="_blank" rel="noopener noreferrer">Lazy loading</a>
        <AdvancedImage cldImg={getAssetInstanceImage()} plugins={[lazyload('10px 20px 10px 30px', 0.25)]}/>

        <a className="App-link" href="https://cloudinary.com/documentation/react2_integration#responsive_images" target="_blank" rel="noopener noreferrer">Responsive images</a>
        <AdvancedImage cldImg={getAssetInstanceImage()} plugins={[responsive([800, 1000, 1400])]} />

        <a className="App-link" href="https://cloudinary.com/documentation/react2_integration#image_accessibility" target="_blank" rel="noopener noreferrer">Image accessibility</a>
       <AdvancedImage cldImg={getAssetInstanceImage()} plugins={[accessibility('colorblind')]}/>

       <a className="App-link" href="https://cloudinary.com/documentation/react2_integration#image_placeholders" target="_blank" rel="noopener noreferrer">Image placeholders</a>
       <AdvancedImage cldImg={getAssetInstanceImage()} plugins={[placeholder('blur')]}/>

       <a className="App-link" href="https://cloudinary.com/documentation/react2_integration#example_2_combine_lazy_loading_with_a_placeholder" target="_blank" rel="noopener noreferrer">Lazy load and placeholder</a>
       <AdvancedImage cldImg={getAssetInstanceImage()} plugins={[lazyload(), placeholder('predominant-color')]}/>

       <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#syntax_overview" target="_blank" rel="noopener noreferrer">Syntax overview</a>
       <AdvancedImage cldImg={getSyntaxOverviewImage()} />  

       <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#specifying_the_delivery_type" target="_blank" rel="noopener noreferrer">Specifying the delivery type</a>
       <AdvancedImage cldImg={getFetchImage()} />  

       <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#transforming_your_image" target="_blank" rel="noopener noreferrer">Transforming your image</a>
       <AdvancedImage cldImg={getTransformingYourImageImage()} />  

       <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#chaining_transformations" target="_blank" rel="noopener noreferrer">Chaining transformations</a>
       <AdvancedImage cldImg={getChainingTransformationsImage()} />  

       <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#resizing_and_cropping" target="_blank" rel="noopener noreferrer">Resizing and cropping</a>
       <AdvancedImage cldImg={getResizingAndCroppingImage()} />  

       <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#converting_to_another_image_format" target="_blank" rel="noopener noreferrer">Deliver a .jpg file in .gif format by changing the extension</a>
       <AdvancedImage cldImg={getConvertingFormatExtensionImage()} />  

       <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#converting_to_another_image_format" target="_blank" rel="noopener noreferrer">Deliver a .jpg file in .gif format by setting the delivery format</a>
       <AdvancedImage cldImg={getConvertingFormatDeliveryImage()} />  

       <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#converting_to_another_image_format" target="_blank" rel="noopener noreferrer">Using auto format</a>
       <AdvancedImage cldImg={getAutoFormatImage()} />  

       <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#applying_image_effects_and_filters" target="_blank" rel="noopener noreferrer">Applying image effects and filters</a>
       <AdvancedImage cldImg={getEffectsImage()} /> 

       <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#adding_text_and_image_overlays" target="_blank" rel="noopener noreferrer">Adding text and image overlays</a>
       <AdvancedImage cldImg={getOverlaysImage()} /> 

       <a className="App-link" href="https://cloudinary.com/documentation/react2_image_transformations#image_optimizations" target="_blank" rel="noopener noreferrer">Image optimizations</a>
       <AdvancedImage cldImg={getOptimizationsImage()} /> 
  
      </header>
    </div>
  );
}

export default App;
