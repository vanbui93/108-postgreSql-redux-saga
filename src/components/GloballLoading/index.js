import { withStyles } from '@material-ui/styles';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import LoadingIcon from './../../assets/images/loading.gif';
import styles from './styles';

class GloballLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    let xtml = null;
    if (showLoading) {
      xtml = (
        <div className={classes.globallLoading}>
          <img src={LoadingIcon} alt="loading" className={classes.icon} />
        </div>
      )
    }
    return xtml;
  }
}

GloballLoading.propTypes = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool
}

const mapStateToProps = (state, props) => {
  return {
    showLoading: state.ui.showLoading
  }
}

const withConnect = connect(
  mapStateToProps,
  null
);

//compose giúp giải quyết vấn đề thứ tự, dễ hiểu, cái này gọi trước thì chạy trước
export default compose(withStyles(styles), withConnect)(GloballLoading);