import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './home.css';
import { Link } from 'react-router-dom';

import { IoHomeOutline } from 'react-icons/io5'
import { FaRegUserCircle } from 'react-icons/fa'
import { ImExit } from 'react-icons/im'

import token_1 from '../../images/token_1.png'

const EmojiHome = props => (  //Função para adicionar Emoji
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
)

function Home() {
  return (
    <div id="corpo">
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="Navbar_Home">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <img src={token_1} className="navbar-brand" id="Img_User_Home" alt="Imagem Usuário" />
            <div className="Area_Name_Points_User_Home">
              <p id="Name_User_Home">Jorginho</p>
              <p id="Total_Stars_User_Home">{'\u2B50'}100</p>
            </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" id="Opt_Home" aria-current="page" href="#">
                  <IoHomeOutline id="icon_Home" />
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" id="Opt_Perfil_Home" aria-current="page" href="#">
                  <FaRegUserCircle id="icon_Perfil_Home" />
                  Perfil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" id="Opt_Quit_Home" aria-current="page" href="#">
                  <ImExit id="icon_Exit_Home" />
                  Sair
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      { /* Fim da Área Navbar */}

      <div class="forBlueDiv_Home"></div>  { /* Faixa azul */}

      <div className="text-center" id="home">
        { /* Início área usuário */}
        <div className="Area_Perfil"></div>
        { /* Fim área usuário */}
      </div>
    </div>
  );
}

export default Home;
