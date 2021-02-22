const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server , {
  cors: {
    origin: '*',
  }
});

// Run when client connects
io.on('connection', (socket) => {
  
  socket.on('joinRoom', (hi) => {
    console.log(hi);
    // Welcome current user
    

    // Broadcast when a user connects
    

    // Send users and room info
    
  });

  // Listen for chatMessage
  

  // Runs when client disconnects
  socket.on('disconnect', () => {
    console.log('A user left room');
  });
});


server.listen(PORT, () => console.log(`Server has started.`));