import './App.css'
import InitialTextBody from "./InitialTextBody.jsx";

function InitialView({setEmail}) {

  return (
      <div className="cardRoot initialCardRoot">
        <img src="assets/images/illustration-sign-up-mobile.svg" className="imgMobile"/>
        <InitialTextBody setEmail={setEmail}/>
        <img src="assets/images/illustration-sign-up-desktop.svg" className="imgDesktop"/>
      </div>
  )
}

export default InitialView
