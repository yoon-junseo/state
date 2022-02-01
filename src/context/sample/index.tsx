import React, { useReducer, createContext } from 'react';
import { State, SampleDispatch } from '@/context/sample/types';
import sampleReducer from '@/context/sample/reducer';

// context
export const SampleStateContext = createContext<State>({ count: 0, text: 'hello', color: 'red', isGood: false });
export const SampleDispatchContext = createContext<SampleDispatch>(() => null);

const SampleProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(sampleReducer, {
    count: 0,
    text: 'hello',
    color: 'red',
    isGood: true,
  });

  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>{children}</SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  );
};

export default SampleProvider;
