import React, {useEffect} from "react";


const Login = () => {

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
        <div className= "loginForm">

            <div id = "signInDiv"> </div>
        </div>
    );
}


export default Login