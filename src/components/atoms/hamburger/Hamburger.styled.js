import styled from 'styled-components';

export const StyledBurger = styled.button`
  grid-column: span 1 / -1;
  grid-row: 1 / span 1;
  place-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 64px;
  height: 64px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 999;
  &:focus {
    outline: none;
  }
  div {
    width: 100%;
    height: 4px;
    background: black;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
