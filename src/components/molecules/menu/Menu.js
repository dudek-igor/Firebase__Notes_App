import { routes } from 'config/routes/routes';
//Styles
import { StyledWrapper, StyledNavlink } from './Menu.styled';

// App routes
const {
  home,
  dashboard,
  login: { mainAuthRoute },
} = routes;

const Menu = ({ handleMenu: { openMenu, setOpenMenu } }) => {
  return (
    <StyledWrapper open={openMenu}>
      <li>
        <StyledNavlink onClick={() => setOpenMenu(false)} to={home}>
          Home
        </StyledNavlink>
      </li>
      <li>
        <StyledNavlink onClick={() => setOpenMenu(false)} to={mainAuthRoute}>
          Login
        </StyledNavlink>
      </li>
      <li>
        <StyledNavlink onClick={() => setOpenMenu(false)} to={dashboard}>
          User
        </StyledNavlink>
      </li>
    </StyledWrapper>
  );
};

export default Menu;
