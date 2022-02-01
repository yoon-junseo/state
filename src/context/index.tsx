import React from 'react';

const ContextProvider = ({ contexts, children }: { contexts: Array<any>; children: React.ReactNode }) =>
  contexts.reduce(
    (prev: any, context: any) =>
      React.createElement(context, {
        children: prev,
      }),
    children,
  );

export default ContextProvider;
