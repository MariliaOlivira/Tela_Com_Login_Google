import React from "react";
import { AreaHeader } from "./styled";

function Header() {
  return (
    <AreaHeader>
      <div className="container">
        <div className="logo">
          <img src="https://img2.gratispng.com/20180529/vxe/kisspng-logo-anytime-parody-san-francisco-art-burger-logo-5b0cd97f5c2857.6788880515275687673775.jpg" alt="Logo" height='50'/>
        </div>
        <nav>
          <ul>
            <li> Ta perdido? </li>
            <li> Aperta aqui </li>
            <li> Sair </li>
          </ul>
        </nav>
      </div>
    </AreaHeader>
  );
}

export default Header;