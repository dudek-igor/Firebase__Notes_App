import { StyledBurger } from './Hamburger.styled';

const Hamburger = ({ handleMenu: { openMenu, setOpenMenu } }) => {
  return (
    <StyledBurger open={openMenu} onClick={() => setOpenMenu(!openMenu)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Hamburger;
