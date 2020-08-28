import React from "react";
import guitarImage from "../../images/guitar.png";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>
        Fretboard master{" "}
        <div className="guitarImage">
          <img style={guitarStyle} src={guitarImage} width="7%" />
        </div>
      </h1>
    </header>
  );
}
const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};
const guitarStyle = {
  padding: "10px",
};
const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

export default Header;
