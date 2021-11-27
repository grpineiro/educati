import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import './home.css';

import { IoHomeOutline } from 'react-icons/io5'
import { FaRegUserCircle } from 'react-icons/fa'
import { ImExit } from 'react-icons/im'

import token_1 from '../../images/token_1.png'

function Home() {
  return (
    <div id="home">
      { /* Início da NavBar */}
      <nav className="navbar navbar-expand-lg navbar-light" id="Navbar_Home">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <img src={token_1} className="navbar-brand" id="Img_User_Home" alt="Imagem Usuário" />
            <div className="Area_Name_Points_User_Home">
              <p id="Name_User_Home">Jorginho</p>
              <p id="Total_Stars_User_Home">{'\u2B50'}120</p>
            </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link active" id="Opt_Home" aria-current="page">
                  <IoHomeOutline id="icon_Home" />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/perfil" className="nav-link active" id="Opt_Perfil_Home" aria-current="page">
                  <FaRegUserCircle id="icon_Perfil_Home" />
                  Perfil
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link active" id="Opt_Quit_Home" aria-current="page">
                  <ImExit id="icon_Exit_Home" />
                  Sair
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      { /* Fim da Navbar */}

      <div className="forBlueDiv_Home"></div>  { /* Faixa azul */}

      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                  role="img" aria-label="Placeholder: Game1" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>#GAME1</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="40%" y="50%" fill="#eceeef" dy=".3em">#GAME1</text>
                </svg>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                  role="img" aria-label="Placeholder: Game2" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>#GAME2</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="40%" y="50%" fill="#eceeef" dy=".3em">#GAME2</text>
                </svg>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                  role="img" aria-label="Placeholder: Game3" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>#GAME3</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="40%" y="50%" fill="#eceeef" dy=".3em">#GAME3</text>
                </svg>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                  role="img" aria-label="Placeholder: Game4" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="40%" y="50%" fill="#eceeef" dy=".3em">#GAME4</text>
                </svg>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                  role="img" aria-label="Placeholder: Game5" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" /><text x="40%" y="50%" fill="#eceeef"
                    dy=".3em">#GAME5</text>
                </svg>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                  role="img" aria-label="Placeholder: Game6" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" /><text x="40%" y="50%" fill="#eceeef"
                    dy=".3em">#GAME6</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
