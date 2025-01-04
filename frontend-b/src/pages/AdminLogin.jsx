import React, { useState } from 'react'
import '../assets/css/Login.css';
import { Link } from 'react-router-dom';


function AdminLogin () {
    const [loginName, setLoginName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginNameErr, setLoginNameErr] = useState(false);
    const [loginPasswordErr, setLoginPasswordErr] = useState(false);
    const [incorrectErr, setIncorrectErr] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    function Loginvalidation() {
        let isValid = true;

        if (loginName.trim().length === 0) {
            setLoginNameErr(true);
            isValid = false;
        } else {
            setLoginNameErr(false);
        }

        if (loginPassword.trim().length === 0) {
            setLoginPasswordErr(true);
            isValid = false;
        } else {
            setLoginPasswordErr(false);
        }

        if (!isValid) return;

        const register = JSON.parse(localStorage.getItem('user'));
        if (register && (register.name !== loginName || register.password !== loginPassword)) {
            setIncorrectErr(true);
            alert("User Not Found");
        } else if (register) {
            setIncorrectErr(false);
            window.location.href = '/';
        }
    }

    return (
        <div className="login-body">
            <div className="login-main">
                <h1>Login</h1>
                {incorrectErr && <small style={{ color: 'red', textAlign: 'center' }}>Enter the correct username and password</small>}
                <br />
                <p>Admin Name</p>
                <input
                    type='text'
                    value={loginName}
                    onChange={(e) => setLoginName(e.target.value)}
                />
                {loginNameErr && <small style={{ color: '#d3521d' }}>Please enter the admin name</small>}
                <br />
                <p>Admin Password</p>
                <input
                    type={showPassword ? 'text' : 'password'}
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                />
                {loginPasswordErr && <small style={{ color: '#d3521d' }}>Please enter the password</small>}
                <br />
                <label className="checkbox-container">
                    <input
                        type="checkbox"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                    />
                    Show Password
                </label>
                <br />
                <Link to="/dashboard"><button onClick={Loginvalidation}>Login</button></Link>
                {/* <p style={{ fontSize: '10px' }}>Don't have an account yet? <Link to={'/register'}>Register</Link></p> */}
                <p style={{ fontSize: '10px' }}>Are you an User? <Link to={'/UserRegister'}>Login</Link></p>
            </div>
        </div>
    );
    
}
export default AdminLogin;
