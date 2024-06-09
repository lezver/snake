import { useDispatch, useSelector } from 'react-redux';
import './Status.scss';
import {
  moveSnake,
  changeStatus,
  setDirection,
  checkApple,
  checkGameOver,
} from '../../store/gameSlice';
import { useRef } from 'react';

import { RootState } from '../../interfacesAndTypes/interface';

const Status: React.FC = () => {
  const status = useSelector<RootState>(store => store.game.status) as string;

  const dispatch = useDispatch();

  let timer: any = useRef(null);

  const update = () => {
    dispatch(moveSnake());
    dispatch(setDirection());
    dispatch(checkApple());
    dispatch(checkGameOver());
  };
  const startTimer = () => (timer.current = setInterval(() => update(), 400));
  const stopTimer = () => clearInterval(timer.current);

  const clickHandler = () => {
    if (status === 'Restart') {
      window.location.reload();
      return;
    }
    if (status !== 'Pause') startTimer();
    else stopTimer();
    dispatch(changeStatus());
  };

  return (
    <button className="btn" onClick={clickHandler}>
      {status}
    </button>
  );
};

export default Status;
