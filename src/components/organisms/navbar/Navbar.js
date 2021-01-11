import { useState } from 'react';
import { Menu, Hamburger } from 'components';
import Logo from 'assets/AppLogo';
import { FaUserCircle } from 'react-icons/fa';
import { routes } from 'config/routes/routes';
import { StyledWrapper, StyledNavLink } from './Navbar.styled';

// App Routes
const {
  home,
  login: { mainAuthRoute },
} = routes;

// Main Component
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <StyledWrapper>
      <Hamburger handleMenu={{ openMenu, setOpenMenu }} />
      <StyledNavLink onClick={() => setOpenMenu(false)} to={home}>
        <Logo />
      </StyledNavLink>
      <StyledNavLink onClick={() => setOpenMenu(false)} to={mainAuthRoute}>
        <FaUserCircle />
      </StyledNavLink>
      <Menu handleMenu={{ openMenu, setOpenMenu }} />
    </StyledWrapper>
  );
};

export default Navbar;
