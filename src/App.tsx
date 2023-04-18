import { useContext } from 'react';
import './App.scss';
import { PointsContext} from './context/pointsContext';

function App() {
  const {points, addPoints, subtractPoints, getPoints} = useContext(PointsContext);

  return (
    <div className="app">
      {points}
      <button onClick={(e) => {
        e.preventDefault();
        addPoints(10);
      }}></button>
    </div>
  );
}

export default App;
