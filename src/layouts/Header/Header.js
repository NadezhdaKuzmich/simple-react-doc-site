import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <h1 className="brand">React documentation page</h1>
          <h3>Learn React</h3>
        </Link>
      </div>
    </header>
  );
};

export default Header;