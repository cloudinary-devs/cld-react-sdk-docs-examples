
import './App.css';
import React from 'react'
import {AdvancedImage, lazyload, accessibility, responsive, placeholder} from '@cloudinary/react';
import {getQuickstartImage} from './quickstart';
import {getFullExampleImage} from './fullExample';
import {getAssetInstanceImage} from './assetInstance';
import {getTransformationsImage} from './transformations';

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
  
      </header>
    </div>
  );
}

export default App;
