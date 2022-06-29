import React from 'react';
import { useEffect } from "react";
import './App.css';

function App() {

  // @ts-ignore
  function handleCallbackResponse( response ) {
    console.log(" Encoded JWT ID token " + response.credential);
  }

  useEffect(() => {
    /* global google */

    // @ts-ignore
    google.accounts.id.initialize({
      client_id: "993513948523-anaep7s1tmm4n0db313bruanu26qehfr.apps.googleusercontent.com" ,
      callback: handleCallbackResponse
    });

    // @ts-ignore
    google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline" , size: "large" }
    );

  },[]);

  return (
    <div className="app">
      <div className="userLogin">
        <h1>LOGIN</h1>
        <input type="text" placeholder="Username or email..." />
        <input type="password" placeholder="Password..."/>
        <button>Sign in</button>

        <div id = "signInDiv"> </div>
      </div>
    </div>
  );
}

export default App;
