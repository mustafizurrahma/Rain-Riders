import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import './Google.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}
const Gooogle = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                setLoggedInUser(user)
                history.replace(from)
            }).catch((error) => {

                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                // ...
            });
    }
    return (
        <div>
            <div className="social-area">
                <div className="divide-area">
                    <span>OR</span>
                </div>
                {/* <p>email: {loggedInUser.email}</p> */}
                <div className="social-account-wrap">
                    <button onClick={handleGoogleSignIn}><i className="fab fa-google"></i><span>Continue with Google</span></button>
                </div>
            </div>
        </div>
    );
};

export default Gooogle;