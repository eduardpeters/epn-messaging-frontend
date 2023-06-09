import { useNavigate } from 'react-router-dom';
import type { MessageData } from '../epntypes';
import '../styles/ChatBody.css';

interface ChatBodyProps {
    messages: MessageData[];
    typingStatus: string;
    lastMessageRef: React.RefObject<HTMLDivElement>;
}

const ChatBody = ({ messages, typingStatus, lastMessageRef }: ChatBodyProps) => {
    const navigate = useNavigate();

    const handleLeaveChat = () => {
        localStorage.removeItem('userName');
        navigate('/');
        window.location.reload();
    };

    return (
        <>
            <header className="chat__header">
                <p>The Chat Room</p>
                <button className="chat__button-leave" onClick={handleLeaveChat}>
                    LEAVE CHAT
                </button>
            </header>

            <div className="message__container">

                {messages.map(message =>
                    message.name === localStorage.getItem('userName') ?
                        (
                            <div className="message__chats" key={message.id}>
                                <p className="sender__name">You</p>
                                <div className="message__sender">
                                    <p>{message.text}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="message__chats" key={message.id}>
                                <p>{message.name}</p>
                                <div className="message__recipient">
                                    <p>{message.text}</p>
                                </div>
                            </div>
                        )
                )}
                <div className="message__status">
                    <p>{typingStatus}</p>
                </div>
                <div ref={lastMessageRef} />
            </div>
        </>
    );
};

export default ChatBody;