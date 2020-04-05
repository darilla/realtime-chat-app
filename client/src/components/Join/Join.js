import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, NameInput, RoomInput, Button, Wrapper, Heading } from './Join.styles';

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
        <Heading>Join</Heading>
        <div><NameInput placeholder='Name' type="text" onChange={handleSetName}/></div>
        <div><RoomInput placeholder='Room' type="text" onChange={handleSetRoom}/></div>
        {/* You can pass parameters by using `?` mark */}
        <Link onClick={handleSignIn} to={`/chat?name=${name}&room=${room}`}>
          <Button type="submit">Sign In</Button>
        </Link>
      </Container>
    </Wrapper>
  );
}

export default Joint;
