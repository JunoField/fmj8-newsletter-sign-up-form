import './App.css'
import InitialTextBody from "./InitialTextBody.jsx";

function InitialView({setEmail}) {

  return (
      <div className="cardRoot initialCardRoot">
        <img src="assets/images/illustration-sign-up-mobile.svg" className="imgMobile" alt=""/>
        <InitialTextBody setEmail={setEmail}/>
        <img src="assets/images/illustration-sign-up-desktop.svg" className="imgDesktop" alt=""/>
      </div>
  )
}

export default InitialView
