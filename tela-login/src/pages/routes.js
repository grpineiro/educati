import { Routes, Route, useRoutes } from "react-router-dom"

import Login from "./Login"
import Cadastro from "./Cadastro/cadastro"
import Sobre from "./Sobre/sobre"
import Perfil from "./Perfil/perfil"
import Home from "./Home/home"

import Memoria from "./Games/Memory_Game/jogoMemoria"
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
      <Route path="/games/memoria" element={<Memoria />}/>
      <Route path="/games/velha" element={<Velha />}/>
    </Routes>
  )

  // return routes;
}

export default Rotas;
