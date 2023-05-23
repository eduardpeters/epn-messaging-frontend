import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {

    return (
        <main>
            <h1>Welcome to EPN Messenger</h1>
            <Link to="/login">Log In</Link>
        </main>
    );
};

export default Home;