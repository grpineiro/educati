import sun from './_imgs/sun.png'
import cloud from './_imgs/cloud.png'
import cloud_2 from './_imgs/cloud.png'
import Arrow from './_imgs/Arrow.png'
import './App.css';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <img src={sun} className="Img_Sun" alt="imagem sol"/>
      <img src={cloud} className="Img_Cloud" alt="imagem núvem"/>
      <img src={cloud_2} className="Img_Cloud_2" alt="imagem núvem"/>
      <div className="Content_area">
        <h1 className="MainTitle">EducaTI</h1>
          <div className="Area_About_Us">
            <p className="About_Us">
            Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!
            </p>
          </div>
      </div>
      <footer className="Footer">
          <div className="Arrow_Back">
          <Link to="/"><button ><img src={Arrow} className="Img_Arrow" alt="imagem Seta" /></button></Link>
          </div>
          <div className="Title_page">
            <p className="Title_About">Sobre</p>
          </div>
      </footer>
    </div>
  );

}

export default App;
