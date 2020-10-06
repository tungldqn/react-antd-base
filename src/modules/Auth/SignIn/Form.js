import React from 'react';
import { Button, Form, Input, notification } from 'antd';
import { GoogleLogin } from 'react-google-login';
import { googleClientId } from '../../../constants';
import jwtDecode from "jwt-decode";
import { get, pick } from 'lodash';
import queryString from "query-string";
import mainAxios from '../../../axios/main';
import { setCookie } from '../../../utils/cookie';
import { withRouter } from 'react-router-dom';
import { fetchUserFeatureList } from '../../User/actions';
import { connect } from 'react-redux';
import { func } from 'prop-types';

function AuthSignInForm({ location, history, fetchUserFeatureList }) {

  const pathSearch = queryString.parse(location.search);

  async function checkGoogleToken(tokenId, user) {
    try {
      const res = await mainAxios.postRequest('authenticate/railsbank-login', tokenId);
      const dataAccessToken = get(res, 'data.access_token', '');
      const decodedData = jwtDecode(dataAccessToken);
      user = {
        ...user,
        userId: get(decodedData, 'userID', '')
      }
      localStorage.setItem("user", JSON.stringify(user));
      setCookie("auth_token", dataAccessToken);
      fetchUserFeatureList();
      if (pathSearch.redirect_url) {
        history.push(pathSearch.redirect_url);
      } else {
        history.push("/data/profile");
      }
    } catch (err) {
      console.log(err);
      notification.error({
        message: get(err, 'response.data.message', 'Sign in failed')
      })
    }
  }

  function onSuccess(response) {
    const user = pick(response.profileObj, ['email','name', 'imageUrl']);
    checkGoogleToken(get(response, 'tokenId', ''), user);
  }

  function onFailure() {

  }

  return (
    <Form
      layout="vertical"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username !'
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password !'
          }
        ]}
      >
        <Input.Password />
      </Form.Item>
        
      <Form.Item className="mb-0 my-3">
        <Button type="primary" htmlType="submit" className="w-100">
          Submit
        </Button>
      </Form.Item>

      <GoogleLogin
        clientId={googleClientId}
        render={renderProps => (
          <div className="text-center">
            <Button type="link" onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</Button>
          </div>
        )}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </Form>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchUserFeatureList: () => dispatch(fetchUserFeatureList())
})

export default withRouter(connect(null, mapDispatchToProps)(AuthSignInForm));

AuthSignInForm.propTypes = {
  fetchUserFeatureList: func
}
