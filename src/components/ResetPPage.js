import "./ResetPPage.css"

export default function ResetPPage ({resetHandle}) {
    return (
        <div className="pagebackground">
            <div className="ResetModalBackGround">
                <div className="ModalInfo">
                    <h1>Forget your password</h1>
                    <p>We'll email you a link to reset your password</p>
                    <form>
                        <input className="resetInput" type="email" placeholder="Email" required/>
                        <br></br>
                        <button className="resetButton" type="submit">Send me a password reset Link</button>
                        <br></br>
                        <button className="cancelButton" onClick={resetHandle}>Cancel</button>
                    </form>
                </div>

            </div>
        </div>
    )
}