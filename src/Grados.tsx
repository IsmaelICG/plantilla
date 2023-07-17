import React, { useState } from 'react';
import Label from "./componentes/atoms/Label/Label.components";

function app() {
  const [euros, setEuros] = useState(0);
  const [dolares, setDolares] = useState(0);

  const convertirADolares = () => {
    const conversion = (euros * 9/5) + 32;
    setDolares(conversion);
  };

  return (
    <div className="felx w-screen h-screen justify-center items-center bg-slate-500">
    <div className=" text-center flex flex-col p-5 rounded bg-sky-500 w-full md:w-4/6">
      <h1>Conversor de grados Fahrenheit a grados Centígrado</h1>
      <Label
        type="number"
        onChange={(e) => setEuros(parseFloat(e.target.value))}
      />
      <button onClick={convertirADolares} className='px-4 bg-lime-500 rounded mx-4'>Convertir</button>
      <p>{euros} grados Centígrados son {dolares} grados Fahrenheit.</p>
    </div>
    </div>
  );
}

export default app;