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
  socket.on('joinRoom', ({ name, room, id, img }, callback) => {
    const { error, user } = addUser({idUser: socket.id, name, room, id, img });
    if(error) return callback(error);

    socket.broadcast.to(user.room).emit('message', { user: 'Admin', text: `${user.name} đã tham gia phòng chat`, idMess: 'admin', img:'https://img.wattpad.com/7fecaf12d00a87fe3105d7bc4d3c96a4c3284263/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f78646a764143756e5670725568413d3d2d3737303935373234372e313562613039326635366632323863663734333139323733393033342e6a7067?s=fit&w=720&h=720'});

    socket.join(user.room);
    callback();

    socket.on('disconnect', () => {
      const user = removeUser(socket.id);
      
      if(user) {
        io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} đã rời phòng chat`, idMess: 'admin', img:'https://img.wattpad.com/7fecaf12d00a87fe3105d7bc4d3c96a4c3284263/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f78646a764143756e5670725568413d3d2d3737303935373234372e313562613039326635366632323863663734333139323733393033342e6a7067?s=fit&w=720&h=720'});
      }
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);
    if(user) {
      io.to(user.room).emit('message', { user: user.name, text: message, idMess: user.id, img: user.img });
    }
    callback();
  });
  })
});


server.listen(PORT, () => console.log(`Server has started.`));