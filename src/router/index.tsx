import React from 'react';
import loadable from '@loadable/component';
import { Route, Switch } from 'react-router-dom';

import TodoProvider from '@/context/todo';

const MainPage = loadable(() => import('@/pages/MainPage'));
const SamplePage = loadable(() => import('@/pages/SamplePage'));
const TodoPage = loadable(() => import('@/pages/TodoPage'));

const Router = () => {
  return (
    <>
      <Switch>
        <TodoProvider>
          <Route path="/" component={MainPage} exact />
          <Route path="/sample" component={SamplePage} exact />
          <Route path="/todo" component={TodoPage} exact />
        </TodoProvider>
      </Switch>
    </>
  );
};

export default Router;
