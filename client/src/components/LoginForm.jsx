import React from "react";
import { Link } from "react-router-dom";

function LoginForm() {
    return (
        <form action="users/login" method="POST">
            <div className="form-row col">
                <label for="email">Email</label>
                <input className="form-control" type="email" name="email" placeholder="email@email.com" />
            </div>
            <div className="form-row col">
                <label for="password">Password</label>
                <input className="form-control" type="password" name="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn login-button nav-link login-button-text">Login</button>
        </form>
    );
}

export default LoginForm;