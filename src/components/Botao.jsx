import React from "react";
import { useState } from "react";

export default function Botao() {
  const [estado, setEstado] = useState("SP");
  const [resposta, setResposta] = useState();

  const consultar = () => {
    fetch("http://localhost:2000/lista", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ estado }),
    })
      .then((response) => response.json())
      .then((json) => {
        setResposta(json);
      });
  };

  return (
    <>
      <div>
        <select
          id="uf"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        >
          <option value="PA">Para</option>
          <option value="AM">Amazonas</option>
          <option value="RO">Rondônia</option>
          <option value="BA">Bahia</option>
          <option value="PE">Pernambuco</option>
          <option value="CE">Ceará</option>
          <option value="SP">São Paulo</option>
          <option value="MG">Minas Gerais</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="PR">Paraná</option>
          <option value="SC">Santa Catarina</option>
          <option value="PI">Piauí</option>
          <option value="RS">Rio Grande do Sul</option>
        </select>

        <button onClick={() => consultar()}>Consultar</button>
      </div>
      <div>{resposta && resposta.mensagem}</div>
    </>
  );
}
