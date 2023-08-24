import './App.css'
import SignUpForm from "./SignUpForm.jsx";

function InitialTextBody({ setSubmitStatus }) {

  return (
      <div className="textBody">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
            <li><span>Product discovery and building what matters</span></li>
            <li><span>Measuring to ensure updates are a success</span></li>
            <li><span>And much more!</span></li>
        </ul>
        <SignUpForm setSubmitStatus={setSubmitStatus}/>
      </div>
  )
}

export default InitialTextBody
