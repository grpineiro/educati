import { useContext } from "react"
import { Routes, Route } from "react-router-dom"

import Login from "./Login"
import Cadastro from "./Cadastro/cadastro"
import Sobre from "./Sobre/sobre"
import Perfil from "./Perfil/perfil"
import Home from "./Home/home"

import Velha from "./Games/Velha";

import { UserContext } from "../contexts/user.context";

const Rotas = () => {
  const { signed } = useContext(UserContext);
  console.log(signed)

  function SignInRoute() {
    return (
      <Routes>
        <Route path="/sobre" element={<Sobre />} />
        <Route index path="/home" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/games/velha" element={<Velha />} />
        <Route path="/" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastro />} />
      </Routes>
    )

  }

  function SignOutRoute() {
    return (
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastro />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/home" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/games/velha" element={<Velha />} />
      </Routes>
    )

  }

  return (
    signed ? <SignInRoute /> : <SignOutRoute />

  )

  // return routes;
}

export default Rotas;
