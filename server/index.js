const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');

const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require('./users');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Runs when there is a connection with FE.
// Specific client instance of the socket.
io.on('connection', (socket) => {
  console.log('We have a new connection !!');

  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) {
      return callback(error);
    }

    // Handle admin generated messages. Emit event from BE to FE.
    socket.emit('message', { user: 'admin', text: `${user.name} welcome to the room ${user.room}`});

    // Will send a message to everyone but that specific user. Let other users knows that a new user has joined.
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined`});

    socket.join(user.room);

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)})

    // Callback at the frontend that will be called every time a user joins a chat.
    callback();
  });

  // handle user generated messages.
  // Expect event from the BE.
  socket.on('sendMessage', (message, callback) => {
    //That socket is a specific client instance.
    const user = getUser(socket.id);

    // Sends messages to the server.
    io.to(user.room).emit('message', { user: user.name, text: message });
    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left`})
    }
    console.log('User had left.')
  });;
});

app.use(router);
app.use(cors());

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
