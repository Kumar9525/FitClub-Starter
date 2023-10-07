import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from 'number-counter';

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile? "178px": '238px' }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>

          <div>
            <span>
              here we will help you to shape and build your ideal body and live
              up your life to fullest
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={160} start={100} delay='5' preFix='+'/>
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span><NumberCounter end={1200} start={1000} delay='5' preFix='+'/></span>
            <span>members joined</span>
          </div>
          <div>
            <span><NumberCounter end={90} start={50} delay='5' preFix='+'/></span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "1rem" }}
          whileInView={{ right: "10rem" }}
          transition={transition}
          className="heart-rate">
          <img src={Heart} alt="Heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        <img src={hero_image} alt="heroImage" className="hero-image" />
        <motion.img
        initial={{ right: "12rem" }}
        whileInView={{ right: "20rem" }}
        transition={transition}
          src={hero_image_back}
          alt="hero_back"
          className="hero-image-back"
        />

        <motion.div 
        initial={{ right: "47rem" }}
        whileInView={{ right: "35rem" }}
        transition={transition}
        className="calories">
          <img src={Calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <span>240 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
