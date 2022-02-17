import React from 'react';

import useCounter from '@/hooks/useCounter';

const Counter = () => {
  const { count, onClickIncrease, onClickDecrease, onClickIncreaseBy } = useCounter();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClickIncrease}>+1</button>
      <button onClick={onClickDecrease}>-1</button>
      <button onClick={() => onClickIncreaseBy(5)}>+5</button>
    </div>
  );
};

export default Counter;
