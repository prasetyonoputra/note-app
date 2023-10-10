import React from "react";
import './LoginStyle.css';


function LoginPage() {
    return (
        <div className="container">
            <div className="header-form">
                <h1>NOTES</h1>
            </div>
            <input className="input-form" type="email" placeholder="Email" />
            <input className="input-form" type="password" placeholder="Password" />
            <br />
            <div className="center-item">
                <button className="button-form">Login</button>
            </div>
        </div>
    );
}
export default LoginPage;