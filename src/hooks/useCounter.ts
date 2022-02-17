import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '@/modules';
import { increase, decrease, increaseBy } from '@/modules/counter';

export default function useCounter() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onClickIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onClickDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onClickIncreaseBy = useCallback((diff: number) => dispatch(increaseBy(diff)), [dispatch]);

  return {
    count,
    onClickIncrease,
    onClickDecrease,
    onClickIncreaseBy,
  };
}
