import styled from 'styled-components';

const HeaderWrapper = styled.div`
  margin: 26px 0px;
  padding: 32px 12px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(25, 135, 84, 0.25);
  background-color: ${props => props.theme.bsGreen};
  color: white;
`;

const Title = styled.h1`
  margin-bottom: 30px;
  text-align: center;
`;

const PageName = styled.span`
  font-weight: 900;
`;

const PageDescription = styled.div`
  margin-bottom: 30px;
  padding: 12px;
  border: 1px solid white;
  border-radius: 8px;
  & > p {
    text-align: center;
  }
`;

const ApiLink = styled.a`
  color: white;
`;
export { HeaderWrapper, Title, PageName, PageDescription, ApiLink };
