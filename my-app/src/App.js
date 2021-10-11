
import './App.css';
import React from 'react'
import {AdvancedImage, lazyload, accessibility, responsive, placeholder} from '@cloudinary/react';
import {Quickstart} from './quickstart';
import {FullExample} from './fullExample';
import {AssetInstance} from './assetInstance';
import {Transformations} from './transformations';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link" href="https://cloudinary.com/documentation/react2_quick_start#2_add_cloudinary_to_your_code" target="_blank" rel="noopener noreferrer">Quickstart</a>
        <AdvancedImage cldImg={Quickstart()} />

        <a className="App-link" href="https://cloudinary.com/documentation/react2_integration#full_example" target="_blank" rel="noopener noreferrer">Full example</a>
        <AdvancedImage cldImg={FullExample()} />

        <a className="App-link" href="https://cloudinary.com/documentation/react2_integration#asset_instance_configuration" target="_blank" rel="noopener noreferrer">Asset instance</a>
        <AdvancedImage cldImg={AssetInstance()} />    

        <a className="App-link" href="https://cloudinary.com/documentation/react2_integration#transformations" target="_blank" rel="noopener noreferrer">Transformations</a>
        <AdvancedImage cldImg={Transformations()} />  

        <a className="App-link" href="https://cloudinary.com/documentation/react2_integration#plugins" target="_blank" rel="noopener noreferrer">Plugins</a>
        <AdvancedImage cldImg={AssetInstance()} plugins={[lazyload(), responsive(), accessibility(), placeholder()]} />

        <a className="App-link" href="https://cloudinary.com/documentation/react2_integration#lazy_loading" target="_blank" rel="noopener noreferrer">Lazy loading</a>
        <AdvancedImage cldImg={AssetInstance()} plugins={[lazyload('10px 20px 10px 30px', 0.25)]}/>

        <a className="App-link" href="https://cloudinary.com/documentation/react2_integration#responsive_images" target="_blank" rel="noopener noreferrer">Responsive images</a>
        <AdvancedImage cldImg={AssetInstance()} plugins={[responsive([800, 1000, 1400])]} />

        <a className="App-link" href="https://cloudinary.com/documentation/react2_integration#image_accessibility" target="_blank" rel="noopener noreferrer">Image accessibility</a>
       <AdvancedImage cldImg={AssetInstance()} plugins={[accessibility('colorblind')]}/>

       <a className="App-link" href="https://cloudinary.com/documentation/react2_integration#image_placeholders" target="_blank" rel="noopener noreferrer">Image placeholders</a>
       <AdvancedImage cldImg={AssetInstance()} plugins={[placeholder('blur')]}/>

       <a className="App-link" href="https://cloudinary.com/documentation/react2_integration#example_2_combine_lazy_loading_with_a_placeholder" target="_blank" rel="noopener noreferrer">Lazy load and placeholder</a>
       <AdvancedImage cldImg={AssetInstance()} plugins={[lazyload(), placeholder('predominant-color')]}/>
  
      </header>
    </div>
  );
}

export default App;
