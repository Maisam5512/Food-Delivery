import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
const LoginPopUp = ({setShowLogin}) => {
    const [signUp, setSignUp] = useState("Login")
    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{signUp}</h2>
                    <img onClick={()=>{setShowLogin(false)}} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {signUp==="Sign Up" ? <input type="text" placeholder='Your name' required />: <></>}
                    
                    <input type="email" placeholder='Email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button>{signUp === "Sign Up" ?"Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" />
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
                {signUp === "Login" ? <p>Create a new account?<span onClick={()=>{setSignUp("Sign Up")}}>Click here</span></p> : <p>Already have an account?<span onClick={()=>{setSignUp("Login")}}>Login here</span></p> }
                
                
            </form>
        </div>
    )
}

export default LoginPopUp
