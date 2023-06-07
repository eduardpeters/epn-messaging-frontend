import { useEffect, useRef, useState } from 'react';
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
    const [typingStatus, setTypingStatus] = useState('');
    const lastMessageRef = useRef<HTMLDivElement>(null);
    const userName = localStorage.getItem('userName');

    useEffect(() => {
        socket.connect();
        return () => {
            socket.disconnect();
        };
    }, []);

    useEffect(() => {
        const emitNewUser = () => {
            socket.emit('newUser', { username: userName, socketID: socket.id });
        }
        socket.on('connect', emitNewUser);
        return () => {
            socket.off('connect', emitNewUser);
        }
    }, [socket]);

    useEffect(() => {
        const handleTypingResponse = (data: string) => {
            setTypingStatus(data);
        }
        socket.on('typingResponse', handleTypingResponse);
        return () => {
            socket.off('typingResponse', handleTypingResponse);
        };
    });

    useEffect(() => {
        const handleMessageResponse = (data: MessageData) => {
            setMessages([...messages, data]);
        }

        socket.on('messageResponse', handleMessageResponse);
        return () => {
            socket.off('messageResponse', handleMessageResponse);
        };
    }, [messages]);

    useEffect(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="chat">
            <ChatBar socket={socket} />
            <div className="chat__main">
                <ChatBody 
                    messages={messages}
                    typingStatus={typingStatus}
                    lastMessageRef={lastMessageRef}
                />
                <ChatFooter socket={socket} />
            </div>
        </div>
    );
};

export default ChatPage;