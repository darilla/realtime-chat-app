import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, StyledInput, Button, Wrapper, Heading, StyledUserIcon } from './Join.styles';

const Joint = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const  handleSetName = (e) => {
    setName(e.target.value);
  };

  const  handleSetRoom = (e) => {
    setRoom(e.target.value);
  };

  const  handleSignIn = (e) => !name || !room ? e.preventDefault() : null;

  return (
    <Wrapper>
      <Container>
        <StyledUserIcon />
        <Heading>Sign In</Heading>
          <StyledInput placeholder='Name' type="text" onChange={handleSetName}/>
          <StyledInput placeholder='Room' type="text" onChange={handleSetRoom}/>
        {/* You can pass parameters by using `?` mark */}
        <Link onClick={handleSignIn} to={`/chat?name=${name}&room=${room}`}>
          <Button type="submit">Login</Button>
        </Link>
      </Container>
    </Wrapper>
  );
}

export default Joint;
