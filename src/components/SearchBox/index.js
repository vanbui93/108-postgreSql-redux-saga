import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import { TextField } from '@material-ui/core';
import { PropTypes } from 'prop-types';

class SearchBox extends Component {
  render() {
    const { classes, handleChange } = this.props;

    return (
      <div>
        <h1>Search box</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic"
            className={classes.textField}
            label="Nhập từ khóa"
            onChange={handleChange}
          />
        </form>
      </div>
    )
  }
}

SearchBox.propTypes = {
  classes: PropTypes.object,
  handleChange: PropTypes.func,
}

export default withStyles(styles)(SearchBox)