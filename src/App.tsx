
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { NotificationProvider } from './context/notification.context';
import { AppRouter } from './router/AppRouter';

function App() {

  return (
    <div>
      <NotificationProvider>
      <BrowserRouter>
      <AppRouter/>
      </BrowserRouter>
      </NotificationProvider>
    </div>
  );
}

export default App;
