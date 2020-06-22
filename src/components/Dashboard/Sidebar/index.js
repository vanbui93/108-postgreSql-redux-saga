import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import { PropTypes } from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ADMIN_ROUTES } from './../../../constants/index';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
  toggleDrawer = (value) => {
    const { onToggleSidebar } = this.props;
    if (onToggleSidebar) {
      onToggleSidebar(value);
    }
  };

  renderList = () => {
    const { classes } = this.props;
    let xhtml = null;
    xhtml = (
      <div className={classes.list}>
        <List component="div">
          {ADMIN_ROUTES.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.path}
                exact={item.exact}
                className={classes.menuLink}
                activeClassName={classes.menuLinkActive}
              >
                <ListItem key={index} className={classes.menuItem} button>
                  {item.name}
                </ListItem>
              </NavLink>
            )
          })}
        </List>
      </div>
    );
    return xhtml;
  }

  render() {
    const { classes,openSideBar } = this.props;
    return (
      <Drawer open={openSideBar} onClose={() => this.toggleDrawer(false)}
        variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {this.renderList()}
      </Drawer>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  openSideBar: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
}

export default withStyles(styles)(Sidebar);
