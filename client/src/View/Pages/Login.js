import React, { useState, useEffect } from 'react';
import './Login.css'
//user- "email":"new.test@gmail.com","password":"newtest"
import {fetchUserData} from '../../redux';
import { useDispatch, useSelector } from 'react-redux';

function Login(){
    const dispatch = useDispatch();
    const [userEmail,setEmail]=useState("")
    const [userPassword,setPassword]=useState("")
    //const [error,setError]=useState("")
    let error = useSelector(state => !!state.userReducer && state.userReducer.login)
    
    function handleLogin(e) {
        e.preventDefault();
        dispatch(fetchUserData({userEmail,userPassword}))
        console.log(error)
    }
    return(
        
           <form onSubmit={handleLogin} className="loginpage">
                    <h1>כניסה</h1>
                    <div>
                        <label className="title-bold">דוא"ל:</label>
                        <input type="email" className="input-field" onChange={(e) => {
                            setEmail(e.target.value);
                        }}></input>
                    </div>
                    <div>
                        <label>סיסמא:</label>
                        <input type="password" className="input-field" onChange={(e) => {
                            setPassword(e.target.value);
                        }} required></input>
                    </div>
                    <button type="submit" className="login">כניסה</button>
                    <label className="message">{error}</label>
                </form>

       
    )

}
export default Login