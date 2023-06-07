import { useState } from 'react';
import { Socket } from 'socket.io-client';
import type { MessageData } from '../epntypes';
import '../styles/ChatFooter.css';

interface ChatFooterProps {
    socket: Socket;
}

const ChatFooter = ({ socket }: ChatFooterProps) => {
    const [message, setMessage] = useState('');

    const handleTyping = () => {
        socket.emit('typing', `${localStorage.getItem('userName')} is typing`);
    }

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.length > 0 && localStorage.getItem('userName')) {
            const data: MessageData = {
                text: message,
                name: localStorage.getItem('userName') as string,
                id: `${socket.id}${Math.random()}`,
                socketID: socket.id,
            }
            socket.emit('message', data);
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
                    onKeyDown={handleTyping}
                />
                <button className="chat__button-send">SEND</button>
            </form>
        </div>
    );
};

export default ChatFooter;