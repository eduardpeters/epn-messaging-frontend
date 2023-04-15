import { io } from 'socket.io-client';
import './App.css';

const socket = io(import.meta.env.VITE_API_BASE_URL);

function App() {
    return (
        <div className="App">
            <h1>My first Vite App</h1>
        </div>
    );
}

export default App
