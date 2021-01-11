import { useState } from 'react';
import { Menu, Hamburger } from 'components';
import Logo from 'assets/AppLogo';
import { FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { routes } from 'config/routes/routes';
import { StyledWrapper } from './Navbar.styled';

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
      <NavLink to={home}>
        <Logo />
      </NavLink>
      <NavLink to={mainAuthRoute}>
        <FaUserCircle />
      </NavLink>
      <Menu handleMenu={{ openMenu, setOpenMenu }} />
    </StyledWrapper>
  );
};

export default Navbar;
