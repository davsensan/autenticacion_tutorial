import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';
import { FormattedMessage, intlShape, injectIntl, defineMessages } from 'react-intl';


const messages = defineMessages({
  ReactApp: {
    id: 'Base.ReactApp',
    defaultMessage: 'React    ',
  },
  Users: {
    id: 'Base.Users',
    defaultMessage: 'List users',
  },
  ChangeProfile: {
    id: 'Base.ChangeProfile',
    defaultMessage: 'Change profile',
  },
  Logout: {
    id: 'Base.Logout',
    defaultMessage: 'Log out',
  },
  Login: {
    id: 'Base.Login',
    defaultMessage: 'Log in',
  },
  Signup: {
    id: 'Base.Signup',
    defaultMessage: 'Sign up',
  },
  Remove: {
    id: 'Base.Remove',
    defaultMessage: 'Remove user',
  },
  Spanish: {
    id: 'Base.Spanish',
    defaultMessage: 'Spanish',
  },
  English: {
    id: 'Base.English',
    defaultMessage: 'English',
  }
});


const Base = ({ children, intl, locale}) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/" style={{color: 'blue'}}>{intl.formatMessage(messages.ReactApp)}</IndexLink>
        <Link to="/spanish" style={(intl.locale==="es" || intl.locale ==="es-ES") ? {fontSize: '16px', color:'white', background: 'green'} : {fontSize: '16px'}}>{intl.formatMessage(messages.Spanish)}</Link>
        <Link to="/english" style={(intl.locale==="en") ? {fontSize: '16px', color:'white', background: 'green'} : {fontSize: '16px'}}>{intl.formatMessage(messages.English)}</Link>
      </div>

      {Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
          <Link to="/remove" style={{color:'red'}}>{intl.formatMessage(messages.Remove)}</Link>
          <Link to="/users">{intl.formatMessage(messages.Users)}</Link>
          <Link to="/changeProfile">{intl.formatMessage(messages.ChangeProfile)}</Link>
          <Link to="/logout">{intl.formatMessage(messages.Logout)}</Link>
        </div>
      ) : (
        <div className="top-bar-right">
          <Link to="/login">{intl.formatMessage(messages.Login)}</Link>
          <Link to="/signup">{intl.formatMessage(messages.Signup)}</Link>
        </div>
        )}
    </div>

    { /* child component will be rendered here */ }
    {children}

  </div>
);

Base.propTypes = {
  intl: intlShape.isRequired,
  children: PropTypes.object.isRequired,
};

export default injectIntl(Base);