
import { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';



const Socket = () => {
    const [message, setMessage] = useState("");
    const [serverResponse, setServerResponse] = useState("");
    const socketRef = useRef(null);
    const roomRef = useRef(null);

    useEffect(() => {
        // Create socket connection once
        socketRef.current = io("http://localhost:8080");

        // Listen for server messages
        socketRef.current.on("message", (data) => {
            setServerResponse(data);
        });

        // Clean up on unmount
        return () => {
            if (socketRef.current) {
                socketRef.current.removeAllListeners();
                socketRef.current.disconnect();
            }
        };
    }, []);

    const sendMessage = () => {
        if (socketRef.current) {
            socketRef.current.emit("message", message);
        }
    };

    const closeConnection = () => {
        if (socketRef.current) {
            // Remove all event listeners before disconnecting
            socketRef.current.removeAllListeners();
            socketRef.current.disconnect();
            socketRef.current = null;
        }
    }

    const connectSocket = () => {
        if (!socketRef.current) {
            socketRef.current = io("http://localhost:8080");
            
            // Set up event listeners only once
            socketRef.current.on("message", (data) => {
                setServerResponse(data);
            });

            // Listen for room events
            socketRef.current.on("joinedRoom", (data) => {
                setServerResponse(data);
            });

            socketRef.current.on("leaveRoom", (data) => {
                setServerResponse(data);
            });

            socketRef.current.on("roomMessage", (data) => {
                setServerResponse(data);
            });
        }
    }

    const joinRoom1 = () => {
        if (socketRef.current) {
            socketRef.current.emit("joinRoom", "room1"); // Ask server to join 'room1'
            socketRef.current.emit("roomMessage",{room:"room1", message:"Hello Room 1"});
            roomRef.current = "room1"; // Store current room
        }
    }

    const getOutfromRoom1 = () => {
        if (socketRef.current && roomRef.current) {
            socketRef.current.emit("leaveRoom", roomRef.current); // Ask server to leave current room
            roomRef.current = null; // Clear current room
        }
    }

    return (
        <>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={sendMessage}>Send Message</button>
            <br></br>
            <button onClick={closeConnection}> Close Connection</button>
            <button onClick={connectSocket}> Connect Socket</button>
            <button onClick={joinRoom1}> Join Room 1</button>
            <button onClick={getOutfromRoom1}> Get Out from Room 1</button>
            <h1>Message from server: {serverResponse}</h1>
        </>
    );
}

export default Socket;