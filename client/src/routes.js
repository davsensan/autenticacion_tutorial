import BasePage from './containers/BasePage.jsx';
import HomePage from './components/HomePage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
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
      component: LoginPage
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
    {
      path:'/remove',
      onEnter: (nextState, replace) => {
        {
        const xhr = new XMLHttpRequest();
        xhr.open('get', '/api/remove');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // set the authorization HTTP header
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
              alert(xhr.response.message);
               } 
        }); 
        xhr.send();
        Auth.deauthenticateUser();
        replace('/')
        }
      }
    },
    {
      path: '/spanish',
      onEnter: (nextState, replace) => {
        localStorage.setItem("language", "es")
        console.log(localStorage.getItem("language"))
        // change the current URL to /
        replace('/');
        //Recargamos para obtener los datos necesarios en el idioma español
        window.location.reload()
      }
    },
    {
      path: '/english',
      onEnter: (nextState, replace) => {
        localStorage.setItem("language", "en")
        // change the current URL to /
        replace('/');
        //Recargamos para obtener los datos necesarios en el idioma español
        window.location.reload()
      }
    }

  ]
};

export default routes;