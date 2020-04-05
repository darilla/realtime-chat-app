import React from 'react';

import { ReactComponent as HomeIcon} from '../../icons/home.svg';
import { ReactComponent as CrossIcon} from '../../icons/cross.svg';
import { ReactComponent as UsersIcon} from '../../icons/users.svg';

import { Container, RoomContainer, Number, RightContainer } from './InfoBar.styles';

const InfoBar = ({ room, usersNumber }) => (
  <Container>
    <RoomContainer>
      <HomeIcon />
      <Number>{room}</Number>
      <UsersIcon />
      <Number>{usersNumber}</Number>
    </RoomContainer>
    <a href="/"><CrossIcon /></a>
  </Container>
);

export default InfoBar;
