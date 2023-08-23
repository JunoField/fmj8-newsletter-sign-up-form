import './App.css'

function SignUpForm() {

  return (
      <form>
        <label>Email address</label>
        <input type="email" placeholder="email@company.com"/>
        <input type="submit" value="Subscribe to monthly newsletter" />
      </form>
  )
}

export default SignUpForm
