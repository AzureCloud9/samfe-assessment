import "./SignUp.css"
import img2 from "./image/img1.png"
export default function SignUp({signUpHandle}) {
    return (
        <div className="signUpPage">
            <div className="signUpForm1">
                <div className="formPlacement">
                    <h1>sign up into your account</h1>
                    <form>
                        <div className="signupForm2">
                            <div className="firstRow">
                                <label for="Fname"><b>First Name:</b></label> <br></br>
                                <input className="singUpInput" placeholder="Enter your name" name="Fname" required/>
                                <br></br>
                                <label for="email"><b>Email Id:</b></label> <br></br>
                                <input className="singUpInput" placeholder="Enter your email" name="email" required/>
                                <br></br>
                                <label for="password"><b>Password:</b></label> <br></br>
                                <input className="singUpInput" placeholder="xxxxxxxxx" name="password" required/>
                            </div>

                            <div className="secondRow">
                                <label for="Lname"><b>Last Name:</b></label> <br></br>
                                <input className="singUpInput" placeholder="Enter your name" name="Lname" required/>
                                <br></br>
                                <label for="email"><b>Mobile NO:</b></label> <br></br>
                                <input className="singUpInput" placeholder="Enter your number" name="Fname" required/>
                                <br></br>
                                <label for="password"><b>Comfirm Password:</b></label> <br></br>
                                <input className="singUpInput" placeholder="xxxxxxxxx" name="password" required/>
                            </div>
                        </div>
                        <div className="signup-button-container">
                            <button className="signUpButton2" onClick={signUpHandle}>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="imgHolder2">
                <img className='img2' src={img2} alt="img"></img>
            </div>
        </div>
    )
}