import { useSelector } from 'react-redux';
import './Total.scss';
import { RootState } from '../../interfacesAndTypes/interface';

const Total: React.FC = () => {
  const snakeSize = useSelector<RootState>(
    state => state.game.snakeSize
  ) as number;

  return (
    <h2 className="total">
      Total : <span>{snakeSize - 3}</span>
    </h2>
  );
};

export default Total;
