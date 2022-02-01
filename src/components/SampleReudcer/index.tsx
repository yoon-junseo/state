import React from 'react';

import SampleProvider from '@/context/sample';

import ReducerSample from '@/components/SampleReudcer/ReducerSample';

const SampleReducer = () => {
  return (
    <SampleProvider>
      <ReducerSample />
    </SampleProvider>
  );
};

export default SampleReducer;
