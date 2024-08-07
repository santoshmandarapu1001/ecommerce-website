import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Mail</h1>
        <p>subscribe to our newsletter and stay updated</p>
        <div>
            <input type='email' placeholder='Your Email id'></input>
            <button>subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter