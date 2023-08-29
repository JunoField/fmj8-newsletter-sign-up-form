import './App.css'
import { useEffect, useState } from "react";

function SuccessView({email}) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setReady(true);
        }, 500);
    }, []);

    const handleButtonClick = () => {
        if (ready){
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }
    }

  return (
      <div className="cardRoot successCardRoot">
        <img src="assets/images/icon-success.svg" alt=""/>
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription.</p>
        
        <div className="successFooter">
        <button className="input btn" onClick={handleButtonClick}>Dismiss message</button>
        </div>
      </div>
  )
}

export default SuccessView
