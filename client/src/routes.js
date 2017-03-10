import BasePage from './containers/BasePage.jsx';
import HomePage from './containers/HomePage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPageConnect from './containers/LoginPageConnect.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import UsersPage from './containers/UsersPage.jsx';
import ForgotPage from './containers/ForgotPage.jsx';
import NewPasswordPage from './containers/NewPasswordPage.jsx';
import ChangeProfilePage from './containers/ChangeProfilePage.jsx';
import Auth from './modules/Auth';


const routes = {
  // base component (wrapper for the whole application).
  component: BasePage,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, DashboardPage);
        } else {
          callback(null, HomePage);
        }
      }
    },

    {
      path: '/login',
      component: LoginPageConnect
    },

    {
      path: '/signup',
      component: SignUpPage
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }
    },
    {
      path: '/users',
      component: UsersPage
    },
    {
      path: '/forgot',
      component: ForgotPage
    },
    {
      path: '/reset/:token',
      component: NewPasswordPage
    },
    {
      path: '/changeProfile',
      component: ChangeProfilePage
    },


  ]
};

export default routes;