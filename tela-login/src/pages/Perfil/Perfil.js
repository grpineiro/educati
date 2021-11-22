import React from 'react';
import { Link } from 'react-router-dom';

import token_1 from '../../images/token_1.png'
import edit from '../../images/camera_azul.png'
import './perfil.css';

const Emoji = props => (  //Função para adicionar Emoji
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
    <div className="perfil">
      { /* Início da Área Navbar */}
      <nav id="Navbar_Perfil">
        <div className="Area_Info_Perfil">
          <div id="Area_Img_Perfil">
            <img src={token_1} className="Img_Perfil" alt="Imagem perfil" />
          </div>
          <div className="Area_Name_Points_Perfil">
            <p id="Name_Perfil">Jorginho</p>
            <p id="Total_Stars_Perfil">{'\u2B50'}100</p>
          </div>
        </div>
        
        <div className="Options_Nav_Perfil">
          <ul id="Opt_Nav_Perfil">
            <li id="Opt_li_Home_Perfil"><a className="Opt_Home_Perfil" href="#">Home</a></li>
            <li id="Opt_li_Perfil"><a className="Opt_Perfil" href="#">Perfil</a></li>
          </ul>
        </div>
        <div className="Option_Quit_Perfil">
          <Link to="/">
            <ul id="Opt_ul_Quit_Perfil">
              <li id="Opt_li_Quit_Perfil"><a className="Opt_a_Quit_Perfil" href="#">Sair</a></li>
            </ul>
          </Link>
        </div>
      </nav>
      { /* Fim da Área Navbar */}

      { /* Início área usuário 
      Área lateral esquerda: Foto e nome.*/}
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
  );
}

export default Perfil;
