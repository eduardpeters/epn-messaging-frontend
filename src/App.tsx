import { socket } from './socket';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

socket.connect();

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App
