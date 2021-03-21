import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import Gooogle from '../google/Google'
import { UserContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [newUser, setNewUser] = useState({
        email: '',
        password: '',
        error: '',
        success: false,
    })
    const handleChange = (e) => {
        let isFormValid
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);

        }
        if (e.target.name === 'password') {
            const passIsvalid = e.target.value.length > 6;
            const passValidCheck = /\d{1}/.test(e.target.value)
            isFormValid = passIsvalid && passValidCheck;
        }
        if (isFormValid) {
            // console.log('bangladesh');
            const newUserInfo = { ...newUser }
            newUserInfo[e.target.name] = e.target.value;
            setNewUser(newUserInfo)
        }
    }
    const handleSubmit = (e) => {
        if (newUser.email && newUser.password) {
            firebase.auth().signInWithEmailAndPassword(newUser.email, newUser.password)
                .then(res => {
                    // Signed in
                    const newUserInfo = { ...newUser }
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setNewUser(newUserInfo)
                    setLoggedInUser(newUserInfo)
                    // ...
                })
                .catch((error) => {
                    const newUserInfo = { ...newUser }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setNewUser(newUserInfo)
                });
        }
        e.preventDefault()
    }
    return (
        <div className="container">
            <div className="main-content-wrap">
                <div className="login-area-wrap">
                    {/* <p>email: {loggedInUser.email}</p> */}
                    <form onSubmit={handleSubmit} className="registetion-form">
                        <h3><span className="title-color">Login</span> Your Account</h3>
                        <input onChange={handleChange} type="email" name='email' placeholder="email" required />
                        <input onChange={handleChange} type="password" name='password' placeholder="Password" required />
                        <input type="submit" className='btn btn-primary' value='Login' />
                        <p>Don’t have an account? <Link to='/registetion'> Create an account</Link></p>

                    </form>
                    <p>{newUser.error}</p>
                    {
                        newUser.success && <p>আমি জিতেছি</p>
                    }
                    <Gooogle />


                </div>
            </div>
        </div>
    );
};

export default Login;