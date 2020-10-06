/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Layout, Menu } from 'antd';
import { isArray } from 'lodash';
import { array, bool, object } from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import routeList from '../../routes/routeList';
import useMakeState from '../../hooks/useMakeState';

function Sidebar({ userFeatureList, sidebarIsOpen, match }) {

  const routeListMatched = routeList.filter(item => match.path.includes(item.path));

  const routeListOpenKeys = routeListMatched.map(item => item.path)
    
  const routeListSelectedKeys = routeListMatched[0].children ? routeListMatched[0].children.filter(item => match.path.includes(item.path)).map(item => item.path) : []

  const initState = {
    openKeys: routeListOpenKeys,
    selectedKeys: routeListSelectedKeys
  }

  const [state, setState] = useMakeState(initState);

  const { openKeys, selectedKeys } = state;

  const { Sider } = Layout;
  const { SubMenu } = Menu;

  function hasUserFeature(routeUserFeature) {
    return routeUserFeature && userFeatureList.includes(routeUserFeature);
  }

  function atLeastOneRouteChildrenHasUserFeature(routeChildren) {
    return isArray(routeChildren) && routeChildren.some(item => userFeatureList.includes(item.userFeature));
  }

  function onOpenChange(openKeys) {
    setState({
      openKeys
    })
  }

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={sidebarIsOpen}
    >
      <Menu
        mode="inline"
        defaultOpenKeys={openKeys}
        selectedKeys={selectedKeys}
        defaultSelectedKeys={selectedKeys}
        theme="dark"
        onOpenChange={onOpenChange}
      >
        {
          routeList.map(route => route.children ? ( 
            atLeastOneRouteChildrenHasUserFeature(route.children) ? (
            <SubMenu title={route.name} key={route.path} icon={<route.icon />}>
              {
                route.children.map(childRoute => (
                  childRoute.name && hasUserFeature(childRoute.userFeature)
                ) ? (
                  <Menu.Item key={childRoute.path}>
                    <Link to={childRoute.path}>
                      {childRoute.name}
                    </Link>
                  </Menu.Item>
                ) : null)
              }
            </SubMenu>
          ) : null ) : (
            <Menu.Item key={route.path}>
              <Link to={route.path}>
                {route.name}
              </Link>
            </Menu.Item>
          ))
        }
      </Menu>
    </Sider>
  )
}

const mapStateToProps = state => ({
  userFeatureList: state.user.featureList,
  sidebarIsOpen: state.sidebar.isOpen
}) 

export default connect(mapStateToProps)(withRouter(Sidebar));

Sidebar.propTypes = {
  userFeatureList: array,
  sidebarIsOpen: bool,
  match: object
}
