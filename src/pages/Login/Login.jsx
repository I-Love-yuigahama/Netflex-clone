import React from 'react'
import './Login.css'
import logo from '../../assets/assets/logo.png'

const Login = () => { 

  const [SignState, setSignState] = React.useState("Sign In");

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{SignState}</h1>
        <from >
          {
            SignState === "Sign In" 
                          ? 
                          <></> 
                          : 
                          <input type="text" placeholder='Your Name'/>
          }
          <input type="email" placeholder='Your Email'/>
          <input type="password" placeholder='Password'/>
          <button>{SignState}</button>
          <div className="from-help">
            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Nedd Help?</p>
          </div>
        </from>
        <div className="form-swith">
          {
            SignState === "Sign In" ? 
                                    <p>New to Netflex? <span onClick={ () => setSignState ("Sign Up")}>Sign up Now</span></p> 
                                    : 
                                    <p>Already have Account? <span onClick={ () => setSignState ("Sign In")}>Sign in Now</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login