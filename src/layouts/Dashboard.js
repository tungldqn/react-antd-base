import React from 'react';
import PropTypes from 'prop-types';

function DashBoardLayout({ children }) {
  return (
    <div>
      This is DashBoardLayout
      {children}
    </div>
  )
}

export default DashBoardLayout;

DashBoardLayout.propTypes = {
  children: PropTypes.element
}
