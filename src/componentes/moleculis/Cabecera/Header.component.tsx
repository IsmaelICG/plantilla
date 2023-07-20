import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
  const handleArea = (id: string) => {
    const areaDestino = document.getElementById(id);

    if (areaDestino) {
      areaDestino.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigate = useNavigate();

  return (
    <header className="bg-black py-4 px-8 flex justify-between items-center">
      <div>
        <button
          onClick={() => navigate("/")}
          className="text-white mr-4 underline"
        >
          INICIO
        </button>
        <button
          onClick={() => handleArea("Trabajos")}
          className="text-white mr-4 underline"
        >
          TRABAJOS
        </button>
      </div>
      <div>
        <button
          onClick={() => navigate("/login")}
          className="text-white mr-4 underline"
        >
          LOGIN
        </button>
        <button
          onClick={() => navigate("/registro")}
          className="text-white mr-1 underline"
        >
          REGISTRARSE
        </button>
      </div>
    </header>
  );
};
