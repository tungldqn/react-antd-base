import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { authRoutes, dashboardRoutes } from './Routes';
import AuthLayout from '../layouts/Auth';
import DashBoardLayout from '../layouts/Dashboard';
import Page404 from '../modules/Auth/Page404';

function routeList(Layout, routes) {

  function routeRender({ Layout, Component }) {
    return <Layout>
      <Component></Component>
    </Layout>
  }

  return routes.map(({ children, path, Component }, index) =>
    children ? (
      // Route item with children
      children.map(({ path, Component }, index) => (
        <Route
          key={index}
          path={path}
          exact
          render={props => {
            return routeRender({ ...props, Layout, Component })
          }}
        />
      ))
    ) : (
      // Route item without children
      <Route
        key={index}
        path={path}
        exact
        render={props => routeRender({ ...props, Layout, Component })}
      />
    )
  )
}

function Routes() {
  return (
    <Router>
      <Switch>
        {routeList(AuthLayout, authRoutes)}
        {routeList(DashBoardLayout, dashboardRoutes)}
        <Route render={() => <Page404 />} />
      </Switch>
    </Router>
  )
}

export default Routes;
