import React from 'react';
import loadable from '@loadable/component';
import { Route, Switch } from 'react-router-dom';

import ContextProvider from '@/context';
import TodoProvider from '@/context/todo';
import SampleProvider from '@/context/sample';

const MainPage = loadable(() => import('@/pages/MainPage'));
const SamplePage = loadable(() => import('@/pages/SamplePage'));
const TodoPage = loadable(() => import('@/pages/TodoPage'));

const Router = () => {
  return (
    <>
      <Switch>
        <ContextProvider contexts={[TodoProvider, SampleProvider]}>
          <Route path="/" component={MainPage} exact />
          <Route path="/sample" component={SamplePage} exact />
          <Route path="/todo" component={TodoPage} exact />
        </ContextProvider>
      </Switch>
    </>
  );
};

export default Router;
