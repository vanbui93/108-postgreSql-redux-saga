import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './../../../components/Dashboard/index';
import { PropTypes } from 'prop-types';

class AdminLayoutRoute extends Component {
  render() {
    const { component: YourComponent, ...remainProps } = this.props; //remainProps là các thuộc tính trong ADMIN_ROUTES
    return (
      //render là props của route
      //render là kết xuất component inline nội tuyến: render={() => <div>Home</div>}
      //mà ko phải truyền vào dạng:  component={Dashboard}

      //remainProps bao gồm tất cả các props trừ component
      <Route {...remainProps} render={(routeProps) => {
        return (
          <Dashboard {...remainProps}>
            <YourComponent {...routeProps} />
          </Dashboard>
        )
      }}
      />
    )
  }
}

AdminLayoutRoute.propTypes = {
  path: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  exact: PropTypes.bool,
  name: PropTypes.string,
};

export default AdminLayoutRoute;