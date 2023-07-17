import { useState } from 'react'
import Button from "./componentes/atoms/Button/Button.components"
import Label from "./componentes/atoms/Label/Label.components";


function App() {

const [contador, setContador] = useState(0)

const handLeSuma = (num:number) => {
 setContador(contador+num)
}

const handLeResta = (num:number) => {
  setContador(contador-num)
 }

  return (
    <div className="felx w-screen h-screen justify-center items-center bg-slate-500">
    <div className=" text-center flex flex-col p-5 rounded bg-sky-500 w-full md:w-4/6">
      <h1>Formulario de Registro</h1>
      <h1>Contador: {contador}</h1>
      <Label text="Nombre"></Label>
      <Label text="Apellidos"></Label>
      <Label text="Correo Electronico"></Label>
      <Label text="Contraseña 1"></Label>
      <Label text="Constraseña 2"></Label>
      <br></br>
      <div>
      <Button type="submit" text="Enviar"></Button>
      <Button type="reset" text="Reset"></Button>
      <Button type="submit" text="+2" onClick={() => handLeSuma(2)}></Button>
      <Button type="reset" text="-2" onClick={() => handLeResta(2)}></Button>
      <Button type="submit" text="+1" onClick={() => setContador(contador + 1)}></Button>
      <Button type="reset" text="-1" onClick={() => setContador(contador - 1)}></Button>
      </div>
    </div>
    </div>
  )
}

export default App
