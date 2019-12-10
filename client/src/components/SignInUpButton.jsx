import React from "react";
import { Link } from "react-router-dom";

function SignInUpButton() {
    return (
        <div>
            <button className="btn btn-light nav-button-space nav-text-decoration" type="button" name="signInButton">
                <Link to="/signIn" className="nav-signin-color">Sign In</Link>
            </button>
            <button className="btn btn-outline-light nav-text-decoration" type="button" name="signUpButton">
                <Link to="/signUp" className="nav-signup-color">Sign Up</Link>
            </button>
        </div>
    );
}

export default SignInUpButton;