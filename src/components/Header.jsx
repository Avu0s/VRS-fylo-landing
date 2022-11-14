import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="Fylo logo" />
        </div>
        <ul>
          <li>Features</li>
          <li>Team</li>
          <li>Sign In</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
