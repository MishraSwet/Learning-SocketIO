import { createServer } from "http";
import { Server } from "socket.io";

//create HTTP Server
//create new instance of a socket server called io and pass the created http server as param
//when a connection to the instance io is registered it returns an object we named it as socket
//socket listens to events and has a callback function to perform operations
//io handles the entire server consisting of all the socket connections from the clients as it is the main socket io server instance
//socket handles each individual connection between a specific client and the server when a client connected a new socket is created to connect it with the server and this socket object manages that socket
//io is used for overall management of the sockets their connections,events and broadcasting to all clients through the sockets
//socket on the other hand will be responsible for events/messages as well as lifecycle events like connections and disconnections
//to use import syntax add type:module to the pkg.json file

const httpServer = createServer();
const io = new Server(httpServer);

io.on("connection", (socket) => {
    console.log('New Client Connected');

    socket.on("message", (message) => {
        io.emit('message', message);
    });

    socket.on("disconnect", () => {
        console.log('Client Disconnected')
    });
});




httpServer.listen(3000, () => {
    console.log("Server Started on PORT 3000")
});