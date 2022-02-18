import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  max-width: 1440px;
  height: 300px;
  margin: 0 auto;
  color: white;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.theme.bgDesktop});
  @media (max-width: 376px) {
    background-image: url(${(props) => props.theme.bgMobile});
  }
`;

export const StyledHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 590px;
  margin: 0 auto;
  padding-top: 70px;
  align-items: center;
  font-size: 2rem;
`;

export const Heading = styled.h1`
  letter-spacing: 10px;
  font-weight: 700;
  font-size: 2.75rem;
`;
