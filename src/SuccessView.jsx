import './App.css'

function SuccessView({email}) {

  return (
      <div className="cardRoot successCardRoot">
        <img src="../assets/images/icon-success.svg" />
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription.</p>
        
        <div className="successFooter">
        <button className="input btn">Dismiss message</button>
        </div>
      </div>
  )
}

export default SuccessView
