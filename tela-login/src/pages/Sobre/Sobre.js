import { Link } from 'react-router-dom';
import './sobre.css';

import sunSobre from '../../images/sun.png'
import cloudSobre from '../../images/cloud.png'
import cloudSobre_2 from '../../images/cloud.png'
import arrowSobre from '../../images/arrow.png'

function Sobre() {
  return (
    <div className="text-center" id="sobre">
      <div for="SunSobre">
        <img src={sunSobre} id="Img_Sun_Sobre" alt="imagem sol" />
      </div>
      <div for="CloudUpSobre">
        <img src={cloudSobre} id="Img_Cloud_Sobre" alt="imagem nuvem" />
      </div>
      <div for="CloudDownSobre">
        <img src={cloudSobre_2} id="Img_Cloud_Sobre_2" alt="imagem nuvem" />
      </div>
      
      <h1 className="sobreTitle">Sobre nós</h1>

      <div className="Area_About_Us_Sobre">
        <p className="About_Us_Sobre">
          Somos uma equipe de desenvolvimento formada por 5 amigos que se conheceram na universidade, no curso de Ciência da Computação. Nos unimos com um objetivo em comum: fomentar a educação e o aprendizado de crianças e jovens, trazendo uma forma mais dinâmica e interessante de aprender através de jogos digitais.
        </p>
        <p className="About_Us_Sobre2">
          Com base nisso, temos como principal missão usar desta ferramenta para instigar e desenvolver habilidades como a atenção, imaginação, concentração e raciocínio lógico, além de estimular as habilidades motoras, possibilitando, também, o retorno do prazer ao adquirir conhecimento.
        </p>
      </div>

      <div for="returnSobre">
        <Link to="/"><img src={arrowSobre} className="Img_Arrow_Sobre" alt="imagem Seta" /></Link>
      </div>
    </div>
  );
}

export default Sobre;
