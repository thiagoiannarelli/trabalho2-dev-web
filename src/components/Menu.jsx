import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/jogadores">Jogadores</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
