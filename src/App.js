import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDragon, faBars, faSearch, faHouseDamage, faDungeon, faHome, faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faLinkedin, faTwitterSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import Nav from './Nav'
import Hero from './Hero'
import './App.scss';
import ServiceCardList from './ServiceCardList';
import { Footer } from './Footer';

library.add(
  faDragon,
  faBars,
  faSearch,
  faHouseDamage,
  faDungeon,
  faHome,
  faSnowflake,
);
library.add(
  faFacebookSquare,
  faLinkedin,
  faTwitterSquare,
  faYoutubeSquare,
);

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main className="body">
        <Hero />
        <ServiceCardList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
