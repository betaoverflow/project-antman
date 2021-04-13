import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import { ObjOne, ObjTwo,ObjThree} from "../components/about/data";
import Footer from "../components/Footer/footer";
import ScrollToTop from '../components/ScrollToTop';
import "./home.css";
function Home() {
  return (
    <div>
      <ScrollToTop/>
      <Navbar/>
      <div className="App">
      <About {...ObjOne} />
      <About {...ObjTwo} />
      <About {...ObjThree} />
      <Footer />
      </div>
    </div>
  );
}

export default Home;
