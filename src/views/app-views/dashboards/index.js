import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Dashboards = ({ match }) => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route
          path={`${match.url}/default`}
          component={lazy(() => import(`./default`))}
        />
        <Route
          path={`${match.url}/sales`}
          component={lazy(() => import(`./sales`))}
        />
        <Route
          path={`${match.url}/courts`}
          component={lazy(() => import(`./courts`))}
        />
        <Route
          path={`${match.url}/client`}
          component={lazy(() => import(`./client`))}
        />
        <Route
          path={`${match.url}/settings`}
          component={lazy(() => import(`./settings`))}
        />
      </Switch>
    </Suspense>
  );
};

export default Dashboards;
