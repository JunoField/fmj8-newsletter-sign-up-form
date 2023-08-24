import { useState } from 'react';
import './App.css';
import InitialView from "./InitialView.jsx";
import SuccessView from "./SuccessView.jsx";

function App() {
    const [email, setEmail] = useState("");

  return (
      <div>
      { 
          email != "" ? <SuccessView email={email} /> : <InitialView setEmail={setEmail}/> 
      }
      </div>
  )
}

export default App
