import React, { useState } from 'react';
import './styles/Login.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validate = () => {
        if (!username || !password) {
            setErrorMessage('Both fields are required.');
            return false;
        }

        if (password.length < 6) {
            setErrorMessage('Password must be at least 6 characters long.');
            return false;
        }

        setErrorMessage('');
        alert('Form is valid!');
        return true;
    };

    return (
        <>
            <div className="con">
                <div className="ma">
                    <h2 className='c1'>Login</h2>
                    <form id="form_id" name="myform" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="username">User Name :</label>
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                        <label htmlFor="password">Password :</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <input 
                            type="button" 
                            value="Login" 
                            id="submit" 
                            onClick={validate} 
                        />
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
