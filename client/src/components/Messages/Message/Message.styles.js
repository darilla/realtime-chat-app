import styled from 'styled-components';

export const UserName = styled.div`
  align-items: center;
  color: #FFF;
  display: flex;
  letter-spacing: 0.3px;
  margin-right: 10px;
`;

export const Admin = styled(UserName)`
  color: #F3F3F3;
  margin-left: 10px;
`;

export const MessageBox = styled.div`
  align-items: center;
  border-radius: 20px;
  display: flex;
  max-width: 80%;
  min-height: 45px;
  padding: 10px 15px;
`;

export const MessageText = styled.p`
  font-size: 1.1em;
  margin: 0;
  width: 100%;
  word-wrap: break-word;

  img {
    vertical-align: middle;
  }
`;

export const Container = styled.div`
  display: flex;
  font-family: 'PT Serif', serif;
  justify-content: ${({ isSentByCurrentUser }) => isSentByCurrentUser ? 'flex-end' : 'flex-start'};
  margin-top: 20px;
  padding: 0 20px;

  ${MessageBox} {
    background: ${({ isSentByCurrentUser }) => isSentByCurrentUser ? '#1DB4C9' : '#F4E0B5'};
    color: ${({ isSentByCurrentUser }) => isSentByCurrentUser ? '#FFF' : '#183446'};
  }
`;
