import { createServer } from "http";
import { Server } from "socket.io";

//create HTTP Server
//create new instance of a socket server called io and pass the created http server as param
//when a connection to the instance io is registered it returns an object we named it as socket
//socket listens to events and has a callback function to perform operations


const httpServer = createServer();
const io = new Server(httpServer);

io.on("connection", (socket) => {
    console.log('New Client Connected');

    socket.on("message", (message) => {
        io.emit('message', message);
    })
})

socket.on("disconnect", () => {
    console.log('Client Disconnected')
})



httpServer.listen(3000, () => {
    console.log("Server Started on PORT 3000")
});