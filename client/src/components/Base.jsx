import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';
import FlatButton from 'material-ui/FlatButton';


const Base = ({ children, info, onSwitchLanguage=f=>f, language='en'}) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">{info.react}</IndexLink>
        <FlatButton label="English" primary={'en'===language} onClick={() => onSwitchLanguage('en')}/>
        <FlatButton label="Español" primary={'es'===language} onClick={() => onSwitchLanguage('es')}/>
      </div>

      {Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
          <Link to="/users">{info.users}</Link>
          <Link to="/changeProfile">{info.changeProfile}</Link>
          <Link to="/logout">{info.logout}</Link>
        </div>
      ) : (
        <div className="top-bar-right">
          <Link to="/login">{info.login}</Link>
          <Link to="/signup">{info.signup}</Link>
        </div>
      )}

    </div>

    { /* child component will be rendered here */ }
    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired,
  info: PropTypes.object.isRequired,
  onSwitchLanguage: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired
};

export default Base;