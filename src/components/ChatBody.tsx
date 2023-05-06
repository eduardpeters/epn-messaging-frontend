import { useNavigate } from 'react-router-dom';
import '../styles/ChatBody.css';
import { MessageData } from '../epntypes';

interface ChatBodyProps {
    messages: MessageData[];
    lastMessageRef: React.RefObject<HTMLDivElement>;
}

const ChatBody = ({ messages, lastMessageRef }: ChatBodyProps) => {
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

                {/*This is triggered when a user is typing*/}
                <div className="message__status">
                    <p>Someone is typing...</p>
                </div>
                <div ref={lastMessageRef} />
            </div>
        </>
    );
};

export default ChatBody;