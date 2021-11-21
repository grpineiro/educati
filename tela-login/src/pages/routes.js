import {Routes, Route, useRoutes} from "react-router-dom"

import Login from "./Login"
import Sobre from "./Sobre"
import Perfil from "./Perfil"

const Rotas = () => {
  // const routes = useRoutes([
  //   {path: "/", component: Login, index: true},
  //   {path: "/sobre", component: Sobre},
  //   {path: "/cadastro", component: Cadastro}
  // ])

  return (
    <Routes>
      <Route index path="/" element={<Login />} />
      <Route path="/sobre" element={< Sobre/>} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  )

  // return routes;
}

export default Rotas;