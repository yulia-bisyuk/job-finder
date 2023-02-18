import styled from 'styled-components';

const List = styled.ul`
  margin-bottom: 26px;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 49%);
    grid-auto-rows: auto;
    gap: 16px;
    justify-content: center;
  }
`;

export { List };
