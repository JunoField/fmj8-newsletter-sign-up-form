import './App.css'
import InitialTextBody from "./InitialTextBody.jsx";

function InitialView({setEmail}) {

  return (
      <div className="cardRoot">
        <img src="../assets/images/illustration-sign-up-mobile.svg" />

        <InitialTextBody setEmail={setEmail}/>
      </div>
  )
}

export default InitialView
