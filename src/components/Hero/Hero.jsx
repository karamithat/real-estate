import React from 'react'
import './Hero.css'
import heroImage from "/hero-image.png"
import { HiLocationMarker } from "react-icons/hi"
const Hero = () => {
  return (
    <section className='hero-wrapper'>
      <div className="paddings innerWidth hero-container flexCenter">
        <div className="flexColStart hero-left">
           <div className="hero-title">
            <div className="orange-circle"></div>
            <h1>
              Discover <br />Most Suitable <br />Property
            </h1>
           </div>
           <div className="flexColStart hero-des">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
           </div>
           <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <button className="button">Search</button>
           </div>
        </div>
        <div className="flexCenter hero-right">
            <div className="image-container">
              <img src={heroImage} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero