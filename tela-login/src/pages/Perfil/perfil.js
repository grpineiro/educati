import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './perfil.css';
import { Link } from 'react-router-dom'

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
    <div id="initialNavbar">
      { /* Início da Área Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="Navbar_Perfil">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <img src={token_1} className="navbar-brand" id="Img_Perfil" alt="Imagem perfil" />
            <div className="Area_Name_Points_Perfil">
              <p id="Name_Perfil">Jorginho</p>
              <p id="Total_Stars_Perfil">{'\u2B50'}100</p>
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
      { /* Fim da Área Navbar */}

      <div className="text-center" id="perfil">
        {/* Início área usuário  */}
        {/* Área lateral esquerda: Foto e nome. */}
        <div className="Area_Perfil_User">
          <div className="Info_Perfil">
            <div className="Div_Img_Perfil">
              <img src={token_1} className="Img_Perfil" alt="Imagem perfil" />
              <a id="Icon_camera_Perfil" href="#"><img src={edit} className="Icon_edit_Perfil" alt="alterar foto perfil" /></a>
            </div>
            <p id="Info_Perfil_Name">Jorginho</p>
          </div>
          { /* Fim área esquerda */}

          { /* Início área direita: Email, Data Nascimento, Qtd. Estrelas */}
          <div className="Resumo_Perfil_Info">
            <div id="Email_Perfil">
              <div className="Space_Email_Perfil">
                <p id="p_Email_Perfil">E-mail: </p>
              </div>
              <div id="Space_Email_User_Perfil">
                <label id="lbl_email_Perfil">email@dominio.com</label>
              </div>
            </div>
            <div id="Birthday_Perfil">
              <p id="p_birth_Perfil">Nascimento: </p>
              <p id="p_date_birth_Perfil">01/01/2000</p>
            </div>
            <div id="Stars_Perfil">
              <p id="p_Stars_Perfil">Estrelas conquistadas:</p>
              <p id="p_Total_Stars_Perfil">{'\u2B50'}100</p>
            </div>
          </div>
        </div>
        { /* Fim área usuário */}
      </div>
    </div>
  );
}

export default Perfil;
