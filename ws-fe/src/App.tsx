import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef();
  function sendMessage() {
    if (!socket) {
      return;
    }
    const msg = inputRef.current.value;
    //@ts-ignore
    socket.send(msg);
  }
  useEffect(() => {
    const ws = new WebSocket("ws://127.0.0.1:8080");

    setSocket(ws);

    ws.onmessage = (e) => {
      alert(e.data);
    };
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Message..."></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
