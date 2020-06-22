import React, { Component } from 'react'
import { withStyles, Fab } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import styles from './styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

class TaskItem extends Component {
  render() {
    const { classes, status, task, onClickEdit,onClickDetele } = this.props;
    return (
      <Card key={task.id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">
                {task.title}
              </Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cardAction}>
          <Fab size="small"
            color="secondary"
            aria-label="add"
            className={classes.margin}
            onClick={onClickEdit}
          >
            <EditIcon />
          </Fab>
          <Fab size="small"
            color="secondary"
            aria-label="add"
            className={classes.margin}
            onClick={onClickDetele}
          >
            <DeleteIcon />
          </Fab>
        </CardActions>
      </Card>
    )
  }
}

TaskItem.propTypes = {
  classes: PropTypes.object,
  task: PropTypes.object,
  status: PropTypes.object,
  onClickEdit: PropTypes.func,
  onClickDetele: PropTypes.func,
}

export default withStyles(styles)(TaskItem);
