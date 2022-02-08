function Navbar() {
  return (
    <nav>
      <img src={require("../photos/logo.png")} width="100px" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">The Good Parts</h4>
    </nav>
  );
}

export default Navbar;
