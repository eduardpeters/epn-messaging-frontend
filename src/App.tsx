import { socket } from './socket';
import './styles/App.css';

socket.connect();

function App() {
    return (
        <div className="App">
            <h1>My first Vite App</h1>
        </div>
    );
}

export default App
