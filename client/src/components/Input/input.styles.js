import styled from 'styled-components';

export const StyledForm = styled.form`
  border-top: 2px solid #FFF;
  display: flex;
  padding: 20px;
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input`
  border-radius: 40px;
  border: none;
  color: #046E8F;
  font-size: 1.1rem;
  padding: 20px 60px 20px 20px;
  width: 100%;

  :focus {
    outline-color: transparent;
  }
`;

export const SendButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 40px;
  text-decoration: none;
  top: 35px;

  svg {
    fill: #046E8F;
    height: 30px;
    width: 30px;
  }

  :focus {
    outline-color: transparent;

    svg {
      fill: #57B8FF;
    }
  }
`;
