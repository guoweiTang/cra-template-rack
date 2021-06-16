import React from 'react';
import { Layout } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from '../../router';
import SupremeLayout from '../supremeLayout';
import WrapperContent from '../wrapperContent';
const { Content } = Layout;

/**
 *
 * @param {object} route 路由配置对象
 */
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => {
        // pass the sub-routes down to keep nesting
        let res = (
          <route.component {...props} routes={route.routes} />
        );
        if (route.meta) {
          const {isFullScreen, auth} = route.meta;
          if (auth) {
            res = (
              <WrapperContent>{res}</WrapperContent>
            );
            <SupremeLayout>{res}</SupremeLayout>
          }
          if (isFullScreen) {
            res = (
              <SupremeLayout>{res}</SupremeLayout>
            );
          }
        }
        return res;
      }}
    />
  );
}
const AppContent = () => {
  return (
    <Content className="app-content">
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        <Redirect from="*" to="/error/404" />
      </Switch>
    </Content>
  );
};
export default AppContent;
