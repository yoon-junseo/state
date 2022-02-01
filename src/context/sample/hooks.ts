import { useContext } from 'react';
import { SampleDispatch } from '@/context/sample/types';
import { SampleStateContext, SampleDispatchContext } from '@/context/sample';

export const useSampleState = () => {
  const state = useContext(SampleStateContext);
  if (!state) throw new Error('Cannot find SampleProvider');

  return state;
};

export const useSampleDispatch = (): SampleDispatch => {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider');

  return dispatch;
};
