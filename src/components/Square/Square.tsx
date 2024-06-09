import { useSelector } from 'react-redux';
import './Square.scss';
import { Snake } from '../../interfacesAndTypes/type';
import { RootState, Coordinats } from '../../interfacesAndTypes/interface';

interface SquareProps {
  square: Coordinats;
}

const Square: React.FC<SquareProps> = props => {
  const { x, y } = props.square as Coordinats;

  const snake = useSelector<RootState>(store => store.game.snake) as Snake;
  const apple = useSelector<RootState>(store => store.game.apple) as Coordinats;

  let styleOfLi: string = '';

  for (let i of snake) {
    if (i.x === x && i.y === y) styleOfLi = 'snake';
  }

  if (x === apple.x && y === apple.y) styleOfLi = 'apple';

  return <li className={`square${styleOfLi && ' ' + styleOfLi}`} />;
};
export default Square;
