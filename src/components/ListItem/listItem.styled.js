import styled from 'styled-components';

const LiItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  padding: 13px 16px;
  background-color: ${props => props.theme.secondaryBgColor};
  border-radius: 8px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
const ContentWrapper = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
`;

const Circle = styled.span`
  min-width: 60px;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 500;
  color: white;

  background-color: ${props => props.theme.bsGreen};

  border-radius: 50px;
  margin-right: 20px;
`;

const ButtonGroup = styled.div`
  width: fit-content;
  margin-left: auto;
`;

export { LiItem, ContentWrapper, Circle, ButtonGroup };
