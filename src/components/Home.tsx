import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {

    return (
        <main className="home__container">
            <h1 className="home__title">Welcome to EPN Messenger</h1>
            <div className="home__description">
                <h3 className="description__text description__text-left">A Web App for instant messaging</h3>
                <h3 className="description__text description__text-right">Join the group chat, create an account!</h3>
            </div>
            <div className="link__container">
                <Link to="/login" className="home__link">Log In</Link>
                <Link to="/register" className="home__link">Register!</Link>
            </div>
        </main>
    );
};

export default Home;