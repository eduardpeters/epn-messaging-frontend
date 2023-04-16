import { useState } from 'react';
import '../styles/ChatFooter.css';

const ChatFooter = () => {
    const [message, setMessage] = useState('');

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ userName: localStorage.getItem('userName'), message });
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