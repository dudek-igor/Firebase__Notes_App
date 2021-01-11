import styled from 'styled-components';

export const StyledWrapper = styled.nav`
  /* background-color: red; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  a {
    z-index: 999;
    svg {
      width: 64px;
      height: 64px;
      fill: ${({ theme }) => theme.black};
    }
  }
`;
