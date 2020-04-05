import React from 'react';

import { StyledForm, StyledInput, SendButton } from './input.styles';

const Input = ({ setMessage, sendMessage, message }) => {
  const handleChange = (e) => setMessage(e.target.value);

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      e.preventDefault();
      sendMessage(e);
    }
  }
  
  const handleClick = (e) => sendMessage(e);

  return (
    <StyledForm>
      <StyledInput
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <SendButton onClick={handleClick}>
        Send
      </SendButton>
    </StyledForm>
  )
}

export default Input;
