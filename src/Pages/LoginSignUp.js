import React from 'react'
import '../Pages/Css/LoginSignUp.css'


function LoginSignUp() {
  return (
   <div className='loginsignup'>
    <div className='loginsignup-container'>
      <h1>Sign Up</h1>
      <div className='loginsignup-fields'>
        <input type='text' placeholder='Your Good Name'></input> <br></br>
        <input type='email' placeholder='Enter your Email'></input> <br></br>
        <input type='password' placeholder='Password'></input> <br></br>
      </div>
      <button>Continue</button>
      <p className='loginsignup-login'>Already Have An Account? <span>Login</span></p>
      <div className='loginsignup-agree'>
        <input type='checkbox' name='' id=''></input>
        <p>By Continuing, I agree to the terms of use & privacy policy</p>
      </div>
    </div>
   </div>
  )
}

export default LoginSignUp