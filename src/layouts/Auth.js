import React from 'react';
import PropTypes from 'prop-types';

function AuthLayout({ children }) {
  return (
    <div>
      This is AuthLayout
      {children}
    </div>
  )
}

export default AuthLayout;

AuthLayout.propTypes = {
  children: PropTypes.element
}
