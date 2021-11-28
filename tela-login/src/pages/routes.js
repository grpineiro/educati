import { Routes, Route, useRoutes } from "react-router-dom"

import Login from "./Login"
import Cadastro from "./Cadastro"
import Sobre from "./Sobre"
import Perfil from "./Perfil"
import Home from "./Home"

import Velha from "./Games/Velha";

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
      <Route path="/games/velha" element={<Velha />}/>
    </Routes>
  )

  // return routes;
}

export default Rotas;
