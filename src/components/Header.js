import { NavLink } from "react-router-dom";
import '../Header.css'

const Header = () => {
  return (
    <header>
      <nav>
      <ul className="ul">
          <li className="li">
            <NavLink to="/" className="link">
              Home
            </NavLink>
          </li>
          <li className="li">
            <NavLink to="/service" className="link">
              Service
            </NavLink>
          </li>
        
          <li>
            <NavLink to="/users" className="link">
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;




