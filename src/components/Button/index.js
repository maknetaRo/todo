import styled from 'styled-components';

export const Circle = styled.div`
  background: transparent;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid hsl(234, 39%, 85%);
  padding: 0.75rem;
  margin: 0 0.5rem;
`;

export const Button = styled.button`
  display: inline-block;
  padding-right: 0.5rem;
  margin: 0 0.5rem;
  color: ${(props) => props.theme.text};
  background: transparent;
  transition: all ${(props) => props.theme.transitionTime};
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 30px;
`;

export const ToggleButton = styled(Button)`
  padding: 1rem;
  padding-right: 0.65rem;
  margin: 0.5rem;
  color: white;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.theme.icon});
`;

export const StyledFilterBtn = styled(Button)`
  font-size: 0.85rem;
`;
