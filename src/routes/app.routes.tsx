import { Route, Routes } from "react-router-dom";
import App from "../App";
import { Error404 } from "../pages/Error404";
import Registrarse from "../pages/Registrarse";
import Login from "../pages/Login";
import { Mantenimeinto } from "../pages/Mantenimeinto";






export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registrarse />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/upss" element={<Mantenimeinto />} />
    </Routes>
  );
};
