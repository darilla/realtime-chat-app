import React from 'react';
import ReactEmoji from 'react-emoji';

import { Container, Admin, UserName, MessageBox, MessageText } from './Message.styles';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }
  
  return (
    isSentByCurrentUser
      ? (
        <Container  isSentByCurrentUser={isSentByCurrentUser}>
          <UserName>{trimmedName}</UserName>
          <MessageBox>
            <MessageText>{ReactEmoji.emojify(text)}</MessageText>
          </MessageBox>
        </Container>
        )
        : (
          <Container isSentByCurrentUser={isSentByCurrentUser}>
            <MessageBox>
              <MessageText>{ReactEmoji.emojify(text)}</MessageText>
            </MessageBox>
            <Admin>{user}</Admin>
          </Container>
        )
  );
}

export default Message;
