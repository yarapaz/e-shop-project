import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
//Si importo esto importo todos los estilos css de bootstrap que en este caso no me interesan. Quitarlo parece dejarme mas libertad.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
