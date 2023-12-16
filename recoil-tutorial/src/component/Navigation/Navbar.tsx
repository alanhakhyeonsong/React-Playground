import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from 'antd';

export default function Navbar() {
  return (
    <Layout.Header>
      <Link to={'/'} aria-label='홈으로 이동'>
        Home
      </Link>
      <Nav>
        <Link to={'/'} aria-label='홈으로 이동'>Home</Link>
        <Link to={'/cart'} aria-label='장바구니로 이동'>장바구니</Link>
      </Nav>
    </Layout.Header>
  );
}

const Nav = styled.nav`
  max-width: 1024px;
  display: flex;
  justify-content: right;
  gap: 36px;
  align-items: center;
  > span {
    font-weight: bold;
    cursor: pointer;
  }
`;