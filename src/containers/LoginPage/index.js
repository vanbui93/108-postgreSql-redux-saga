import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { Card, Typography, CardContent, TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.login}>
          <Card>
            <CardContent>
              <form>
                <div className="text-xs-center pb-xs">
                  <Typography variant="caption" className={classes.title} color="textSecondary" gutterBottom>
                   Đăng nhập để tiếp tục
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
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                  >
                    Login
                  </Button>
                  <div className="pt-1 text-md-center">
                    <Link to="/signup">
                      <Button>Đăng kí tài khoản</Button>
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

LoginPage.propTypes={
  classes:PropTypes.object,
}

export default withStyles(styles)(LoginPage);
