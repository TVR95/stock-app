import React from "react";
import { Link } from "react-router-dom";
import User from "./User";
import SignInUpButton from "./SignInUpButton";

const isUserLogged = true;

function Header() {
    return (
       <section id="header">
        <header>
            <div className="container-fluid">
                <div className="row nav-space">
                    <div className="col-2">  
                            <h2 className="logo">Stock Exchange</h2>
                    </div>
                    <div className="col-7">
                        <ul className="nav nav-text-color">
                            <li className="nav-item">
                                <Link to="/" className="nav-link nav-text-color">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="nav-link nav-text-color">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/stocks" className="nav-link nav-text-color">Stocks</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        {isUserLogged ? <User /> : <SignInUpButton />}
                    </div>
                </div>  
            </div>
        </header>
    </section> 
    );
}

export default Header;