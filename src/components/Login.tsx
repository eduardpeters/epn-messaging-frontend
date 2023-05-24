import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
    const USERNAME_MIN_LENGTH = 6;
    const PASSWORD_MIN_LENGTH = 6;
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username.length > USERNAME_MIN_LENGTH) {
            localStorage.setItem('userName', username);
            navigate('/chat');
        }
    };

    return (
        <form className="login__container" onSubmit={handleSubmit}>
            <h1 className="login__title">Sign in to Open Chat</h1>
            <label className="login__label" htmlFor="username">Username</label>
            <input
                type="text"
                minLength={USERNAME_MIN_LENGTH}
                name="username"
                id="username"
                className="login__input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label className="login__label" htmlFor="password">Password</label>
            <input
                type="password"
                minLength={PASSWORD_MIN_LENGTH}
                name="password"
                id="password"
                className="login__input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login__button">SIGN IN</button>
        </form>
    );
};

export default Login;