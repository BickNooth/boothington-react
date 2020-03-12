import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDragon, faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

import Nav from './Nav'
import Hero from './Hero'
import './App.scss';

library.add(
    faDragon,
    faBars,
    faSearch,
  );

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <div className="body-content">
        <Hero />
      </div>
    </div>
  );
}

export default App;
