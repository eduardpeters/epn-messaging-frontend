import React from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

interface ChatPageProps {
    socket: any;
}

const ChatPage = ({ socket }: ChatPageProps) => {
    return (
        <div className="chat">
            <ChatBar />
            <div className="chat__main">
                <ChatBody />
                <ChatFooter />
            </div>
        </div>
    );
};

export default ChatPage;