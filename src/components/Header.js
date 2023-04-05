import React from "react";
import teaImgHeader from "./../img/loose-tea.jpg"

export default function Header() {
  return (
    <React.Fragment>
      <h1>Ea-nasir's Tea Pot</h1>
      <h2>Loose leaf tea sold by the kettle-full.</h2>
      <img src={teaImgHeader} alt="loose leaf tea on spoons" width="400px" object-fit="none" />
    </React.Fragment>
  );
}