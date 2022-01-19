import styled from 'styled-components';

export const ToggleButton = styled.button`
  display: flex;
  padding: 1rem 2rem;
  margin: 0.5rem;
  color: ${(props) => props.theme.toggleIcon};
  background: transparent;
  transition: all ${(props) => props.theme.transitionTime};
  border: none;
  outline: none;
  cursor: pointer;
`;
