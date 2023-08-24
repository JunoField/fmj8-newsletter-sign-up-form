import { useState } from 'react';
import './App.css';
import InitialView from "./InitialView.jsx";
import SuccessView from "./SuccessView.jsx";

function App() {
    const [submitStatus, setSubmitStatus] = useState(false);

  return (
      <div>
      { 
          submitStatus ? <SuccessView/> : <InitialView setSubmitStatus={setSubmitStatus}/> 
      }
      </div>
  )
}

export default App
