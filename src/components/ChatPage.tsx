import { useEffect, useState } from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import { Socket } from 'socket.io-client';
import type { MessageData } from '../epntypes';
import '../styles/ChatPage.css';

interface ChatPageProps {
    socket: Socket;
}

const ChatPage = ({ socket }: ChatPageProps) => {
    const [messages, setMessages] = useState<MessageData[]>([]);

    useEffect(() => {
        socket.connect();
        return () => {
            socket.disconnect();
        };
    }, []);

    useEffect(() => {
        const handleMessageResponse = (data: MessageData) => {
            setMessages([...messages, data]);
        }

        socket.on('messageResponse', handleMessageResponse);
        return () => {
            socket.off('messageResponse', handleMessageResponse);
        };
    }, [messages]);

    return (
        <div className="chat">
            <ChatBar />
            <div className="chat__main">
                <ChatBody messages={messages} />
                <ChatFooter socket={socket} />
            </div>
        </div>
    );
};

export default ChatPage;