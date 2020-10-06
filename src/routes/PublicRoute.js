import React from 'react';
import { checkIsAuth } from '../utils/auth';
import { Route } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
// import { get } from 'lodash';
// import queryString from "query-string";
// import { APP_CONFIG } from '../constants';
// import axios from 'axios';
// import JwtDecode from 'jwt-decode';
// import { setCookie } from '../ultils/utils-cookie';
// import { toastr } from 'react-redux-toastr';

function PublicRoute({ path, component: Component, layout: Layout, restricted, exact }) {

  // function checkCognitoToken(params) {
  //   axios.post('/authenticate/cognito', { params })
  //     .then(res => {
  //       const dataAccessToken = get(res, 'data.access_token', '');
  //       const decodedData = JwtDecode(dataAccessToken);
  //       const user = {
  //         userId: get(decodedData, 'userID', ''),
  //         email: get(decodedData, 'email', ''),
  //         name: get(decodedData, 'name', '')
  //       }
  //       localStorage.setItem('user', JSON.stringify(user));
  //       setCookie("auth_token", dataAccessToken);
  //       window.location.href = '/data/profile';
  //     })
  //     .catch(err => {
  //       toastr.error(get(err, 'response.data.message', 'Token is invalid, please sign in again'));
  //       setTimeout(() => {
  //         window.location.href = APP_CONFIG.cognito_login_url;
  //       }, 2000)
  //     })
  // }

  function routeRender(props) {
    if(checkIsAuth() && restricted) {
      return <Redirect exact to='/data/profile' />
    } else {
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      )
      // const urlPathname = get(props, 'location.pathname', '');
      // const urlHash = get(props, 'location.hash', '');
      // if(urlPathname === '/auth/sign-in-cognito') {
      //   if(urlHash) {
      //     const urlHashParsed = queryString.parse(urlHash);
      //     checkCognitoToken(urlHashParsed);
      //   } else {
      //     window.location.href = APP_CONFIG.cognito_login_url;
      //   }
      // } else {
      //   return (
      //     <Layout>
      //       <Component {...props} />
      //     </Layout>
      //   )
      // }
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

export default PublicRoute;

PublicRoute.propTypes = {
  path: PropTypes.string,
  component: PropTypes.elementType,
  layout: PropTypes.elementType,
  restricted: PropTypes.bool,
  exact: PropTypes.bool
}
