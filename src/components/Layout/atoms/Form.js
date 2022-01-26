import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  max-width: 580px;
  width: 100%;
  background-color: ${(props) => props.theme.todosBg};
  margin: 1.5rem auto;
  padding: 0.75rem;
  border-radius: 5px;
  transition: all ${(props) => props.theme.transitionTime};
`;

export const StyledInput = styled.input`
  background-color: ${(props) => props.theme.todosBg};
  font-size: 1.2rem;
  line-height: 1.75;
  width: 100%;
  outline: transparent;
  border-color: transparent;
  letter-spacing: 1px;
  font-family: 'Josefin Sans', sans-serif;
  margin: 0 0.5rem -0.5rem;
  color: ${(props) => props.theme.inputText};
  transition: all ${(props) => props.theme.transitionTime};
  &::placeholder {
    color: ${(props) => props.theme.inputText};
  }
`;
