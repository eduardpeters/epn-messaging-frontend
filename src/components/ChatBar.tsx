import { Socket } from 'socket.io-client';
import { useEffect, useState } from 'react';
import '../styles/ChatBar.css';

interface ChatBarProps {
    socket: Socket;
}

interface userData {
    userName: string;
    socketID: string;
}

const ChatBar = ({ socket }: ChatBarProps) => {
    const [users, setUsers] = useState<userData[]>([]);

    useEffect(() => {
        const handleNewUserResponse = (data: userData[]) => {
            setUsers(data);
        }

        socket.on('newUserResponse', handleNewUserResponse);
        return () => {
            socket.off('newUserResponse', handleNewUserResponse);
        }
    }, [socket, users]);

    return (
        <div className="chat__sidebar">
            <h2>Open Chat</h2>
            <div>
                <h4 className="chat__header">ACTIVE USERS</h4>
                <div className="chat__users">
                    {users.map((user) => (
                        <p key={user.socketID}>{user.userName}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChatBar;