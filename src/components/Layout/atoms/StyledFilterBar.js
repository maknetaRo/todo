import styled from 'styled-components';

export const StyledFilterBar = styled.div`
  background-color: ${(props) => props.theme.todosBg};
  max-width: 580px;
  width: 100%;
  margin: 1rem auto;
  margin-top: -1rem;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  line-height: 1.75;
  border-bottom: 1px solid rgba(119, 122, 146, 0.3);
  transition: all ${(props) => props.theme.transitionTime};
  cursor: pointer;
  font-size: 0.85rem;
  max-width: 580px;
  width: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  line-height: 2.5;
`;
