import { Squares } from '../../interfacesAndTypes/type';
import Square from '../Square/Square';
import Total from '../Total';
import './Board.scss';

const Board: React.FC = () => {
  const squares: Squares = [];
  const range: number = 10;

  for (let y = 0; y < range; y++) {
    for (let x = 0; x < range; x++) {
      squares.push({ x, y, index: '' + y + x });
    }
  }

  return (
    <>
      <Total />
      <ul className="board">
        {squares.map(square => (
          <Square key={square.index} square={square} />
        ))}
      </ul>
    </>
  );
};

export default Board;
