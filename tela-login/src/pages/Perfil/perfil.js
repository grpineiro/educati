import React from 'react';
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './perfil.css';

import { IoHomeOutline } from 'react-icons/io5'
import { FaRegUserCircle } from 'react-icons/fa'
import { ImExit } from 'react-icons/im'

import token_1 from '../../images/token_1.png'
import edit from '../../images/camera_azul.png'

const EmojiPerfil = props => (  //Função para adicionar Emoji
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
)

function Perfil() {
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
              <p id="Name_Perfil">Jorginho</p>
              <p id="Total_Stars_Perfil">{'\u2B50'}120</p>
            </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link active" id="Opt_Home_Perfil" aria-current="page" href="#">
                  <IoHomeOutline id="icon_Home_Perfil" />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/perfil" className="nav-link active" id="Opt_Perfil" aria-current="page" href="#">
                  <FaRegUserCircle id="icon_Perfil" />
                  Perfil
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link active" id="Opt_Quit_Perfil" aria-current="page" href="#">
                  <ImExit id="icon_Exit_Perfil" />
                  Sair
                </Link>
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
            <a id="Icon_camera" href="#"><img src={edit} id="Icon_edit_Perfil" alt="alterar foto perfil" /></a>
            <p id="Name_Perfil2">Jorginho</p>
          </div>
        </div>
        {/* Fim da edição de perfil (lado esquerdo) */}
        <div className="separationBar"></div> {/* Separação horizontal */}

        {/* Início da visualização de dados (lado direito) */}
        <div id="Perfil_Data">
          <ul className="list-group list-group-flush">
            <li className="list-group" id="emailTitle_Perfil">E-mail:</li>
            <li className="list-group" id="email_Perfil">dominio@email.com</li>
            <div className="separationBar1_data"></div>
            <li className="list-group" id="birthdayTitle_Perfil">Data de Nascimento:</li>
            <li className="list-group" id="birthday_Perfil">01/01/1998</li>
            <div className="separationBar2_data"></div>
            <li className="list-group" id="TotalStarsTitle_Perfil">Estrelas conquistadas:</li>
            <li className="list-group" id="TotalStars_Data_Perfil">{'\u2B50'}120</li>
          </ul>
        </div>
        {/* Fim da visualização de dados (lado direito) */}
      </div>
    </div>
  );
}

export default Perfil;
