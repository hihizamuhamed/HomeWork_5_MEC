import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
     <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/photos">Photos</NavLink>
        </li>
      </ul>
  );
};

export default NavBar;
