import { Snake } from './type';

export interface Coordinats {
  x: number;
  y: number;
}

export interface Square extends Coordinats {
  index: string;
}

export interface RootState {
  game: {
    status: string;
    snake: Snake;
    apple: Coordinats;
    snakeSize: number;
  };
}
