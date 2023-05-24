import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
    const USERNAME_MIN_LENGTH = 6;
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (userName.length > USERNAME_MIN_LENGTH) {
            localStorage.setItem('userName', userName);
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
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button className="login__button">SIGN IN</button>
        </form>
    );
};

export default Login;