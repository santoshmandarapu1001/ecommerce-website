import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow1 from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'
import './Hero.css'

function Hero() {
  return (
    <>
        <div className='hero'>
            <div className='hero-left'>
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>New</p>
                        <img src={hand_icon} alt=''></img>
                    </div>
                    <p>Collections</p>
                    <p>For Everyone</p>
                </div>
                <div className='hero-latest-btn'>
                    <div>Latest Collection</div>
                    <img src={arrow1} alt=''/>
                </div>
            </div>

            <div className='hero-right'>
                <img src={hero_img} alt=''></img>

            </div>

        </div>
    </>
  )
}

export default Hero