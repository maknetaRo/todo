import styled from 'styled-components';

export const ToggleButton = styled.button`
  display: inline-block;
  padding: 1rem;
  padding-right: 0.5rem;
  margin: 0.5rem;
  color: white;
  background: transparent;
  transition: all ${(props) => props.theme.transitionTime};
  border: none;
  outline: none;
  cursor: pointer;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.theme.icon});
`;
