import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import appTheme from './theme/appTheme';
import { ThemeProvider } from '@mui/material';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
