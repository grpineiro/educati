import React, { Component } from 'react';
import { render } from 'react-dom';
import token_1 from './_img/token_1.png'
import edit from './_img/camera_azul.png'
import './App.css';

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

function App() {
  return (
    <div className="App">
      { /* Início da Área Navbar */} 
     <nav id="Navbar">
       <div className="Area_Info_Perfil">
         <div id="Area_Img">
         <img src={token_1} className="Img_Perfil" alt="Imagem perfil"/>
         </div>
         <div className="Area_Name_Points">
           <p id="Name">Jorginho</p>
           <p id="Total_Stars">{'\u2B50'}100</p>
         </div>
       </div>
       <div className="Options_Nav">
        <ul id="Opt_Nav">
              <li id="Opt_li_Home"><a className="Opt_Home" href="#">Home</a></li>
              <li id="Opt_li_Perfil"><a className="Opt_Perfil" href="#">Perfil</a></li>
          </ul>
       </div>
       <div className="Option_Quit">
        <ul id="Opt_ul_Quit">
            <li id="Opt_li_Quit"><a className="Opt_a_Quit" href="#">Sair</a></li>
          </ul>
       </div>
    </nav>
    { /* Fim da Área Navbar */} 

    <div className="Container"></div>  { /* Faixa azul */} 
    
    { /* Início área usuário */} 
    <div className="Area_Perfil">
      <div className="Info_Perfil">
            <div className="Div_Img_Perfil">
              <img src={token_1} className="Img_Perfil" alt="Imagem perfil"/>
              <a id="Icon_camera" href="#"><img src={edit} className="Icon_edit" alt="alterar foto perfil"/></a>
            </div>
          <p id="Info_Perfil_Name">Jorginho</p>
      </div>

      <div className="Resumo_Perfil_Info">
          <div id="Email">
            <div className="Space_Email">
              <p id="p_Email">E-mail: </p>
            </div>
            <div id="Space_Email_User">
              <label id="lbl_email">email@dominio.com</label>
            </div>   
          </div>
          <div id="Birthday">
            <p id="p_birth">Nascimento: </p>
            <p id="p_date_birth">01/01/2000</p>
          </div>
          <div id="Stars">
            <p id="p_Stars">Estrelas conquistadas:</p>
            <p id="p_Total_Stars">{'\u2B50'}100</p>
          </div>
      </div>

    </div>
    { /* Fim área usuário */} 
    
    </div>
  );
}

export default App;
