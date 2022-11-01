import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeStateProvider } from './Context/ThemeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeStateProvider>
    <App />
    </ThemeStateProvider>
  </React.StrictMode>
);


