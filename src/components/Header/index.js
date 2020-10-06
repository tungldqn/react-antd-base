import React from 'react';
import { Button, Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';
import { changeSidebarIsOpen } from '../Sidebar/actions';

function Header({ sidebarIsOpen, changeSidebarIsOpen }) {

  const { Header } = Layout;

  function toggleSidebar() {
    changeSidebarIsOpen(!sidebarIsOpen)
  }

  return (
    <Header className="bg-white px-4">
      <Button onClick={toggleSidebar}>
        {
          sidebarIsOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
        }
      </Button>
    </Header>
  )
}

const mapStateToProps = state => ({
  sidebarIsOpen: state.sidebar.isOpen
})

const mapDispatchToProps = dispatch => ({
  changeSidebarIsOpen: isOpen => dispatch(changeSidebarIsOpen(isOpen))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  sidebarIsOpen: bool,
  changeSidebarIsOpen: func
}
