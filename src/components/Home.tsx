import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const USERNAME_MIN_LENGTH = 6;
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (userName.length < USERNAME_MIN_LENGTH)
        localStorage.setItem('userName', userName);
        navigate('/chat');
    };

    return (
        <form className="home__container" onSubmit={handleSubmit}>
            <h2 className="home__header">Sign in to Open Chat</h2>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                minLength={USERNAME_MIN_LENGTH}
                name="username"
                id="username"
                className="username__input"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button className="home__cta">SIGN IN</button>
        </form>
    );
};

export default Home;