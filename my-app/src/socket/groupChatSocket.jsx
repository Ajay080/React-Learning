import { useState, useRef, useEffect } from "react"
import { io } from "socket.io-client";
const GCS = () => {
    const [message, setMessage] = useState("");
    const [serverResponse, setServerResponse] = useState("");
    const socketRef = useRef(null);


    const [userName, setUserName] = useState("");
    const [chatMessages, setChatMessages] = useState("");


    useEffect(() => {
        establishConnection();
        return () => {
            closeConnection();
        };
    }, [])

    const sendMessage = () => {
        if (socketRef.current && message.trim()) {
            socketRef.current.emit("clientMessage", message);
            setMessage("");
        }
    }

    const closeConnection = () => {
        if (socketRef.current) {
            socketRef.current.emit("clientDisconnect");
            socketRef.current.removeAllListeners();
            socketRef.current.disconnect();
            socketRef.current = null;
        }
    }

    const setupEventListeners = (socketReference) => {
        if (socketReference) {
            socketReference.on("serverDisconnect", (data) => {
                setServerResponse("socket disconnected with the data: " + data);
                socketRef.current = null;
            });

            socketReference.on("serverWelcome", (data) => {
                setServerResponse(data);
            });

            socketReference.on("serverMessage", (data) => {
                setServerResponse(data);
            });

            // roome events
            socketRef.current.on("serverJoinMessage",(data)=>{
                const roomMessagesDiv=document.getElementById("roomMessages");
                if(roomMessagesDiv){
                    const messageElement=document.createElement("p");
                    messageElement.textContent=data;
                    roomMessagesDiv.appendChild(messageElement);
                }
            })

            socketRef.current.on("serverExitMessage",(data)=>{
                const roomMessagesDiv=document.getElementById("roomMessages");
                if(roomMessagesDiv){
                    const messageElement=document.createElement("p");
                    messageElement.textContent=data;
                    roomMessagesDiv.appendChild(messageElement);
                }
            })

            socketRef.current.on("roomJoinedInfo",(data)=>{
                const roomMessagesDiv=document.getElementById("roomMessages");
                if(roomMessagesDiv){
                    const messageElement=document.createElement("p");
                    messageElement.textContent=`You have joined the room: ${data.roomName}. Active users: ${data.users.join(", ")}`;
                    roomMessagesDiv.appendChild(messageElement);
                }
            })


            socketRef.current.on("chatMessage",(data)=>{
                const chatDiv=document.querySelector(".chat"); // Changed from getElementById("roomMessages") to .chat
                console.log("data received from server: ", data);
                if(chatDiv){
                    const messageElement=document.createElement("p");
                    messageElement.textContent=data;
                    chatDiv.appendChild(messageElement);
                }
            })


            socketRef.current.on('disconnect', () => {
                console.log("Disconnected from server");
            });
        }
    }

    const establishConnection = () => {
        if (!socketRef.current) {
            socketRef.current = io("http://localhost:8080");
            setupEventListeners(socketRef.current);
        }
    }

    const joinRoom1 = () => {
        if (socketRef.current && userName.trim()) {
            socketRef.current.emit("joinRoom", { roomName: "room1", userName: userName });
        }
    }

    const joinRoom2 = () => {
        if (socketRef.current && userName.trim()) {
            socketRef.current.emit("joinRoom", { roomName: "room2", userName: userName });
        }
    }

    const leaveRoom = () => {
        if (socketRef.current) {
            socketRef.current.emit("leaveRoom", {room: "room1", userName: userName });
        }
    }

    const sendChatMessage=(roomName)=>{
        const chatInput=document.querySelector(".chat-input");
        console.log(chatInput, socketRef.current);
        if(socketRef.current && chatInput && chatInput.value.trim()){
            console.log("sending message to room: "+ roomName+" "+ chatInput.value);
        socketRef.current.emit("roomMessage", {room:roomName, message:chatInput.value, userName: userName});
            chatInput.value="";
        }
    }

    const handleSendMessage = (roomName) => {
        sendChatMessage(roomName);
    }

return (
    <>
        <h1>Group Chat</h1>
        <input
            placeholder="Type your message here..."
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
        <button onClick={establishConnection}>Connect</button>
        <button onClick={closeConnection}>Disconnect</button>
        <h2>Server Response: {serverResponse}</h2>


        <br></br>
        <input type="text" placeholde="write the username" value={userName} onChange={(e) => setUserName(e.target.value)} />
        <button onClick={joinRoom1}>Join Room 1</button>
        <button onClick={joinRoom2}>Join Room 2</button>
        <button onClick={leaveRoom}>Leave Room</button>

        <h2>Room Messages:</h2>
        <div id="roomMessages" style={{ height: "300px", overflowY: "scroll", border: "1px solid red" }}></div>

        <br></br>

        <div className="chat" style={{height:"300px", overflowY:"scroll", border:"1px solid white"}}></div>
        <input className="chat-input" type="text" placeholder="Type your message here..." style={{width:"80%"}} onChange={(e)=> setChatMessages(e.target.value)} />
        <button style={{width:"18%"}} onClick={() => handleSendMessage("room1")}>Send</button>
    </>
)
}

export default GCS;