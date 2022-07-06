import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_Auth0_Domain}
    clientId={process.env.REACT_APP_Auth0_ClientID}
    redirectUri={process.env.REACT_APP_SERVER_URL}
  >
    <App />
  </Auth0Provider>,
);

