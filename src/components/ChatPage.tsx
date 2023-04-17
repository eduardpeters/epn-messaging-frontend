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
        const handleMessageResponse = (data: MessageData) => {
            console.log("Received", data);
            setMessages([...messages, data]);
        } 

        socket.connect();
        socket.on('messageResponse', handleMessageResponse);

        return () => {
            socket.off('messageResponse', handleMessageResponse);
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