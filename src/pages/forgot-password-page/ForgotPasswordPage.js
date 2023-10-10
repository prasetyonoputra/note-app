import React from "react";
import './ForgotPasswordStyle.css';

function ForgotPasswordPage() {
    return (
        <div>
            <div className="content">
                <div className="header-form">
                    NOTES
                </div>
                <input className="input-form" type="email" placeholder="Email" />
                <br />
                <div className="center-item">
                    <button className="button-form">Reset Password</button>
                </div>
            </div>

            <div className="footer">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
        </div>
    );
}
export default ForgotPasswordPage;