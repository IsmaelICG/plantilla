import React, { useState } from 'react';
import Label from "./componentes/atoms/Label/Label.components";

function app() {
  const [euros, setEuros] = useState(0);
  const [dolares, setDolares] = useState(0);

  const convertirADolares = () => {
    const conversion = euros * 1.10;
    setDolares(conversion);
  };

  return (
    <div>
      <h1>Conversor de Euros a Dólares</h1>
      <Label
        type="number"
        onChange={(e) => setEuros(parseFloat(e.target.value))}
      />
      <button onClick={convertirADolares}>Convertir</button>
      <p>{euros} euros son {dolares} dólares.</p>
    </div>
  );
}

export default app;