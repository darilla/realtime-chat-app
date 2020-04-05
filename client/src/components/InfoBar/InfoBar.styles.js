import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: #0090C1;
  border-radius: 20px 20px 0 0;
  color: #FFF;
  display: flex;
  font-family: 'PT Serif', serif;
  height: 60px;
  justify-content: space-between;
  padding: 0 20px 0 10px;
  
  svg {
    fill: #FFF;
    height: 15px;
    width: 15px;
  }
`;

export const RoomContainer = styled.div`
  align-items: center;
  display: flex;
  width: 200px;

  svg {
    height: 20px;
    margin-left: 10px;
    width: 20px;
  }
`;

export const Number = styled.span`
  display: inline-block;
  margin-left: 5px;
`;
