import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar';
import { Layout, PageHeader } from 'antd';
import Header from '../components/Header';

function DashBoardLayout({ children }) {

  const { Content } = Layout;

  return (
    <Layout className="h-100-vh">
      <Sidebar />
      <Layout>
        <Header />
        <Content className="p-4">
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default DashBoardLayout;

DashBoardLayout.propTypes = {
  children: PropTypes.element
}
