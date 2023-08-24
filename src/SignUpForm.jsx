import './App.css'

function SignUpForm({ setSubmitStatus }) {
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted");
        setSubmitStatus(true);
    };

  return (
      <form onSubmit={handleSubmit}>
        <label>Email address</label>
        <input type="email" placeholder="email@company.com" className="input"/>
        <input type="submit" value="Subscribe to monthly newsletter" className="input btn" />
      </form>
  )
}

export default SignUpForm
