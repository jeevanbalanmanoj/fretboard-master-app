import React from "react";
import guitarImage from "../../images/guitar.png";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>
        Fretboard master{" "}
        <div className="guitarImage">
          <img style={guitarStyle} src={guitarImage} width="100px" />
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
  paddingTop: "20px",
};
const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

export default Header;
