import './App.css'
import InitialTextBody from "./InitialTextBody.jsx";

function InitialView({setSubmitStatus}) {

  return (
      <div className="cardRoot">
        <img src="../assets/images/illustration-sign-up-mobile.svg" />

        <InitialTextBody setSubmitStatus={setSubmitStatus}/>
      </div>
  )
}

export default InitialView
