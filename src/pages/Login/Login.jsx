import React from 'react'
import './Login.css'
import logo from '../../assets/assets/logo.png'
import { login,signup } from '../../firebase'

const Login = () => { 

  const [SignState, setSignState] = React.useState("Sign In");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const user_auth = async (e) => {

    e.preventDefault();

    if(SignState === "Sign In" )
    {
      await login(email, password);
    }
    else 
    {
      await signup(name, email, password);
    }

  }

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{SignState}</h1>
        <form >
          {
            SignState === "Sign In" 
                          ? 
                          <></> 
                          : 
                          <input value={name} onChange={ (e) => {setName(e.target.value)}} type="text" placeholder='Your Name'/>
          }
          <input value={email} onChange={ (e) => {setEmail(e.target.value)}} type="email" placeholder='Your Email'/>
          <input value={password} onChange={ (e) => {setPassword(e.target.value)}} type="password" placeholder='Password'/>
          <button onClick={user_auth} type='submit' >{SignState}</button>
          <div className="from-help">
            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Nedd Help?</p>
          </div>
        </form>
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