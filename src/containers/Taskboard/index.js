import { Button, withStyles, Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Add } from "@material-ui/icons";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as modalActions from "../../actions/modal";
import * as taskActions from "../../actions/task";
import SearchBox from "../../components/SearchBox";
import TaskForm from "./../TaskForm/index";
import TaskList from "./../../components/TaskList";
import { STATUSES } from "../../constants/index";
import styles from "./styles";


class TaskBoard extends Component {
  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTasks } = taskActionCreators;
    fetchListTasks();
  }

  handEditTask = (task) => {
    const { taskActionCreators, modalActionCreators } = this.props;
    const { setTaskEditing } = taskActionCreators;
    setTaskEditing(task);

    const { showModal, changeModalTitle, changeModalContent } = modalActionCreators;
    showModal();
    changeModalTitle("Chỉnh sửa công việc");
    changeModalContent(<TaskForm />);
  }

  handleDeleteTask = (task) => {
    const { id } = task;
    const { taskActionCreators } = this.props;
    const { deleteTask } = taskActionCreators;
    deleteTask(id);
  }

  showModalDeleteTask = (task) => {
    const { modalActionCreators, classes } = this.props;

    const {
      showModal,
      hideModal,
      changeModalTitle,
      changeModalContent
    } = modalActionCreators;
    showModal();
    changeModalTitle("Xóa công việc");
    changeModalContent(
      <div className={classes.modalDelete}>
        <div className={classes.modalConfirmText}>
          Bạn chắc chắn muốn xóa <span className={classes.modalConfirmTextBold}>{task.title}</span> ?
        </div>
        <Box display="flex" flexDirection="row-reverse" mt={2}>
          <Box ml={1}>
            <Button variant="contained" onClick={hideModal}>Hủy bỏ</Button>
          </Box>
          <Box>
            <Button variant="contained" color="primary" onClick={() => this.handleDeleteTask(task)}>Đồng ý</Button>
          </Box>
        </Box>
      </div>
    );
  }


  renderBoard = () => {
    const { listTask } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={3}>
        {STATUSES.map((status, index) => {
          const taskFilter = listTask.filter(
            (taskFil) => taskFil.status === status.value
          );
          return (
            <TaskList
              key={index}
              tasks={taskFilter}
              status={status}
              index={index}
              onClickEdit={this.handEditTask}
              onClickDetele={this.showModalDeleteTask}
            />
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  openForm = () => {
    const { modalActionCreators, taskActionCreators } = this.props;
    const { showModal, changeModalTitle, changeModalContent } = modalActionCreators;
    const { setTaskEditing } = taskActionCreators;
    setTaskEditing(null);

    showModal();
    changeModalTitle("Thêm mới công việc");
    changeModalContent(<TaskForm />);
  };

  loadData = () => {
    const { taskActionCreators } = this.props;
    const { fetchListTasks } = taskActionCreators;
    fetchListTasks();
  };

  handleFilter = (e) => {
    const { value } = e.target;
    const { taskActionCreators } = this.props;
    const { filterTask } = taskActionCreators;
    filterTask(value);
  }

  renderSearchBox = () => {
    let xhtml = null;
    xhtml = <SearchBox handleChange={this.handleFilter} />
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Button variant="contained" color="primary" onClick={this.loadData}>
          Load data
        </Button>
        <Button variant="contained" color="primary" onClick={this.openForm}>
          <Add />
          Thêm mới công việc
        </Button>
        {this.renderSearchBox()}
        {this.renderBoard()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActions: PropTypes.shape({
    fetchListTasks: PropTypes.func,
    filterTask: PropTypes.func,
    setTaskEditing: PropTypes.func,
    deleteTask: PropTypes.func,
  }),
  modalActions: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func,
  }),
  listTask: PropTypes.array,
};

const mapStateToProps = (state, props) => {
  return {
    listTask: state.task.listTask,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch), //bindActionCreators Gộp nhiều action
    modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
);
