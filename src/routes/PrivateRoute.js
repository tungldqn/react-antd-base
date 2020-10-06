import React from 'react';
import { checkIsAuth } from '../utils/auth';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';

function PrivateRoute({ path, component: Component, layout: Layout, userFeature, exact }) {

  // const userFeatureList = useSelector(state => state.userFeature.list);
  // const userFeatureListIsFetched = useSelector(state => state.userFeature.listIsFetched);

  // function hasUserFeature(userFeature) {
  //   return userFeatureList.includes(userFeature);
  // }

  function routeRender(props) {

    const locationPathName = get(props, 'location.pathname', '');
    const locationSearch = get(props, 'location.search', '');

    const encodedPath = encodeURIComponent(`${locationPathName}${locationSearch}`);

    if(checkIsAuth()) {
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      )
      // if( userFeature  && !hasUserFeature(userFeature) && path !== '/data/profile' && userFeatureListIsFetched ) {
      //   return <Redirect exact to='/data/profile' />
      // } else {
      //   return <Layout>
      //     <Component {...props} />
      //   </Layout>
      // }
    } else {
      return <Redirect to={`/auth/sign-in?redirect_url=${encodedPath}`} />
    }
  }

  return (
    <Route
      exact={exact}
      path={path}
      render={routeRender}
    />
  );
}

export default PrivateRoute;

PrivateRoute.propTypes = {
  path: PropTypes.string,
  component: PropTypes.elementType,
  layout: PropTypes.elementType,
  userFeature: PropTypes.string,
  exact: PropTypes.bool
}
