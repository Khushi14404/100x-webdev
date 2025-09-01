import WebSocket, { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
// wss.on("connection", function connection(ws) {
//   console.log("user connected!");
//   setInterval(() => {
//     ws.send("Current price of solana is " + Math.random());
//   }, 10000);
//   ws.on("message", (e) => {
//     console.log(e.toString());
//   });
// });
wss.on("connection", function (socket) {
    socket.on("message", function (message) {
        if (message.toString() === "ping") {
            socket.send("pong");
        }
    });
});
//# sourceMappingURL=index.js.map