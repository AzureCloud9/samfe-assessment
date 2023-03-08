import Login from "./components/Login";
import ResetPPage from "./components/ResetPPage";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard"
import React, {useState} from 'react'
function App() {

  const [resetPass, setResetPass] = useState(false)
  const [login, setLogin] = useState(true)
  const [logout, setLogout] = useState(false)
  const [signUp, setSignUp] = useState(false)
  const [mainPage, setMainPage] = useState(false)
  

  function resetPassHandle () {
    setResetPass(!resetPass)
  }

  function signUpHandle () {
    setSignUp(!signUp)
    setLogin(!login)
  }

  function loginHandle () {
    setLogin(!login)
    setMainPage(!mainPage)
  }

  function logoutHandle () {
    setLogout(!logout)
    setLogin(!login)
    setMainPage(!mainPage)
  }



  return (
    <div className="App">
      {login ? (<Login 
      resetHandle={resetPassHandle} 
      signUpHandle={signUpHandle} 
      loginHandle={loginHandle} 
      login={login} 
      setLogin={setLogin} 
      mainPage={mainPage} 
      setMainPage={setMainPage} />):null}
      {resetPass ? (<ResetPPage resetHandle={resetPassHandle} />):null}
      {signUp ? (<SignUp signUpHandle={signUpHandle}/>):null}
      {mainPage ? (<Dashboard logout={logout} logoutBtn={logoutHandle}/>):null}
    </div>
  );
}

export default App;
