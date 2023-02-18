import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 24px 12px;
  @media screen and (min-width: 768px) {
    width: 700px;
  }
`;

const PageTitle = styled.h1`
  margin-bottom: 18px;
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  letter-spacing: 0.4px;
  color: ${props => props.theme.titleColor};
`;

const Divider = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  margin-bottom: 24px;
  background-color: ${props => props.theme.bsGreen};
`;

const JobTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.25;
  letter-spacing: -0.75px;

  color: ${props => props.theme.titleColor};
`;

const CompanyName = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  text-align: center;
  letter-spacing: -0.5px;
  color: ${props => props.theme.mainTextColor};
`;

const JobDescription = styled.div`
  margin-top: 32px;
  color: ${props => props.theme.mainTextColor};
`;

const LocationTitle = styled.h3`
  font-weight: 700;
  color: ${props => props.theme.titleColor};
`;

export {
  PageWrapper,
  Divider,
  PageTitle,
  JobTitle,
  CompanyName,
  JobDescription,
  LocationTitle,
};
