import React from 'react'
import './Hero.css'
import heroImage from "/hero-image.png"
const Hero = () => {
  return (
    <section className='hero-wrapper'>
      <div className="paddings innerWidth hero-container flexCenter">
        <div className="hero-left">
           
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