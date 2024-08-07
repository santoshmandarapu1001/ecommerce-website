import React, { useContext, useState } from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

function Navbar() {
    const {getTotalCartItems} =useContext(ShopContext)
    const [menu,setMenu]=useState("shops")
  return (
    <div className='nav'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <p><Link style={{textDecoration:'none'}} to="/">LCP</Link></p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>setMenu("shops")}><Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu==='shops'?<hr/>:<></>} </li>
            <li onClick={()=>setMenu("mens")}><Link style={{textDecoration:'none'}} to='/Mens'>Men</Link> {menu==='mens'?<hr/>:<></>}</li>
            <li onClick={()=>setMenu("womens")}><Link style={{textDecoration:'none'}} to='/Womens'>Women</Link> {menu==='womens'?<hr/>:<></>}</li>
            <li onClick={()=>setMenu("kids")}><Link style={{textDecoration:'none'}} to='/Kids'>Kids</Link> {menu==='kids'?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/LoginSignUp'><button>login</button></Link>
            <Link to='/Cart'><img src={cart_icon} alt=''></img></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar


