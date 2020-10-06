import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import routeList from './routeList';
// import Page404 from '../pages/auth/404';
import { checkIsAuth } from '../utils/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AuthLayout from '../layouts/Auth';

const renderRoutes = (routes) =>
  routes.map((route, index) => route.children ? (
    route.children.map((childRoute, index) => childRoute.privateRoute ? (
      <PrivateRoute
        key={index}
        path={childRoute.path}
        component={childRoute.component}
        layout={route.layout}
        userFeature={childRoute.userFeature}
        exact={true}
      />
  ) : (
    <PublicRoute
      key={index}
      path={childRoute.path}
      component={childRoute.component}
      layout={route.layout}
      restricted={childRoute.restricted}
      exact={true}
    />
  ))) : route.privateRoute ? (
    <PrivateRoute
      key={index}
      path={route.path}
      component={route.component}
      layout={route.layout}
      userFeature={route.userFeature}
      exact={true}
    />
  ) : (
    <PublicRoute
      key={index}
      path={route.path}
      component={route.component}
      layout={route.layout}
      restricted={route.restricted}
      exact={true}
    />
  )
);

const Routes = () => {
  return (
    <Router>
      <Switch>
        {renderRoutes(routeList)}
        <Route
          path='/'
          render={() => checkIsAuth() ? <Redirect to='/data/profile' /> : <Redirect to='/auth/sign-in' />}
        />
        {/* <Route
          render={() => (
            <AuthLayout>
              <Page404 />
            </AuthLayout>
          )}
        /> */}
      </Switch>
    </Router>
  )
};

export default Routes;
