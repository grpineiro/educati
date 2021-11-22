import { Routes, Route, useRoutes } from "react-router-dom"

import Login from "./Login"
import Cadastro from "./Cadastro/cadastro"
import Sobre from "./Sobre/Sobre"
import Perfil from "./Perfil/Perfil"
import Home from "./Home/Home"

const Rotas = () => {
  // const routes = useRoutes([
  //   {path: "/", component: Login, index: true},
  //   {path: "/sobre", component: Sobre},
  //   {path: "/cadastro", component: Cadastro}
  // ])

  return (
    <Routes>
      <Route index path="/" element={<Login />} />
      <Route path="/cadastrar" element={<Cadastro />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/home" element={<Home />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  )

  // return routes;
}

export default Rotas;
