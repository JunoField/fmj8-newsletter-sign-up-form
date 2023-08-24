import './App.css';
import { useState } from "react";

function SignUpForm({setEmail}) {

    const [enteredEmail, setEnteredEmail] = useState("");
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted");
        setEmail(enteredEmail);
    };

  return (
      <form onSubmit={handleSubmit}>
        <label>Email address</label>
        <input type="email" placeholder="email@company.com" className="input" value={enteredEmail} onChange={e => setEnteredEmail(e.target.value)}/>
        <input type="submit" value="Subscribe to monthly newsletter" className="input btn" />
      </form>
  )
}

export default SignUpForm
