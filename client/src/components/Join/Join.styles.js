import styled from 'styled-components';
import { ReactComponent as UserIcon} from '../../icons/user.svg';

export const Wrapper = styled.div`
  font-family: 'PT Serif', serif;
  align-items: center;
  background-color: #1fc8db;
  background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
  display: flex;
  height: 100vh;
  justify-content: center;
  text-align: center;
  width: 100vw;
`;

export const Container = styled.div`
  background: rgba(232, 232, 232, 0.3);
  border-radius: 30px;
  height: 50%;
  padding: 50px;
  width: 30%;
`;

export const StyledUserIcon = styled(UserIcon)`
  background: rgba(232, 232, 232, 0.3);
  border-radius: 50px;
  border: 2px solid #FFF;
  fill: #FFF !important;
  height: 100px;
  padding: 10px;
  width: 100px;
`;

export const Heading = styled.h1`
  border-bottom: 2px solid white;
  color: #FFF;
  font-size: 2.2em;
  margin-bottom: 15px;
  padding-bottom: 10px;
`;

export const StyledInput = styled.input`
  font-family: inherit;
  border-radius: 5px;
  border: none;
  color: #75959c;
  margin-top: 10px;
  outline: none;
  padding: 15px 20px;
  width: 100%;
`;

export const Button = styled.button`
  background: #2cb5e8;
  border-radius: 5px;
  border: none;
  color: #FFF !important;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 1rem;
  margin-top: 25px;
  outline: none;
  padding: 15px;
  width: 100%;

  :hover {
    background: #2ebad9;
  }

  :active {
    background: #169bb8;
  }
`;
