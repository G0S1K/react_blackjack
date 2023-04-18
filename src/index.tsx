import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PointsProvider } from './context/pointsContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <PointsProvider>
    <App />
  </PointsProvider>
);

reportWebVitals();
