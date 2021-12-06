import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './perfil.css';

import { IoHomeOutline } from 'react-icons/io5'
import { FaRegUserCircle } from 'react-icons/fa'
import { ImExit } from 'react-icons/im'

import token_1 from '../../images/token_1.png'
import edit from '../../images/camera_azul.png'
import { UserContext } from '../../contexts/user.context';

function Perfil() {
  const { signOut, user } = useContext(UserContext);
  let navigate = useNavigate();

  const formatDate = (date) => {
    let newDate = new Date(date);
    let day = (newDate.getDate()+1).toString().padStart(2, '0')
    let month = (newDate.getMonth()+1).toString().padStart(2, '0')
    let year = newDate.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <div id="perfil">
      { /* Início da NavBar */}
      <nav className="navbar navbar-expand-lg navbar-light" id="Navbar_Perfil">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <img src={token_1} className="navbar-brand" id="Img_Perfil" alt="Imagem perfil" />
            <div className="Area_Name_Points_Perfil">
              <p id="Name_Perfil">{user ? `${user.first_name}` : "Convidado"}</p>
              <p id="Total_Stars_Perfil">{'\u2B50'}{user ? user.stars : 0}</p>
            </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link active" id="Opt_Home_Perfil" aria-current="page">
                  <IoHomeOutline id="icon_Home_Perfil" />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/perfil" className="nav-link active" id="Opt_Perfil" aria-current="page">
                  <FaRegUserCircle id="icon_Perfil" />
                  Perfil
                </Link>
              </li>
              <li className="nav-item">
                <button onClick={() => signOut(() => navigate("/"))} className="nav-link active" id="Opt_Quit_Perfil" aria-current="page">
                  <ImExit id="icon_Exit_Perfil" />
                  Sair
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Fim da NavBar */}

      <div className="forBlueDiv_Perfil"></div>  { /* Faixa azul */}

      {/* Início da edição de perfil (lado esquerdo) */}
      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-black overflow-hidden">
          <div className="my-6 py-6">
            <img src={token_1} id="Img_Perfil2" alt="Imagem perfil" />
            <a id="Icon_camera" href="/perfil"><img src={edit} id="Icon_edit_Perfil" alt="alterar foto perfil" /></a>
            <p id="Name_Perfil2">{user ? `${user.first_name} ${user.last_name}` : "Convidado"}</p>
          </div>
        </div>
        {/* Fim da edição de perfil (lado esquerdo) */}
        <div className="separationBar"></div> {/* Separação horizontal */}

        {/* Início da visualização de dados (lado direito) */}
        <div id="Perfil_Data">
          <ul className="list-group list-group-flush">
            <li className="list-group" id="emailTitle_Perfil">E-mail:</li>
            <li className="list-group" id="email_Perfil">{user ? user.email : "Não possui"}</li>
            <div className="separationBar1_data"></div>
            <li className="list-group" id="birthdayTitle_Perfil">Data de Nascimento:</li>
            <li className="list-group" id="birthday_Perfil">{user ? formatDate(user.birth.substring(0, 10)) : "Não possui"}</li>
            <div className="separationBar2_data"></div>
            <li className="list-group" id="TotalStarsTitle_Perfil">Estrelas conquistadas:</li>
            <li className="list-group" id="TotalStars_Data_Perfil">{'\u2B50'}{user ? user.stars : 0}</li>
          </ul>
        </div>
        {/* Fim da visualização de dados (lado direito) */}
      </div>
    </div>
  );
}

export default Perfil;
