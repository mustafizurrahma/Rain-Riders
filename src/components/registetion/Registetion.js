import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './registation.css'
import firebase from "firebase/app";
import "firebase/auth";
import Gooogle from '../google/Google'
import firebaseConfig from '../../firebaseConfig';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const Registetion = () => {
    // const [newUser, setNewUser]= useState()
    const [user, setUser] = useState({
        name: '',
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
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
    }
    const handleSubmit = (e) => {
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    // Signed in 
                    // var user = userCredential.user;
                    // ...
                    const newUserInfo = { ...user }
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo)
                })
                .catch((error) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                    // var errorCode = error.code;
                    // var errorMessage = error.message;
                    // // ..
                    // console.log(errorCode, errorMessage);
                });
        }
        e.preventDefault()
    }
    return (
        <>
            <div className="container">
                <div className="main-content-wrap">
                    <div className="login-area-wrap">
                        <form onSubmit={handleSubmit} className="registetion-form">
                            <h3>Create an <span className="title-color">account</span></h3>
                            <input onChange={handleChange} type="text" placeholder="Name" required />
                            <input onChange={handleChange} type="email" name='email' placeholder="email" required />
                            <input onChange={handleChange} type="password" name='password' placeholder="Password" />
                            <input type="password" name='ConfrimPassowrd' placeholder="Confrim Passowrd" required />
                            <input type="submit" className='btn btn-primary' value='Create an account' />
                            <p>Already have an account? <Link to='/login'>Login</Link></p>

                        </form>
                        <p>{user.error}</p>
                        {
                            user.success && <p>আমি জিতেছি</p>
                        }
                        <Gooogle />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registetion;