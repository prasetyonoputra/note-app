import React from "react";
import './LoginStyle.css';
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();

    const loginSubmit = () => {
        navigate("/home");
    };



    return (
        <div>
            <div className="content">
                <div className="header-form">
                    NOTES
                </div>
                <input className="input-form" type="email" placeholder="Email" />
                <input className="input-form" type="password" placeholder="Password" />
                <br />
                <div className="center-item">
                    <button className="button-form" onClick={loginSubmit}>Login</button>
                </div>
            </div>

            <div className="footer">
                <a href="/forgot-password">Forgot Password</a>
                <a href="/register">Register</a>
            </div>
        </div>
    );
}
export default LoginPage;