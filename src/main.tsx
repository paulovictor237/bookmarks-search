import ReactDOM from 'react-dom/client';
import '@/globals.css';
import { ThemeProvider } from './components/theme-provider.tsx';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <App />
  </ThemeProvider>,
);
