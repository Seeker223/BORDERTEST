import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TopStories } from './TopStories';

const Shell = styled.main`
  max-width: 1160px;
  margin: 20px auto;
  padding: 0 16px 24px;
  display: grid;
  gap: 14px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const Brand = styled(Link)`
  font-weight: 700;
  letter-spacing: 0.4px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const NavItem = styled(Link)`
  color: ${({ theme }) => theme.colors.mutetext};
  font-size: 0.9rem;
`;

const MetaBlock = styled.div`
  h1 {
    margin: 0;
    font-size: 1.3rem;
  }

  p {
    margin: 6px 0 0;
    color: ${({ theme }) => theme.colors.mutetext};
  }
`;

export function AppFrame({ title, subtitle, topItems, children }) {
  return (
    <Shell>
      <Header>
        <Brand to="/home">hender xender</Brand>
        <Nav>
          <NavItem to="/home">home</NavItem>
          <NavItem to="/video">video</NavItem>
          <NavItem to="/user-profile">profile</NavItem>
          <NavItem to="/notify">notify</NavItem>
          <NavItem to="/msg">msg</NavItem>
        </Nav>
      </Header>

      {title ? (
        <MetaBlock>
          <h1>{title}</h1>
          {subtitle ? <p>{subtitle}</p> : null}
        </MetaBlock>
      ) : null}

      {topItems ? <TopStories items={topItems} /> : null}

      {children}
    </Shell>
  );
}
