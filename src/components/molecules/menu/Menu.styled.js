import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledWrapper = styled.ul`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? '0' : '100%')};
  transition: all 300ms ease-in-out;
  width: 100vw;
  height: 100%;
  background-color: ${({ theme }) => theme.white};
  /* 96px include navbar */
  padding: 96px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  li {
    width: 100%;
  }
`;
export const StyledNavlink = styled(NavLink)`
  display: block;
  padding: 16px;
  font-size: 32px;
  text-decoration: none;
  text-align: center;
`;
