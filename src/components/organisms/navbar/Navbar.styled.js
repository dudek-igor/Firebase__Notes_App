import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledWrapper = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
`;

export const StyledNavLink = styled(NavLink)`
  z-index: 999;
  display: block;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 64px;
    height: auto;
    fill: ${({ theme }) => theme.black};
  }
`;
