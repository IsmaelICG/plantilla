import { Header } from "./componentes/moleculis/Cabecera/Header.component";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  return (
    <main>
      <Header />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:ml-20">
          <p className="text-4xl md:text-7xl mt-10 md:mt-20">Ismael Corrales</p>
          <br />
          <p className="text-2xl md:text-3xl mt-6 md:mt-10">
            ¡Bienvenido a mi portfolio!
          </p>
          <br />
          <p className="text-xl md:text-2xl">
            Aquí encontrarás un vistazo rápido a mi experiencia y habilidades en
            el mundo de la programación. Soy un apasionado desarrollador de
            software, siempre en busca de soluciones innovadoras y eficientes
            para los desafíos tecnológicos.
          </p>
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <img
            src="assets/img/3067287.png"
            alt="Computer"
            className="h-64 md:h-80 w-64 md:w-80 mt-10 md:mt-20 mr-10 md:mr-20"
          ></img>
        </div>
      </div>
      <div
        id="Trabajos"
        className="flex justify-center mt-10 md:mt-20 text-4xl md:text-5xl"
      >
        <h1>Trabajos</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-10 md:mt-20 mx-5 md:mx-20">
        <div onClick={() => navigate("/upss")} className="text-center">
          <img src="assets/img/1HTML.png" alt="HTML"></img>
          <h1 className="mt-1 text-xl md:text-3xl font-bold">HTML</h1>
        </div>
        <div onClick={() => navigate("/upss")} className="text-center">
          <img src="assets/img/2JAVA.png" alt="Java"></img>
          <h1 className="mt-1 text-xl md:text-3xl font-bold">Java</h1>
        </div>
        <div onClick={() => navigate("/upss")} className="text-center">
          <img src="assets/img/3SQL.png" alt="SQL"></img>
          <h1 className="mt-1 text-xl md:text-3xl font-bold">SQL</h1>
        </div>
      </div>
    </main>
  );
};

export default App;
