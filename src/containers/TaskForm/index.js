import { Box, Button, Grid, MenuItem } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from "redux";
import { Field, reduxForm } from 'redux-form';
import * as ModalActions from "../../actions/modal";
import * as taskActions from "../../actions/task";
import renderTextField from './../../components/FormHelper/TextField/index';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import validate from './validate';
import renderSelectField from '../../components/FormHelper/SelectField';

class TaskForm extends Component {

  handleSubmitForm = (data) => {
    const { taskActionCreators, taskEditing } = this.props;
    const { addTask, updateTask } = taskActionCreators;
    const { title, description, status } = data;


    if (taskEditing && taskEditing.id) {
      updateTask(title, description, status);
      console.log(data);
    } else {
      addTask(title, description);
    }
  }

  renderStatusSelection = () => {
    let xhtml = null;
    const { classes, taskEditing } = this.props;
    if (taskEditing && taskEditing.id) {
      xhtml = (
        <Field
          id="status"
          label="Trạng thái"
          className={classes.select}
          name="status"
          component={renderSelectField}
        >
          <MenuItem value={0}>Ready</MenuItem>
          <MenuItem value={1}>In Progress</MenuItem>
          <MenuItem value={2}>Completed</MenuItem>
        </Field>
      );
    }
    return xhtml;
  }

  render() {
    var { classes, modalActionCreators, handleSubmit, invalid, submitting } = this.props;
    const { hideModal } = modalActionCreators;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Field
              id="title"
              label="Tiêu đề"
              className={classes.textField}
              margin="dense"
              name="title"
              component={renderTextField}
              fullWidth
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="description"
              label="Mô tả"
              name="description"
              multiple
              rowsMax="4"
              className={classes.textField}
              margin="dense"
              component={renderTextField}
              fullWidth
            />
          </Grid>
          <Grid item md={12}>
            {this.renderStatusSelection()}
          </Grid>
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
              <Box m={1}>
                <Button variant="contained" color="primary" type="submit" disabled={invalid || submitting}>Lưu lại</Button>
              </Box>
              <Box m={1}>
                <Button variant="contained" color="secondary" onClick={hideModal}>Hủy bỏ</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    )
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  modalActionCreators: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
  taskActionCreators: PropTypes.shape({
    addTask: PropTypes.func,
    updateTask: PropTypes.func,
  }),
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  taskEditing: PropTypes.object,
}

const mapStateToProps = (state, props) => {
  return {
    taskEditing: state.task.taskEditing,
    initialValues: state.task.taskEditing,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    modalActionCreators: bindActionCreators(ModalActions, dispatch),
    taskActionCreators: bindActionCreators(taskActions, dispatch),
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);


const FORM_NAME = 'TASK_MANAGEMENT';

const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate
});

export default compose
  (withStyles(styles),
    withConnect,
    withReduxForm,
  )(TaskForm);
