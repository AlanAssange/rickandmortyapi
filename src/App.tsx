
import React, { useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { AppRouter } from './router/AppRouter';

function App() {

  return (
    <div>
      <BrowserRouter>
      <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
