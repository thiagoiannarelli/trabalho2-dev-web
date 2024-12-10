import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <div class="container">
        <div class="content">
          <h1 class="titulo">Quem somos?</h1>
          <div class="container-logo">
            <img
              class="logo-unifei"
              src="https://cdn.worldvectorlogo.com/logos/unifei-1.svg"
              alt="UNIFEI LOGO"
            />
          </div>
          <p>UNIFEI - Campus Itabira</p>
          <hr />
          <p>
            Somos estudantes de Engenharia da Computação da UNIFEI desenvolvendo
            um trabalho para a disciplina de Desenvolvimento de Sistemas Web com
            a tecnologia React
          </p>
        </div>
      </div>
    </>
  );
}
