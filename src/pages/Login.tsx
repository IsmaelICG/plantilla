import { useContext } from "react";
import { Header } from "../componentes/moleculis/Cabecera/Header.component";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/App.context";
import { useForm } from "../hooks/useForm.hook";

interface LoginResponse {
  user: user;
  token: string;
}

interface user {
  name: string;
  email: string;
  role: string;
  status: boolean;
  google: boolean;
  uid: string;
}

interface LoginDataI {
  email: string;
  password: string;
}

const initialLogInForm: LoginDataI = { email: "", password: "" };

export const Login = () => {
  const { setToken, setUser } = useContext(AppContext);

  const { formData, onChange } = useForm<LoginDataI>(initialLogInForm);

  const navigate = useNavigate();

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e?.preventDefault();

    try {
      const resp = await fetch(
        "https://noderestserver-production-241a.up.railway.app/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(formData),
        }
      );
      const data: LoginResponse = await resp.json();

      if (!!data.token) {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

    return (
      <main>
        <Header />
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
          <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Correo Electrónico:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Correo Electrónico"
                  onChange={onChange}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Contraseña:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Contraseña"
                  onChange={onChange}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-stone-800 hover:bg-stone-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={onSubmit}
                >
                  Iniciar Sesión
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => navigate('/registro')}
                >
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  };



export default Login;
