import React from "react";
import Mediacard from "./mediacard";
import logo from "../images/logo.svg";
import filled from "../images/heartFilled.svg";
import empty from "../images/heart-regular.svg";

class MediaList extends React.Component {
  render() {
    return (
      <ul>
        <li className="App-liElement" id="1">
          <Mediacard
            name="Marta Rey"
            date="28 de Agosto de 2020"
            logo={logo}
            heart={filled}
            text="Holi holi"
            number="30"
          />
        </li>
        <li className="App-liElement" id="2">
          <Mediacard
            name="Lola Flores"
            date="12 de Febrero de 2005"
            logo={logo}
            heart={empty}
            text="Hola"
            number="47"
          />
        </li>
        <li className="App-liElement" id="3">
          <Mediacard
            name="Ana Obregón"
            date="03 de Abril de 2015"
            logo={logo}
            heart={empty}
            text="Soy súper fantástica"
            number="20"
          />
        </li>
      </ul>
    );
  }
}

export default MediaList;
