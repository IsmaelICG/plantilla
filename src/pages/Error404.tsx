import { useNavigate } from "react-router-dom";

export const Error404 = () => {

  const navigate = useNavigate();

  return (
    <main className="bg-gray-100">
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="text-Stone-950 text-6xl font-bold">Error 404 ;(</div>
          <div className="text-gray-600 text-xl font-medium mb-6">
            Página no encontrada
          </div>
          <button
            onClick={() => navigate('/')}
            className="bg-stone-700 hover:bg-stone-950 text-white font-bold py-2 px-4 rounded"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    </main>
  );
};