import React from 'react';

import { StyledForm, StyledInput, SendButton } from './input.styles';

import { ReactComponent as SendIcon} from '../../icons/paper-plane.svg';

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
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Type a message..."
        type="text"
        value={message}
      />
      <SendButton onClick={handleClick}>
        <SendIcon />
      </SendButton>
    </StyledForm>
  )
}

export default Input;
