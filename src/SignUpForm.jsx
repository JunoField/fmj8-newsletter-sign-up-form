import './App.css';
import { useState } from "react";

function SignUpForm({setEmail}) {

    const [enteredEmail, setEnteredEmail] = useState("");
    const [validity, setValidity] = useState(true);

    const validateEmail = (input) => input.toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  

    const handleSubmit = (e) => {
        e.preventDefault();
        setValidity(validateEmail(enteredEmail));
        if (validity){
            setEmail(enteredEmail);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        setEnteredEmail(e.target.value);
        setValidity(validateEmail(enteredEmail));
    }

  return (
      <form onSubmit={handleSubmit}>
        <div className="inputHeader">
            <label>Email address</label>
            {!validity && <label className="errorMessage">Valid email required</label>}
        </div>
        <input type="email" placeholder="email@company.com" className={`input ${!validity && "inputError"}`} value={enteredEmail} onChange={handleChange} />
        <input type="submit" value="Subscribe to monthly newsletter" className="input btn" />
      </form>
  )
}

export default SignUpForm
