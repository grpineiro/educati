import React from 'react';
import { Link } from 'react-router-dom';

import token_1 from '../../images/token_1.png'
import edit from '../../images/camera_azul.png'
import './home.css';

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

function Home() {
    return (
      <div className="Corpo">
        { /* Início da Área Navbar */} 
       <nav id="Barra_navegacao">
         <div className="Div_Resumo_Perfil">
            <div id="Area_Imagem">
               <img src={token_1} className="Img_Do_Perfil" alt="Imagem perfil"/>
            </div>
            <div className="Div_Nome_Estrelas">
              <p id="Nome">Jorginho</p>
              <p id="Total_Estrelas">{'\u2B50'}100</p>
            </div>
         </div>

         <div className="Opcoes_Navegacao">
            <ul id="Opt_ul_Navegacao">
                <li id="Opcao_li_Home"><a className="Opcao_a_Home" href="#">Home</a></li>
                <li id="Opcao_li_Perfil"><a className="Opcao_a_Perfil" href="#">Perfil</a></li>
            </ul>
         </div>
         <div className="Opcao_Saida">
          <Link to="/">
            <ul id="Opcao_ul_Saida">
              <li id="Opcao_li_Saida"><a className="Opcao_a_Saida" href="#">Sair</a></li>
            </ul>
          </Link>
         </div>
      </nav>
      { /* Fim da Área Navbar */} 
  
      <div className="Container"></div>  { /* Faixa azul */} 
      
      { /* Início área usuário */} 
      <div className="Area_Perfil">
     

      
    </div>

      { /* Fim área usuário */} 
      
      </div>
    );
  }

export default Home;