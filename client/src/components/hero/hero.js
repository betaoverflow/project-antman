import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import {
  Hero,
  HeroContainer,
  Video,
  HeroText,
  HeroH1,
  HeroP,
  HeroButton,
  ArrowForward,
  ArrowRight,
} from "./heroElements.js";
import "./hero.css";
import Video1 from "../../assets/video.mp4";
import { Link } from "react-scroll";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <Hero>
      <HeroContainer>
        <Video autoPlay loop muted src={Video1} type="video/mp4" />
      </HeroContainer>
      <HeroText>
        <HeroH1>Our community</HeroH1>
        <HeroP>East or west, Aniket is the best</HeroP>
        <HeroButton>
          <Link to='about'>
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            className="heroButton"
          >
            Get to know us {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
          </Link>
        </HeroButton>
      </HeroText>
    </Hero>
  );
};

export default HeroSection;
