import React from "react";
import { GoogleLoginButton } from 'ts-react-google-login-component';


const Login = () => {
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


            return (
                <div className="loginForm">
                    <h1>LOGIN</h1>
                    <input className="" type="text" placeholder="Username or email..."/>
                    <input type="password" placeholder="Password..."/>
                    <button>Sign in</button>

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