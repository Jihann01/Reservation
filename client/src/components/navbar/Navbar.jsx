import "./navbar.css";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "gray", textDecoration: "none" }}>
        <span className="logo"><FontAwesomeIcon icon={faHotel} /> J-Reserv</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton">Registrer</button>
            <button className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
