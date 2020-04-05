import React from 'react';

import { ReactComponent as StatusIcon} from '../../icons/happy.svg';
import { ReactComponent as CrossIcon} from '../../icons/cross.svg';

import { Container, UsersOnline, LeftContainer, RightContainer } from './InfoBar.styles';

const InfoBar = ({ room, usersNumber }) => (
  <Container>
    <LeftContainer>
      <StatusIcon widht="15" height="15"/>
      <h3>{room}</h3>
    </LeftContainer>
    <UsersOnline>Users online: {usersNumber}</UsersOnline>
    <RightContainer>
      <a href="/"><CrossIcon widht="10" height="10"/></a>
    </RightContainer>
  </Container>
);

export default InfoBar;
