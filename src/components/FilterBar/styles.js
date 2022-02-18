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
  box-shadow: 1px 3px 3px rgba(119, 122, 146, 0.3);
`;

export const StyledList = styled.ul`
  max-width: 580px;
  width: 100%;
  margin: -3.5rem auto 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 1px 3px 3px rgba(119, 122, 146, 0.3);
  padding: 0.25rem;
  padding-bottom: 0;
  background-color: ${(props) => props.theme.todosBg};
  transition: all ${(props) => props.theme.transitionTime};
`;
