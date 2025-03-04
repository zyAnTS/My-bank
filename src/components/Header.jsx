import User from "./User";

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>My Bank</h1>
        <User name="Paul" />
      </div>
    </header>
  );
};

export default Header;
