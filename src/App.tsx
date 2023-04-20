import { useState } from 'react';
import classes from './App.module.scss';
import { usePointsContext } from './context/pointsContext';
import Button from './components/button/button';
import Playground from './components/playground/playground';

function App() {
  const [startGame, setStartGame] = useState(false);
  const {points, addPoints, subtractPoints, getPoints} = usePointsContext();

  return (
    <div className={classes.app}>
      <div className={classes.title}>BlackJack</div>
      {!startGame ? <Button text={"Play"} onClick={() => setStartGame(!startGame)}></Button> : <Playground>hello</Playground>}
    </div>
  );
}

export default App;
