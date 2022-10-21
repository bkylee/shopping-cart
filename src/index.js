import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from './Route-Switch';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <BrowserRouter>
          <RouteSwitch />
       </BrowserRouter>
  </React.StrictMode>
);
