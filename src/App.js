import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDragon, faBars, faSearch, faHouseDamage, faDungeon, faHome, faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faLinkedin, faTwitterSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import Header from './Header'
import Hero from './Hero'
import './App.scss';
import ServiceCardList from './ServiceCardList';
import { Footer } from './Footer';

// Font Awesome Icons
library.add(
  faDragon,
  faBars,
  faSearch,
  faHouseDamage,
  faDungeon,
  faHome,
  faSnowflake,
);
// Font Awesome Brands
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
        <Header />
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
