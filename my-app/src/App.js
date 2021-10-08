
import './App.css';
import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Quickstart} from './quickstart';
import {FullExample} from './fullExample';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link" href="https://cloudinary.com/documentation/react2_quick_start#3_see_the_result" target="_blank" rel="noopener noreferrer">Quickstart</a>
        <AdvancedImage cldImg={Quickstart()} />

        <a className="App-link" href="https://cloudinary.com/documentation/react2_integration#full_example" target="_blank" rel="noopener noreferrer">Full example</a>
        <AdvancedImage cldImg={FullExample()} />
      </header>
    </div>
  );
}

export default App;
