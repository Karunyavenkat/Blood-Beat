import React, { useState } from 'react'
import '../assets/css/Login.css';

    function Register() {
        const [username, setUsername] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [nameErr, setNameErr] = useState(false);
        const [showPassword, setShowPassword] = useState(false);
    
        function registration() {
            if ((username.trim().length === 0) || (password.trim().length === 0) || (email.trim().length === 0)) {
                setNameErr(true);
            } else if (!email.includes('@') || !email.includes('.') || !email.includes('com')) {
                alert('Please enter a valid email address');
            } else if (password.length < 8) {
                alert('Please enter a password with more than eight characters');
            } else {
                setNameErr(false);
                const user = { username: username, email: email, password: password };
                console.log(user);
                localStorage.setItem('user', JSON.stringify({ name: username, email: email, password: password }));
                window.location.href = '/login';
            }
        }
    
        return (
            <div className="register-body">
                <div className="register-main">
                    <h1>REGISTER</h1>
                    {nameErr && <p className="errP">Please fill every input field</p>}
                    <p>Name</p>
                    <input 
                        type='text' 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                    <p>Email</p>
                    <input 
                        type='text' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <p>Password</p>
                    <input 
                        type={showPassword ? 'text' : 'password'} 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <p>Confirm Password</p>
                    <input 
                        type={showPassword ? 'text' : 'password'} 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <label className="checkbox-container">
                        <input 
                            type="checkbox" 
                            checked={showPassword} 
                            onChange={() => setShowPassword(!showPassword)} 
                        />
                        Show Password
                    </label>
                    <button onClick={registration}>Register</button>
                </div>
            </div>
        );
}

export default Register;
