import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/footer';
import Hero from '../components/hero/hero';
import ScrollToTop from '../components/ScrollToTop';
import About from '../components/about/about';
import { ObjFour} from "../components/about/data";
import Card from '../CardData';
import './home.css';

function Community() {
  return (
    <div>
      <ScrollToTop/>
      <Navbar/>
      <div className="App">
      <About {...ObjFour} />
      <Card/>
      <Footer/>
      </div>
    </div>
  );
}

export default Community;
