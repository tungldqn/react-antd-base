import React from 'react';
import { element } from 'prop-types';

function ContentInner({ children }) {
  return (
    <div className="content-inner">
      {children}
    </div>
  )
}

export default ContentInner;

ContentInner.propTypes = {
  children: element
}
