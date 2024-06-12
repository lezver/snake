import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    status: 'Start',

    snake: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
    ],
    snakeHead: { x: 2, y: 0 },

    snakeSize: 3,
    apple: { x: 1, y: 1 },
    direction: 68,
    stopKeyCombinations: [
      [87, 83],
      [83, 87],
      [65, 68],
      [68, 65],
    ],
    saveKey: 68,
  },
  reducers: {
    changeStatus(state) {
      switch (state.status) {
        case 'Start':
          state.status = 'Pause';
          break;
        case 'Pause':
          state.status = 'Resume';
          break;
        case 'Resume':
          state.status = 'Pause';
          break;
        default:
          break;
      }
    },
    moveSnake(state) {
      if (state.status === 'Restart') return;
      let { x, y } = state.snakeHead;
      switch (state.direction) {
        case 68:
          x = x >= 9 ? 0 : x + 1;
          break;
        case 65:
          x = x <= 0 ? 9 : x - 1;
          break;
        case 87:
          y = y <= 0 ? 9 : y - 1;
          break;
        case 83:
          y = y >= 9 ? 0 : y + 1;
          break;
        default:
          break;
      }
      state.snakeHead = { x, y };
      state.snake.push({ x, y });
      state.snake = state.snake.slice(-state.snakeSize);
    },
    checkApple(state) {
      let { apple, snakeHead, snake } = state;

      if (apple.x === snakeHead.x && apple.y === snakeHead.y) {
        let isOnSnake = null;

        do {
          apple.x = Math.floor(Math.random() * 10);
          apple.y = Math.floor(Math.random() * 10);
          isOnSnake = snake.find(s => s.x === apple.x && s.y === apple.y);
        } while (isOnSnake);

        state.apple = apple;
        state.snakeSize++;
      }
    },
    checkGameOver(state) {
      let { x, y } = state.snakeHead;
      let snakeHeadLass = state.snake.slice();
      snakeHeadLass.pop();
      let bitedPlace = null;
      bitedPlace = snakeHeadLass.find(s => s.x === x && s.y === y);

      if (bitedPlace) state.status = 'Restart';
    },
    saveKey(state, action) {
      for (let [a, b] of state.stopKeyCombinations) {
        if (a === state.direction && b === action.payload) return;
      }
      state.saveKey = action.payload;
    },
    setDirection(state) {
      state.direction = state.saveKey;
    },
  },
});

export const {
  changeStatus,
  moveSnake,
  saveKey,
  setDirection,
  checkApple,
  checkGameOver,
} = gameSlice.actions;
export const gameReducer = gameSlice.reducer;
