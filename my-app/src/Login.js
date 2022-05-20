import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import FinalLogo from './FinalLogo.PNG';
import Signinbackground from "./Signinbackground.jpg"
import { auth } from "./firebase.js";
function Login() {
    const history = useHistory();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))


        //some fancy firebase login shittttttttttttt...
    }

    const register = e => {
        e.preventDefault();
        auth
             .createUserWithEmailAndPassword(email,password)
             .then((auth) => {
                 //it succesfully created a new user with phone and password
                  console.log(auth);
                  if (auth) {
                      history.push('/')
                  }
             })
             .catch(error => alert(error.message))


        //do some fancy firebase register shitttttttttttt...
    }

    return (    

        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                src={FinalLogo} height="150"
                />
            </Link>

            <img className='login__background'
                src={Signinbackground} width="1519" height="598"
                alt=""
            /> 

            <div className='login__container'>
                <h1>Sign-In</h1>

                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    
                    <button type='submit'onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    OR  
                </p>
                <p>
                    New To AgroFerdure ?
                        
                </p>

                <button onClick={register} className='login__registerButton'>Create your Agro Account</button>

            </div>  
            
        </div>
    )
}

export default Login