import styled from 'styled-components';

export const StyledListElem = styled.li`
  background-color: ${(props) => props.theme.todosBg};
  max-width: 580px;
  width: 100%;
  margin: 1rem auto;
  padding: 0.75rem 0.5rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  line-height: 1.75;
  border-bottom: 1px solid rgba(119, 122, 146, 0.3);
  transition: all ${(props) => props.theme.transitionTime};
  cursor: pointer;
`;

export const GroupElem = styled.div`
  display: flex;
`;

export const SecondElem = styled.div`
  margin-left: 0.5rem;
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
