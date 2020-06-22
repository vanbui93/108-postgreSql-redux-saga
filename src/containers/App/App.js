import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '../../components/Modal';
import AdminLayoutRoute from './../../commons/Layout/AdminLayoutRoute/index';
import DefaultLayoutRoute from './../../commons/Layout/DefaultLayoutRoute/index';
import theme from './../../commons/Theme';
import GloballLoading from './../../components/GloballLoading/index';
import { ADMIN_ROUTES, ROUTES } from './../../constants/index';
import configureStore from './../../redux/configureStore';

const store = configureStore();

//Container connect tới reducer
class App extends Component {
  renderAdminRoute = () => {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map((route, index) => {
      console.log(ADMIN_ROUTES);

      return (
        <AdminLayoutRoute
          key={index}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      )
    })
    return xhtml;
  }


  renderDefaultRoute = () => {
    let xhtml = null;
    xhtml = ROUTES.map((route, index) => {
      console.log(ROUTES);

      return (
        <DefaultLayoutRoute
          key={index}
          path={route.path}
          component={route.component}
          name={route.name}
        />
      )
    })
    return xhtml;
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ToastContainer />
            <GloballLoading />
            <Modal />
            <Switch>
              {this.renderAdminRoute()}
              {this.renderDefaultRoute()}
            </Switch>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
};

export default App;