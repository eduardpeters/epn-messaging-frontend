import { useEffect } from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import { Socket } from 'socket.io-client';
import '../styles/ChatPage.css';

interface ChatPageProps {
    socket: Socket;
}

const ChatPage = ({ socket }: ChatPageProps) => {

    useEffect(() => {
        socket.connect();

        return () => {
            socket.disconnect()
        };
    }, []);

    return (
        <div className="chat">
            <ChatBar />
            <div className="chat__main">
                <ChatBody />
                <ChatFooter socket={socket} />
            </div>
        </div>
    );
};

export default ChatPage;