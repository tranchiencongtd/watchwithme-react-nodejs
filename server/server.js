const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
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
  console.log('A user join room');

  socket.on('joinRoom', ({ name, room, id, img }, callback) => {
    const { error, user } = addUser({idUser: socket.id, name, room, id, img });
    if(error) return callback(error);
    socket.join(user.room);
    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);
    if(user) {
      io.to(user.room).emit('message', { user: user.name, text: message, idMess: user.id, img: user.img });
    }
    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);
    if(user) {
      console.log("A user left room");
    }
  })
});


server.listen(PORT, () => console.log(`Server has started.`));