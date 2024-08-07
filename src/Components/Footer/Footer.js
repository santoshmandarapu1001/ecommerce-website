import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import insta_icon from'../Assets/instagram_icon.png'
import printrest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'


function Footer() {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt=''></img>
            <p>LCP</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icons'>
            <div className='footer-icons-container'>
                <img src={insta_icon} alt=''></img>
            </div>
            <div className='footer-icons-container'>
                <img src={printrest_icon} alt=''></img>
            </div>
            <div className='footer-icons-container'>
                <img src={whatsapp_icon} alt=''></img>
            </div>
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ 2023 - All Right Reserved.</p>

        </div>

    </div>
  )
}

export default Footer