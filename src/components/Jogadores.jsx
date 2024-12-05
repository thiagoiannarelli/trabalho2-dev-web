import React, { useEffect, useState } from "react";
import "./Jogadores.css"; // Arquivo CSS com o estilo
import EditJogadores from "./EditJogadores";

export default function Jogadores() {
  const [jogadores, setJogadores] = useState([]);

  useEffect(() => {
    fetch("https://back-end-aula-web-eight.vercel.app/usuarios")
      .then((resp) => resp.json())
      .then((data) => setJogadores(data));
  }, []);

  return (
    <div class="container">
      <div class="content">
        <h1 class="titulo">Lista Melhores Jogadores</h1>
        <table class="tabela">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Clube</th>
              <th>Nº Camisa</th>
              <th>Idade</th>
            </tr>
          </thead>
          <tbody>
            {jogadores.map((jogador) => (
              <tr key={jogador.id}>
                <td>{jogador.nome}</td>
                <td>{jogador.email}</td>
                <td>{jogador.peso}</td>
                <td>{jogador.altura}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
