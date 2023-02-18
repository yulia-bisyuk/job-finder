import styled from 'styled-components';

const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const ActionBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  text-align: center;
  letter-spacing: -0.5px;
  color: ${props => props.theme.mainTextColor};
  &:not(:last-child) {
    margin-right: 36px;
  }
`;

export { ActionsWrapper, ActionBtn };
