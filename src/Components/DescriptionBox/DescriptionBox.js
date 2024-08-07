import React from 'react'
import './DescriptionBox.css'

function DescriptionBox() {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>Electronic commerce refers to companies and individuals that buy and sell goods and services over the internet. E-commerce operates in different types of market segments and can be conducted over computers, tablets, smartphones, and other smart devices. Nearly every imaginable product and service is available through e-commerce transactions, including</p>
            <p>E-commerce is the buying and selling of goods and services over the internet.It is conducted over computers, tablets, smartphones, and other smart devices.Almost anything can be purchased through e-commerce today, which makes e-commerce highly competitive.</p>
        </div>
    </div>
  )
}

export default DescriptionBox