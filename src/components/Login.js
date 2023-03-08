import React, {useState} from 'react'
import "./Login.css"
import img1 from "./image/img2.png"
export default function Login({resetHandle, signUpHandle, loginHandle, login, setLogin, mainPage, setMainPage}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (username === 'samfe@gmail.com' && password === 'samfe123') {
            setLogin(!login)
            setMainPage(!mainPage)
        } else {
          alert('Invalid email or password');
        }
      }

    return (
        <div className="LoginPage">
            <div className={'Login-form'}>
                <div className="form-placement">
                    <h1>Login to your account</h1>
                    <form onSubmit={handleSubmit}>
                        <label for="uname"><b>Email Id:</b></label>
                        <br/>
                        <input className="loginInput" type="email" placeholder="Enter Email" name="uname" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                        <br/>
                        <br/>
                        <label for="psw"><b>Password:</b></label>
                        <br/>
                        <input className="loginInput" type="password" placeholder="Enter Password" name="psw" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        <p className="forgetPassword" onClick={resetHandle}>Forgot Password?</p>
                        <button className="loginButton" type="submit" >Login Now</button>
                        <button className="signUpButton" onClick={signUpHandle}>Signup Now</button>
                    </form>

                </div>
            </div>
            <div className="imgHolder1">
                <img className='img1' src={img1} alt="img"></img>
            </div>
        </div>
        
        
    )
}