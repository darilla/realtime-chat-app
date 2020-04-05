import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2979FF;
  border-radius: 4px 4px 0 0;
  height: 60px;
  padding: 0 5%;
  color: white;

  svg {
    fill: #FFF;
  }
`;

export const UsersOnline = styled.div`
`;


export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  svg {
    margin-right: 5%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
