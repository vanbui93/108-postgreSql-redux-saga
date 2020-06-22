import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { Card, Typography, CardContent, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SignupPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.signup}>
          <Card>
            <CardContent>
              <form>
                <div className="text-xs-center pb-xs">
                  <Typography variant="caption" className={classes.title} color="textSecondary" gutterBottom>
                    Đăng kí tài khoản
                  </Typography>
                  <TextField
                    id="email"
                    label="Email"
                    className={classes.textField}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    id="password"
                    label="Password"
                    className={classes.textField}
                    fullWidth
                    type="password"
                    margin="normal"
                  />
                  <TextField
                    id="cpassword"
                    label="Confirm Password"
                    className={classes.textField}
                    fullWidth
                    type="password"
                    margin="normal"
                  />
                  <FormControlLabel
                    control={<Checkbox value="agree" />} label="Tôi đã đọc và đồng ý điều khoản"
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                  >
                    Sign Up
                  </Button>
                  <div className="pt-1 text-md-center">
                    <Link to="/login">
                      <Button>Đăng nhập</Button>
                    </Link>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
}

SignupPage.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(SignupPage);
