import React from "react";
import {useState, useEffect, useCallback} from 'react';
import { GoogleLoginButton } from 'ts-react-google-login-component';


const Login = () => {
    //GOOGLE BTN
    const preLoginTracking = () => {
        console.log('Attemp to login with google');
    }
    const errorHandler = (error: string) => {
        // handle error if login got failed...
        console.error(error)
    }
    const responseGoogle = (googleUser: gapi.auth2.GoogleUser) => {
        const id_token = googleUser.getAuthResponse(true).id_token
        const googleId = googleUser.getId()

        console.log({ googleId })
        console.log({accessToken: id_token})
        // Make user login in your system
        // login success tracking...
    }
    const clientConfig = { client_id: '993513948523-anaep7s1tmm4n0db313bruanu26qehfr.apps.googleusercontent.com' }
    //END GOOGLE BTN

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //
    // useEffect(() => {
    //     console.log("use effect my var" , email );
    // },[email]);

    const existingUser = useCallback(() => {
        const user = {
            email: email,
            password: password
        };
        console.log("user is :" , user);
    },[email,password]);
    return (
        <div className="loginForm">
            <h1 className="text-orange-600">LOGIN</h1>
            <input className="" type="text"
                   placeholder="Username or email..."
                   onChange={(e) => {setEmail(e.target.value)}}
                   value={email}
            />
            <input type="password"
                   placeholder="Password..."
                   onChange={(e) => {setPassword(e.target.value)}}
                   value={password}

            />
            <button>Sign in</button>
            <button onClick={existingUser}>Log in</button>
            <GoogleLoginButton
                responseHandler={responseGoogle}
                clientConfig={clientConfig}
                preLogin={preLoginTracking}
                failureHandler={errorHandler}
            />
        </div>
    );
}

export default Login