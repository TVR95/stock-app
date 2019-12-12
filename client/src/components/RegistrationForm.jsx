import React from "react";
import { Link } from "react-router-dom";

function RegistrationForm() {
    return(
        <form action="users/registration" method="POST">
            <div className="form-row col">
                <label for="email">Email</label>
                <input  className="form-control" type="email" name="email" placeholder="email@email.com" />
            </div>
            <div className="form-row col">
                <label for="password">Password</label>
                <input className="form-control" type="password" name="password" placeholder="Password" />
            </div>
            <div className="form-row col">
                <label for="repeatPassword">Repeat Password</label>
                <input className="form-control" type="password" name="repeatPassword" placeholder="Repeat Password" />
            </div>
            <div className="form-row col">
                <label for="wallet">Wallet</label>
                <input className="form-control" type="number" name="walletFunds" placeholder="0"/>
            </div>
            <button type="submit" className="btn login-button nav-link login-button-text">Register</button>
        </form>
    );
}

export default RegistrationForm;