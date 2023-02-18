// import { Container } from './layout.styled';
import Container from 'react-bootstrap/Container';

const Layout = ({ children }) => {
  return (
    <section>
      <Container fluid="md">{children}</Container>
    </section>
  );
};
export default Layout;
