import { Link } from 'react-router-dom';
import './sobre.css';

import sunSobre from '../../images/sun.png'
import cloudSobre from '../../images/cloud.png'
import cloudSobre_2 from '../../images/cloud.png'
import arrowSobre from '../../images/arrow.png'

function Sobre() {
  return (
    <div className="sobre">
      <img src={sunSobre} className="Img_Sun_Sobre" alt="imagem sol" />
      <img src={cloudSobre} className="Img_Cloud_Sobre" alt="imagem nuvem" />
      <img src={cloudSobre_2} className="Img_Cloud_Sobre_2" alt="imagem nuvem" />
      <div className="Content_area_Sobre">
        <h1 className="sobreTitle">EducaTI</h1>
        <div className="Area_About_Us_Sobre">
          <p className="About_Us_Sobre">
            Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!
          </p>
        </div>
      </div>
      <footer className="Footer_Sobre">
        <div className="Arrow_Back_Sobre">
          <Link to="/"><button ><img src={arrowSobre} className="Img_Arrow_Sobre" alt="imagem Seta" /></button></Link>
        </div>
        <div className="Title_page_Sobre">
          <p className="Title_About_Sobre">Sobre</p>
        </div>
      </footer>
    </div>
  );
}

export default Sobre;
