import { useNavigate } from "react-router-dom";

export const Mantenimeinto = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-gray-100">
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            ¡Página en Mantenimiento!
          </h1>
          <p className="text-lg text-gray-600">
            Lamentamos los inconvenientes, pero estamos realizando algunas
            actualizaciones en el sitio.
          </p>
          <p className="text-lg text-gray-600">
            Volveremos pronto, ¡gracias por tu paciencia!
          </p>
          <br></br>
          <button
            onClick={() => navigate("/")}
            className="bg-stone-800 hover:bg-stone-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    </main>
  );
};
