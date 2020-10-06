import React from 'react';
import { element, oneOfType, string } from 'prop-types';

function ContentTitle({ children }) {
  return (
    <h2 className="py-3">
      {children}
    </h2>
  )
}

export default ContentTitle;

ContentTitle.propTypes = {
  children: oneOfType([element, string])
}
