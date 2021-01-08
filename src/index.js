import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { auth } from 'config/firebase/firebaseConfig';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
