import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDragon, faBars } from "@fortawesome/free-solid-svg-icons";

import Header from './header'
import './App.scss';

library.add(
    faDragon,
    faBars,
  );

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="body-content">
        <h1>Content!</h1>
        <p>Here be dragons. Fugiat minim sit reprehenderit ea est.</p>
      </div>
    </div>
  );
}

export default App;
