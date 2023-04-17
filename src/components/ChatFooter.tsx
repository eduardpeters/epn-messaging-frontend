import { useState } from 'react';
import { Socket } from 'socket.io-client';
import '../styles/ChatFooter.css';

interface ChatFooterProps {
    socket: Socket;
}

const ChatFooter = ({ socket }: ChatFooterProps) => {
    const [message, setMessage] = useState('');

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.length > 0 && localStorage.getItem('userName')) {
            socket.emit('message', {
                text: message,
                name: localStorage.getItem('userName'),
                id: `${socket.id}${Math.random()}`,
                socketID: socket.id,
            });
        }
        setMessage('');
    };
    return (
        <div className="chat__footer">
            <form className="form" onSubmit={handleSendMessage}>
                <input
                    type="text"
                    placeholder="Write message"
                    className="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className="chat__button-send">SEND</button>
            </form>
        </div>
    );
};

export default ChatFooter;