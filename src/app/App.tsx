import './App.scss';
import Board from '../components/Board';
import Status from '../components/Status';

import { useDispatch, useSelector } from 'react-redux';
import { saveKey } from '../store/gameSlice';
import Info from '../components/Info';
import { RootState } from '../interfacesAndTypes/interface';

function App() {
  const dispatch = useDispatch();
  const status = useSelector<RootState>(state => state.game.status);

  const keyDownHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'w' || e.key === 'd' || e.key === 's' || e.key === 'a')
      dispatch(saveKey(e.key));
  };

  return (
    <div className="App" onKeyDownCapture={keyDownHandler}>
      {status === 'Start' ? <Info /> : <Board />}

      <Status />
    </div>
  );
}

export default App;
