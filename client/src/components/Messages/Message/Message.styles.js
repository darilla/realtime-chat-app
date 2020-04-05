import styled from 'styled-components';

export const UserName = styled.div`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  letter-spacing: 0.3px;
  color: #828282;
  margin-right: 10px;
`;

export const Admin = styled(UserName)`
  color: #F3F3F3;
  margin-left: 10px;
`;

export const MessageBox = styled.div`
  background: #F3F3F3;
  border-radius: 20px;
  padding: 5px 20px;
  color: white;
  display: inline-block;
  max-width: 80%;
`;

export const MessageText = styled.p`
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;

  img {
    vertical-align: middle;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: ${({ isSentByCurrentUser }) => isSentByCurrentUser ? 'flex-end' : 'flex-start'};
  padding: 0 5%;
  margin-top: 3px;

  ${MessageBox} {
    background: ${({ isSentByCurrentUser }) => isSentByCurrentUser ? '#F3F3F3' : '#2979FF'};
    color: ${({ isSentByCurrentUser }) => isSentByCurrentUser ? '#828282' : 'black'};
  }
`;
