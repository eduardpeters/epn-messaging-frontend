import { socket } from './socket';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import ChatPage from './components/ChatPage';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App
