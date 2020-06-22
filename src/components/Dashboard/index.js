import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import { PropTypes } from 'prop-types';
import Header from './Header/index';
import Sidebar from './Sidebar/index';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as uiActions from './../../actions/ui';

var joinClasses = require('classnames');

class Dashboard extends Component {

  handleToggleSidebar = (value) => {
    const { uiActionCreators } = this.props;
    const { showSidebar, hideSidebar } = uiActionCreators;
    if (value === true) {
      showSidebar();
    } else {
      hideSidebar();
    }
  }

  render() {
    //children nhận tất cả props của route
    //(ở đây lấy props từ App(route) -> AdminLayoutRoute (routeProps)
    //props name lấy từ AdminLayoutRoute(remainProps), sau đó truyền vào cho header
    const { children, classes, name, openSideBar } = this.props;

    return (
      <div className={classes.dashboard}>
        <Header
          name={name}
          openSideBar={openSideBar}
          onToggleSidebar={this.handleToggleSidebar}
        />
        <div className={classes.wrapper}>
          <Sidebar
            openSideBar={openSideBar}
            onToggleSidebar={this.handleToggleSidebar}
          />
          <div className={joinClasses(classes.wrapperContent, { [classes.shiftLeft]: openSideBar === false })}>
            {children}
          </div>
        </div>
      </div>
    );
  }
};

Dashboard.propTypes = {
  children: PropTypes.object,
  classes: PropTypes.object,
  name: PropTypes.string,
  openSideBar: PropTypes.bool,
  uiActionCreators: PropTypes.shape({
    showSideBar: PropTypes.func,
    hideSideBar: PropTypes.func,
  }),
};

const mapStateToProps = (state, props) => {
  return {
    openSideBar: state.ui.openSideBar,
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    uiActionCreators: bindActionCreators(uiActions, dispatch),
  }
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(Dashboard);
