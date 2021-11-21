import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css'

import Login from './pages/Login'
import Rotas from './pages/routes';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Rotas />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
