import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {

    return (
        <main className="home__container">
            <h1 className="home__title">Welcome to EPN Messenger</h1>
            <div className="link__container">
                <Link to="/login" className="home__link">Log In</Link>
                <Link to="/register" className="home__link">Register!</Link>
            </div>
        </main>
    );
};

export default Home;