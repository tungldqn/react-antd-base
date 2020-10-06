import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'antd';

function AuthLayout({ children }) {
  return (
    <Row justify="center" align="center" className="h-100-vh">
      <Col span={8} className="d-flex align-items-center">
        <Card className="w-100">
          {children}
        </Card>
      </Col>
    </Row>
  )
}

export default AuthLayout;

AuthLayout.propTypes = {
  children: PropTypes.element
}
