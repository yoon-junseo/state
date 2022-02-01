import { Dispatch } from 'react';

export type Color = 'red' | 'orange' | 'yellow';

export type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

export type Action =
  | { type: 'SET_COUNT'; count: number }
  | { type: 'SET_TEXT'; text: string }
  | { type: 'SET_COLOR'; color: Color }
  | { type: 'TOGGLE_GOOD' };

// dispatch를 위한 타입
export type SampleDispatch = Dispatch<Action>;
