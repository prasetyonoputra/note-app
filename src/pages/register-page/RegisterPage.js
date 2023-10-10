import React from "react";
import './RegisterStyle.css';

function RegisterPage() {
    return (
        <div>
            <div className="content">
                <div className="header-form">
                    NOTES
                </div>
                <input className="input-form" type="email" placeholder="Email" />
                <input className="input-form" type="text" placeholder="Name" />
                <input className="input-form" type="password" placeholder="Password" />
                <br />
                <div className="center-item">
                    <button className="button-form">Register</button>
                </div>
            </div>

            <div className="footer">
                <a href="/forgot-password">Forgot Password</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
}
export default RegisterPage;