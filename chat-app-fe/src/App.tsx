import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    // Connect to WebSocket server
    ws.current = new WebSocket("ws://localhost:8080");

    ws.current.onopen = () => {
      // Join room1 automatically
      ws.current?.send(
        JSON.stringify({
          type: "join",
          payload: { roomId: "room1" },
        })
      );
    };

    ws.current.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };

    return () => {
      ws.current?.close();
    };
  }, []);

  const sendMessage = () => {
    if (input.trim() && ws.current) {
      ws.current.send(
        JSON.stringify({
          type: "chat",
          payload: { message: input },
        })
      );
      setInput("");
    }
  };

  return (
    <div className="h-screen bg-black flex flex-col">
      {/* Chat messages area */}
      <div className="flex-1 overflow-y-auto p-4 text-white space-y-2">
        {messages.map((message, idx) => (
          <div key={idx} className="flex justify-start">
            <div className="max-w-xs px-4 py-2 rounded-lg bg-gray-800 text-white">
              {message}
            </div>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="w-full bg-gray-900 flex p-3 border-t border-gray-700">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 rounded-lg px-4 py-2 outline-none bg-gray-800 text-white placeholder-gray-400"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="ml-3 px-5 py-2 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
