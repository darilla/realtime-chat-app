import React from 'react';

import Message from './Message/Message';

import { StyledScrollToBottom } from './Messages.styles';

const Messages = ({ messages, name }) => (
  <StyledScrollToBottom className="messages">
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name}/>
      </div>
    ))}
  </StyledScrollToBottom>
);

export default Messages;
