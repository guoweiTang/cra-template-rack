import React, { useState } from 'react';
import { Layout, Menu, Button, Typography } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import routes from '../../router';
import logo from '../../assets/img/logo.svg';

const { Sider } = Layout;
const { Link: ALink } = Typography;

const AppSider = ({ collapsed, setCollapsed }) => {
  const { pathname } = useLocation();
  const [activeName, setActiveName] = useState(pathname);

  const handleChangeMenu = (key) => {
    setActiveName(key.toString());
  };

  return (
    <Sider
      className="app-sider"
      theme="light"
      collapsedWidth={48}
      collapsible
      collapsed={collapsed}
      trigger={null}
      style={{
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <ALink href="/">
        <div className={`sider-logo ${!collapsed && 'active'}`}>
          <img className="logo" src={logo} width="32" height="32" alt="logo" />
          <span>Poeti Cloud</span>
        </div>
      </ALink>
      <div className="sider-main">
        <Menu
          theme="light"
          onClick={({ key }) => handleChangeMenu(key)}
          selectedKeys={[activeName]}
          mode="inline"
        >
          {routes.map(
            (item) =>
              (!item.meta || !item.meta.hidden) && (
                <Menu.Item key={item.path} icon={item.meta.icon}>
                  <Link to={item.path}>{item.meta.title}</Link>
                </Menu.Item>
              )
          )}
        </Menu>
      </div>
      <div className="links">
        <div className="sider-switch" onClick={() => setCollapsed(!collapsed)}>
          <Button type="link">
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div>
        {!collapsed && (
          <Button type="link" icon={<QuestionCircleOutlined />}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://shimo.im/docs/KDtHWqTDHRtKHHV3"
            >
              {' '}
              使用说明
            </a>
          </Button>
        )}
      </div>
    </Sider>
  );
};
export default AppSider;
