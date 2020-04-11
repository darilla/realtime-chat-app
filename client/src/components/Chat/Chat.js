import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import InfoBar from '../InfoBar/InfoBar';
import MessageInput from '../Input/Input';
import Messages from '../Messages/Messages';

import { Container, Wrapper } from './Chat.styles';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  const ENDPOINT = 'https://connectivity-realtime-chat-app.herokuapp.com/';

  useEffect(
    () => {
      const { name, room } = queryString.parse(location.search);
      
      // Conntecting client websocket to the server.
      socket = io(ENDPOINT);

      setRoom(room);
      setName(name);

      // Emitter for the join.
      socket.emit('join', { name, room }, () => {
      });

      return () => {
        socket.emit('disconnect');
        socket.off();
      }
    },
    [ENDPOINT, location.search]
  );

  useEffect(
    () => {
      // Listening for the messages.
      socket.on('message', (message) => {
        setMessages([...messages, message]);
      });
    },
    [messages]
  );

  useEffect(
    () => {
      socket.on('roomData', (data) => {
        setUsers(data.users);
      });
    },

  );

 const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      // Emitting a message down to the websocket to the server.
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <Wrapper>
      <Container>
        <InfoBar room={room} usersNumber={users.length} />
        <Messages messages={messages} name={name} />
        <MessageInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </Container>
    </Wrapper>
  );
  
}
export default Chat;
