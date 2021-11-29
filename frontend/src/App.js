import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import UserContextProvider from './contexts/user.context';

import Rotas from './pages/routes';

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <div className="App">
          <Rotas />
        </div>
      </BrowserRouter>
    </UserContextProvider>

  );
}

export default App;
