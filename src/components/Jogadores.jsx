import React, { useEffect, useState } from "react";

export default function Jogadores() {
  const [jogador, setJogador] = useState([]);

  useEffect(() => {
    console.log("REACT REATIVO");
    fetch("https://back-end-aula-web-eight.vercel.app/usuarios")
      .then((resp) => resp.json())
      .then((resp) => setJogador(resp));
  });

  return (
    <div>
      <h1>Raquel eu te amo</h1>
      {jogador.map(
        (
          jogador //usamos o ".map" para fazer um for no array
        ) => (
          <p key={jogador.id}>{jogador.nome}</p>
        )
      )}
    </div>
  );
}
