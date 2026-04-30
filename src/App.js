import React from 'react';

import { AboutUs, Baker, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header /> {/*#home*/}
    <AboutUs /> {/*#about*/}
    <SpecialMenu />{/*#menu*/}
    <Baker /> {/*#baker*/}
    <Intro /> {/*#intro*/}
    {<FindUs />}
    {/* <Laurels />*/} 
    <Gallery /> {/*#gallery*/}
    <Footer /> 
  </div>
);

export default App;
